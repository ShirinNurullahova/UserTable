/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3E8ED4',
        'blue': {
          300: '#93C5FD',
          600: '#2563EB',
        },
        'purple': {
          300: '#D8B4FE',
          600: '#7C3AED',
        },
        'orange': {
          300: '#FDBA74',
          500: '#F97316',
        },
        'teal': {
          300: '#5EEAD4',
          600: '#0D9488',
        },
        'green': {
          300: '#86EFAC',
          600: '#16A34A',
        }
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(purple|orange|teal|green|blue)-(300|600|500)/,
    },
  ],
};
