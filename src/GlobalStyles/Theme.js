import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const primaryGreen = green[500]
const accentGreen = green.A200
const darkGreen = green[900]

const primaryRed = red[500]
const accentRed = red.A200
const darkRed = red[900]

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
        spaceCadet: '#1E1E24',
        gunMetal: '#22333B',
        almond: '#22333B',
        paradisePink: '#E5446D',
        light: primaryGreen,
        main: accentGreen,
        dark: darkGreen,
        contrastText: '#fff'
      },
      secondary: {
        salmonPink: '#FFA69E',
        cream: '#FAF3DD',
        celadonGreen: '#B8F2E6',
        coolGrey: '#AED9E0',
        light: primaryRed,
        main: accentRed,
        dark: darkRed,
        contrastText: '#fff'
      }
    }
  })
  theme = responsiveFontSizes(theme)
  return theme
}

export default MyTheme
