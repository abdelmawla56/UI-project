module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B132B',
          card: '#131B2E',
          surface: '#1C2541',
          border: '#232F55',
          cyan: '#00B4D8',
          neon: '#00F0FF',
          text: '#FFFFFF',
          muted: '#8D99AE',
          subtle: '#5C677D',
        },
        stage: {
          saved: '#3A86EF',
          applied: '#3A86EF',
          interview: '#FFB703',
          offer: '#06D6A0',
          closed: '#EF476F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -3px rgba(0, 180, 216, 0.35)',
        'glow-amber': '0 0 15px -3px rgba(255, 183, 3, 0.3)',
        'glow-emerald': '0 0 15px -3px rgba(6, 214, 160, 0.3)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
