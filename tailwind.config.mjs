/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#F5F4F2',
          100: '#E6E4E1',
          200: '#D0CECA',
          700: '#5A5B54',
          800: '#3A3A39',
          900: '#2E2D2B',
          950: '#1F1F1F',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
