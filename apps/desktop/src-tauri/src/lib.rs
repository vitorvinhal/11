use std::process::Command;

fn spawn_local_services() {
  // Sobe o PC Agent + Router9 (Node). Os serviços herdam as env vars do processo
  // (PC_AGENT_PORT etc.). Se JWT_SECRET não existir, define um segredo local de
  // desenvolvimento para o servidor local subir (fail-fast do PC Agent).
  std::thread::spawn(|| {
    let dist = format!("{}/../dist-server/server.js", env!("CARGO_MANIFEST_DIR"));
    let mut cmd = Command::new("node");
    cmd.arg(&dist);
    if std::env::var_os("JWT_SECRET").is_none() {
      cmd.env("JWT_SECRET", "local-11-desktop-jwt-dev");
      eprintln!("[11] JWT_SECRET não definido — usando segredo local de desenvolvimento");
    }
    match cmd.spawn() {
      Ok(mut child) => {
        // Mantém o child em background separado do ciclo de vida do builder.
        std::thread::spawn(move || {
          let _ = child.wait();
        });
      }
      Err(e) => eprintln!("[11] Falha ao iniciar serviços locais: {e}"),
    }
  });
}

pub fn run() {
  tauri::Builder::default()
    .setup(|_app| {
      spawn_local_services();
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}