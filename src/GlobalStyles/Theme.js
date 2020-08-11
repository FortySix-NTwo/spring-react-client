import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const accentGreen = green.A200
const accentRed = red.A200

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
        dark: '#1E1E24',
        light: '#22333B',
        accent: '#22333B',
        highlight: '#E5446D',
        success: accentGreen,
        failure: accentRed,
        contrastText: '#fff'
      },
      secondary: {
        dark: '#FFA69E',
        light: '#FAF3DD',
        accent: '#B8F2E6',
        highlight: '#AED9E0',
        success: accentGreen,
        failure: accentRed,
        contrastText: '#fff'
      }
    }
  })
  theme = responsiveFontSizes(theme)
  return theme
}

export default MyTheme
