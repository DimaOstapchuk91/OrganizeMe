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
      background: 'var(--background)',
      green: 'var(--green)',
      'bg-gray': 'var(--bg-gray)',
      'text-light': 'var(--text-light)',
      blue: 'var(--blue)',
      'brand-blue': 'var(--brand-blue)',
      'hover-blue': 'var(--hover-blue)',
      'hover-gray': 'var(--hover-gray)',
    },
  },
  daisyui: {
    themes: ['pastel'],
  },
  plugins: [require('daisyui')],
};
