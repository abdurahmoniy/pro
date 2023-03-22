/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mybg1: '#001529',
        mybg2: '#49545C',
        mytext1: '#5cdb95',
        mytext2: '#dB5CA2',
      },
      fontFamily:{
        myfont: ['Goudy Bookletter 1911', 'serif'],
      },
    },
    screens:{
      xs: '480px',
      ss: '620px',
      sm: '760px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [],
}