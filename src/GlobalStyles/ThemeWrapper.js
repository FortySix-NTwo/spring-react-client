import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {
  StylesProvider,
  CssBaseline,
  MuiThemeProvider
} from '@material-ui/core'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vm;
    height: 100vm;
    font-family: Montserrat;
  }
`

const ThemeWrapper = ({ children, theme }) => {
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            {children}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}

export default ThemeWrapper
