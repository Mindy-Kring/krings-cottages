import React from 'react';
import NavHeader from './navbar';
import Footer from '../components/footer';
import ScrollTopBtn from '../components/scrollTopBtn'

const NavHeaderWrapper = ({ children }) => (

  <>
  <NavHeader location={window.location.pathname} />
    {children}
    <ScrollTopBtn />
    <Footer />
  </>
);

export default NavHeaderWrapper;