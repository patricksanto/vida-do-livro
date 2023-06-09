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
        'nb': ['Nb International', 'Arial', 'sans-serif'],
        'alt': ['Cheltenhm BdCn BT', 'arial', 'serif'],
        'win': ['Wingdings3', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#EFEDDF',
        'secondary': '#C4D6C9',
        'tertiary': '#B9D7C6',
        'quaternary': '#A3C4BC',
        'quinary': '#2A3030',
      },
    }
  }
}
