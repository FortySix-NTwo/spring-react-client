import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const MyTheme = (themeName = 'light') => {
  let theme = createMuiTheme({
    themeName: 'Custom Theme Name',
    typography: {
      useNextVariants: true,
      fontFamily: ['Montserrat Medium', 'Montserrat Regular'].join(',')
    },
    palette: {
      type: themeName,
      primary: {
        light: '#598392',
        main: '#2E294E',
        dark: '#1D1E2C',
        contrastText: '#E0E2DB'
      },
      secondary: {
        light: '#BAD7F2',
        main: '#F2E2BA',
        dark: '#2C8C99',
        contrastText: '#FFFFFF'
      }
    }
  })
  theme = responsiveFontSizes(theme)
  return theme
}

export default MyTheme
