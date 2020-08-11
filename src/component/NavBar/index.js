import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.palette.primary.spaceCadet} 40%,
    ${(props) => props.theme.palette.primary.gunMetal} 70%
  );
`

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar></Toolbar>
    </StyledAppBar>
  )
}

//          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
