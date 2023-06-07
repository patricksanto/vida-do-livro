module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'nb': ['Nb International'],
        'alt': ['Cheltenhm BdCn BT', 'arial', 'serif'],
        'greating': ['Greating', 'sans-serif'],
      },
      colors: {
        'primary': '#EFEDDF',
        'secondary': '#C4D6C9',
      },
    }
  }
}
