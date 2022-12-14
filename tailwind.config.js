/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',"./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%, 100%': { width: '0px' },
          '50%': { width: '40px' },
        },  animation: {
          expand: 'wiggle 1s ease-in-out infinite',
        }
        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
