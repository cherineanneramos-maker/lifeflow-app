/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5'
        },
        minimalist: {
          bg: '#fafafa',
          card: '#ffffff',
          text: '#374151',
          accent: '#9ca3af'
        },
        modern: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f1f5f9',
          accent: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
