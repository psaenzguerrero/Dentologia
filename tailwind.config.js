/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbff',
          100: '#e0f6ff',
          200: '#bfeaff',
          300: '#95dbff',
          400: '#5ec4ff',
          500: '#2aaef5',
          600: '#1b8dd1',
          700: '#156fa6',
          800: '#145c87',
          900: '#134b6c',
        },
        accent: {
          50: '#f6fffb',
          100: '#e9fff7',
          200: '#c9ffec',
          300: '#95f7db',
          400: '#5eead4',
          500: '#14b8a6',
          600: '#0ea5a0',
          700: '#0e807e',
          800: '#0f6466',
          900: '#0b4a4d',
        }
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(2, 132, 199, 0.15)'
      }
    },
  },
  plugins: [],
}
