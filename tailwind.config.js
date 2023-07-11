/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '361px',
      'lg': '481px',
      'xl': '769px',
      '2xl': '1024px',
      '3xl': '1200px',
      '4xl': '1400px',
      '5xl': '1600px',
      '6xl': '1920px'
    },
    extend: {
      borderWidth: {
        '3': '3px',
        '1': '1px',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'gray-hover': '#303031',
    })
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
