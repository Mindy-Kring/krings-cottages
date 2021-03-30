import "./src/styles/global.css"
import React from 'react'
import NavHeaderWrapper from './src/components/navwrapper';

export const wrapPageElement = ({ element, props }) => (
  <NavHeaderWrapper {...props}>{element}</NavHeaderWrapper>
);