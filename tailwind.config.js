/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: '#080808',
          charcoal: '#151515',
          card: '#1a1a1a',
          surface: '#121212',
          border: '#2a2a2a',
          red: '#E50914',
          redHover: '#ff1f29',
          redMuted: 'rgba(229, 9, 20, 0.15)',
          redGlow: 'rgba(229, 9, 20, 0.35)',
          gray: '#B8B8B8',
          lightGray: '#E5E5E5',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Oswald', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px rgba(229, 9, 20, 0.45)',
        'red-subtle': '0 4px 20px rgba(229, 9, 20, 0.15)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
