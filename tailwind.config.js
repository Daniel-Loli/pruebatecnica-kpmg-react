/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grayLight: '#E5E5E5',
        blueLight: '#0987E7',
        purple: '#510DBC',
        navy: '#00338D',
      },
      backgroundColor: {
        white: 'var(--color-white)',
        grayLight: 'var(--color-grayLight)',
        blueLight: 'var(--color-blueLight)',
        purple: 'var(--color-purple)',
        navy: 'var(--color-navy)',
      },
    },
  },
  plugins: [],
}
