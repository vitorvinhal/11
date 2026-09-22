const config = {
  appId: "com.eleven.mobile",
  appName: "11",
  webDir: "www",
  server: {
    androidScheme: "https",
    url: process.env.VITE_WEB_URL || "https://candlefish.vercel.app",
  },
  ios: {
    // Permissões usadas pelo DeviceBridge (câmera e fotos).
    infoPlist: {
      NSCameraUsageDescription:
        "O Agente 11 usa a câmera para capturar fotos e importar mídia do seu dispositivo.",
      NSPhotoLibraryUsageDescription:
        "O Agente 11 acessa suas fotos para listar e abrir mídia do dispositivo.",
      NSPhotoLibraryAddUsageDescription:
        "O Agente 11 salva mídia capturada na sua galeria.",
      NSMicrophoneUsageDescription:
        "O Agente 11 usa o microfone para captura de áudio e vídeo pela câmera.",
    },
  },
};

export default config;
