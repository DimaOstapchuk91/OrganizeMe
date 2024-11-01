/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-black': 'var(--shadow-castom)',
        'custom-btn': 'var(--shadow-btn)',
      },
      opacity: {
        'bg-opasity': 'var(--opacity-level)',
        'full-op': 'var(--opacity-full)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--brand-blue)',
      'light-blue': 'var(--light-blue)',
      blue: 'var(--blue)',
      'brand-blue': 'var(--brand-blue)',
      'hover-blue': 'var(--hover-blue)',
      'hover-gray': 'var(--hover-gray)',
      green: 'var(--red)',
    },
  },
  daisyui: {
    themes: ['pastel'],
  },
  plugins: [require('daisyui')],
};
