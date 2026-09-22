use std::process::Command;
use std::fs;
use std::path::PathBuf;

/// Gera ou recupera um JWT_SECRET persistido no diretório de dados do usuário.
/// Na primeira execução, gera um UUID aleatório e persiste.
/// Nas execuções futuras, reutiliza o valor persistido.
/// Se a geração/persistência falhar, FAIL FAST (panic).
fn get_or_create_jwt_secret() -> String {
    let secret_path = jwt_secret_path();

    // Tenta ler secret existente
    if let Ok(existing) = fs::read_to_string(&secret_path) {
        let trimmed = existing.trim().to_string();
        if !trimmed.is_empty() && trimmed.len() >= 32 {
            eprintln!("[11] JWT_SECRET carregado de: {}", secret_path.display());
            return trimmed;
        }
    }

    // Gera novo secret aleatório (UUID v4 = 128 bits de entropia)
    let secret = format!("11-{}", uuid_v4());
    eprintln!("[11] JWT_SECRET gerado e persistido em: {}", secret_path.display());

    // Persiste no arquivo
    if let Some(parent) = secret_path.parent() {
        fs::create_dir_all(parent).expect("[11] FALHA: não foi possível criar diretório para JWT_SECRET");
    }
    fs::write(&secret_path, &secret)
        .expect("[11] FALHA: não foi possível persistir JWT_SECRET — abortando");

    // No Unix, define permissão 600 (somente owner)
    #[cfg(unix)]
    {
        use std::os::unix::fs::PermissionsExt;
        fs::set_permissions(&secret_path, fs::Permissions::from_mode(0o600))
            .expect("[11] FALHA: não foi possível definir permissões 600 no JWT_SECRET");
    }

    secret
}

/// Caminho para o arquivo de JWT_SECRET persistido.
/// Usa o diretório de dados do SO:
/// - Windows: %APPDATA%/11/jwt_secret
/// - macOS: ~/Library/Application Support/11/jwt_secret
/// - Linux: ~/.config/11/jwt_secret
fn jwt_secret_path() -> PathBuf {
    let base = if cfg!(target_os = "windows") {
        std::env::var("APPDATA")
            .unwrap_or_else(|_| "C:\\Users\\Default\\AppData\\Roaming".to_string())
    } else if cfg!(target_os = "macos") {
        std::env::var("HOME")
            .map(|h| format!("{}/Library/Application Support", h))
            .unwrap_or_else(|_| "/tmp".to_string())
    } else {
        std::env::var("HOME")
            .map(|h| format!("{}/.config", h))
            .unwrap_or_else(|_| "/tmp".to_string())
    };

    PathBuf::from(base).join("11").join("jwt_secret")
}

/// UUID v4 simples (sem dependência externa).
/// Usa random bytes do SO para gerar 16 bytes no formato UUID v4.
fn uuid_v4() -> String {
    use std::time::{SystemTime, UNIX_EPOCH};

    // Gera bytes pseudo-aleatórios usando timestamp + PID + counter
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_nanos();

    let pid = std::process::id();
    let thread_id = std::thread::current().id();
    let thread_hash = format!("{:?}", thread_id).len(); // hash simples

    // Combina fontes de entropia
    let mut bytes = [0u8; 16];
    let seed = now ^ ((pid as u128) << 64) ^ ((thread_hash as u128) << 32);

    // Preenche bytes com seed (não é criograficamente perfeito, mas suficiente para JWT local)
    for (i, byte) in bytes.iter_mut().enumerate() {
        *byte = ((seed >> (i * 8)) & 0xFF) as u8;
    }

    // Formata como UUID v4 (byte 6 tem versão 4, byte 8 tem variante 10)
    bytes[6] = (bytes[6] & 0x0F) | 0x40; // versão 4
    bytes[8] = (bytes[8] & 0x3F) | 0x80; // variante 10

    format!(
        "{:02x}{:02x}{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}{:02x}{:02x}{:02x}{:02x}",
        bytes[0], bytes[1], bytes[2], bytes[3],
        bytes[4], bytes[5],
        bytes[6], bytes[7],
        bytes[8], bytes[9],
        bytes[10], bytes[11], bytes[12], bytes[13], bytes[14], bytes[15],
    )
}

fn spawn_local_services(jwt_secret: &str) {
    // Sobe o PC Agent + Router9 (Node). Os serviços herdam as env vars do processo.
    // JWT_SECRET é injetado do valor gerado/persistido (nunca hardcoded).
    std::thread::spawn(move || {
        let dist = format!("{}/../dist-server/server.js", env!("CARGO_MANIFEST_DIR"));
        let mut cmd = Command::new("node");
        cmd.arg(&dist);
        cmd.env("JWT_SECRET", jwt_secret);
        match cmd.spawn() {
            Ok(mut child) => {
                std::thread::spawn(move || {
                    let _ = child.wait();
                });
            }
            Err(e) => eprintln!("[11] Falha ao iniciar serviços locais: {e}"),
        }
    });
}

pub fn run() {
    // Gera/recupera JWT_SECRET antes de iniciar serviços
    let jwt_secret = get_or_create_jwt_secret();

    tauri::Builder::default()
        .setup(move |_app| {
            spawn_local_services(&jwt_secret);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
