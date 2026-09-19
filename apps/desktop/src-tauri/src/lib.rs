use std::process::Command;

fn spawn_local_services() {
  // Sobe o PC Agent + Router9 (Node). Os serviços herdam as env vars do processo
  // (JWT_SECRET, PC_AGENT_PORT etc.). Se falhar, apenas loga.
  std::thread::spawn(|| {
    let dist = format!("{}/../dist/server.js", env!("CARGO_MANIFEST_DIR"));
    match Command::new("node").arg(&dist).spawn() {
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