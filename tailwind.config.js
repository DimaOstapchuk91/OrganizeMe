/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '4px 4px 4px lightblue',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--background)',
      'light-blue': 'var(--light-blue)',
      blue: 'var(--blue)',
      'brand-blue': 'var(--brand-blue)',
      'hover-blue': 'var(--hover-blue)',
      'hover-gray': 'var(--hover-gray)',
      red: 'var(--red)',
    },
  },
  daisyui: {
    themes: ['pastel'],
  },
  plugins: [require('daisyui')],
};
