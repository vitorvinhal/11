const config = {
  appId: 'com.eleven.mobile',
  appName: '11',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url: process.env.VITE_WEB_URL || 'https://11-five-umber.vercel.app',
  },
};

export default config;