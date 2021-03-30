import React from 'react';
import NavHeader from './navbar';
import Footer from '../components/footer';

const NavHeaderWrapper = ({ children }) => (
  <>
  <NavHeader />
    {children}
    <Footer />
  </>
);

export default NavHeaderWrapper;