import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d1ff',
        accent: '#ff00dd',
        background: '#05050a',
        surface: 'rgba(255,255,255,0.04)',
        'surface-border': 'rgba(255,255,255,0.09)',
        text: {
          primary: '#e6f1ff',
          muted: 'rgba(230,241,255,0.62)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Cascadia Code', 'monospace'],
      },
      backdropBlur: {
        glass: '18px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;