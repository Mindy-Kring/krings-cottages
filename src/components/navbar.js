import React, { useState } from "react"
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



const NavHeader = () => {
    //set initial state to home
    
 const [name, setName] = useState("home");
 console.log('name',name);

 const toggleName = (id) => {
    setName(id);
  };
 
 

  
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
      <Link to="/" className="nav-link" style={name === "home" ? {color: "white"}:
      null} onClick={() => {toggleName("home")}}>Home</Link>

      <Link to="/cottages" className="nav-link"  style={name === "cottages" ? {color: "white"}:
      null} onClick={() => {toggleName("cottages")}}>Cottages</Link>
      {/* <Nav.Link className={name === "cottages" ? "activeNavLink" :
       null} onClick={() => {toggleName("cottages")}} href="/cottages">Cottages</Nav.Link> */}
      <Nav.Link href="/Rates">Rates</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
      <Nav.Link href="/Directions">Directions</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Admin">Admin</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
   

  }
export default NavHeader;