/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        olivine: {
          light: '#b5ca8d',
          DEFAULT: '#8bb174',
        },
        myrtle: '#426b69',
        cadet: '#222e50',
        slate: '#2a4849',
        accent: '#7e3f8f',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'pop-up': {
          '0%': { transform: 'scale(0) translateY(20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'breath': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'drive': {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(2px) rotate(1deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-1deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'breath': 'breath 3s ease-in-out infinite',
        'driving': 'drive 3s ease-in-out infinite',
        'floating': 'float 3s ease-in-out infinite',
        'pop-up': 'pop-up 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}