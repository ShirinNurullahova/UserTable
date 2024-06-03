/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dots':'#503DF2',
        'custom-blue': '#3E8ED4',
        'custom-gray': '#666666',
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
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(purple|orange|teal|green|blue)-(300|600|500)/,
    },
  ],
};
