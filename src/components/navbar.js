import React from "react"
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"


const navbarStyle= {
  backgroundColor: "#52bc77",
  minHeight: "1rem"
};
const brandSizing= {
    fontSize: "1.5rem",
    fontFamily: "Rubik"
}


const NavHeader = () => {
  
  return (
   
<Navbar  className="sticky-top" expand="lg" style= { navbarStyle } >
  <Navbar.Brand href="#home" ><StaticImage
     src="../images/CanadianFlag.png"
     alt="A Canadian Flag"
     placeholder="blurred"
     layout="fixed"
   /></Navbar.Brand>  
  <Navbar.Brand href="#home" className="font-weight-bold" style= { brandSizing }>Kring's Cottages</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto"> 
    <Nav.Link href="tel" >1-613-479-0028</Nav.Link>    
    </Nav>
    <Nav className="mr-0">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Cottages</Nav.Link>
      <Nav.Link href="#link">Rates</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      <Nav.Link href="#link">Directions</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link href="#link">Admin</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
   

  }
export default NavHeader;