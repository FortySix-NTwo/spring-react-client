import React from "react";
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

const Navigation = styled(AppBar)`
  background-color: #22212D;
`;

export const NavBar = () => {
  return (
    <Navigation />
  );
}