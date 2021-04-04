import React, { useEffect, useState } from "react"
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"


const navbarStyle= {
  backgroundColor: "#52bc77",
  minHeight: "1rem"
};
const brandSizing= {
    fontSize: "1.5rem",
    fontFamily: "Rubik"
}

const NavHeader = ( location ) => {
  const currentPage = location.location;
  console.log('location', location);
 const [name, setName] = useState("/");
 
 useEffect(() => {
setName(currentPage);
  }, [currentPage]);
 
 console.log('name', name);

  return (
   
<Navbar  className="sticky-top" expand="lg" style= { navbarStyle } >
  
  <Navbar.Brand><StaticImage
     src="../images/CanadianFlag.png"
     alt="A Canadian Flag"
     placeholder="blurred"
     layout="fixed"
   /></Navbar.Brand> 
   <Link to="/"><Navbar.Brand href="#home" className="font-weight-bold" style= { brandSizing }>Kring's Cottages</Navbar.Brand></Link>  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto"> 
    <Nav.Link href="tel" >1-613-479-0028</Nav.Link>    
    </Nav>
    <Nav className="mr-0">
      <Link to="/" className="nav-link" style={name === "/" ? {color: "white"}:
      null}>Home</Link>

      <Link to="/cottages" className="nav-link"  style={name === "/cottages" ? {color: "white"}:
      null}>Cottages</Link>
      
      <Link to="/rates" className="nav-link"  style={name === "/rates" ? {color: "white"}:
      null}>Rates</Link>

      <Link to="/gallery" className="nav-link"  style={name === "/gallery" ? {color: "white"}:
      null}>Gallery</Link>
      
      <Link to="/directions" className="nav-link"  style={name === "/directions" ? {color: "white"}:
      null}>Directions</Link>

      <Link to="/contact" className="nav-link"  style={name === "/contact" ? {color: "white"}:
      null}>Contact</Link>
      
      <Link to="/admin" className="nav-link"  style={name === "/admin" ? {color: "white"}:
      null}>Admin</Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
   

  }
export default NavHeader;