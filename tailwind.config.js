module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./images/bg.jpg')",
        'bg-image2': "url('./images/programming.png')",    
      },
      height: {
        'screen-80': '85vh'
      },
      borderRadius: {
        '4xl': "100px"
      },
      fontFamily: {
        'lobster': 'Lobster'
      }
    },
  },
  plugins: [],
}
