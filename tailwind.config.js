module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'light-cyan':'hsl(193, 38%, 86%)',
          'neon-green': 'hsl(150, 100%, 66%)',
        },
        neutral: {
          'dark-blue': 'hsl(218, 23%, 16%)',
          'grayish-blue': 'hsl(217, 19%, 38%)',
          'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        },
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'body': '28px',
      },
    },
  },
  plugins: [],
};
