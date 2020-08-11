import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { ThemeWrapper, MyTheme } from '../../GlobalStyles'
import styled from 'styled-components'

import { NavBar } from '../NavBar'

const StyledContainer = styled.div`
  background: ${(p) => p.theme};
  height: 64px;
  border: 1px solid ${(p) => p.theme.palette.divider};
`

export const App = () => {
  const userPreference = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () => MyTheme(userPreference ? 'dark' : 'light'),
    [userPreference]
  )

  return (
    <>
      <ThemeWrapper theme={theme}>
        <NavBar />
        <StyledContainer>Hello World</StyledContainer>
      </ThemeWrapper>
    </>
  )
}
