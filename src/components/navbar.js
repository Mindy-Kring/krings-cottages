import React, { useEffect, useState } from "react"
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'


const navbarStyle= {
  backgroundColor: "#52bc77",
  minHeight: "1rem"
};
const brandSizing= {
    fontSize: "1.5rem",
    fontFamily: "Rubik",
}

const NavHeader = ( location ) => {
  const currentPage = location.location;
  console.log('currentPage', currentPage);
 const [name, setName] = useState("/");
 
 useEffect(() => {
setName(currentPage);
  }, [currentPage]);

  return (
   
<Navbar collapseOnSelect className="sticky-top" expand="lg" style= { navbarStyle } >
  
  <Navbar.Brand><StaticImage
     src="../images/CanadianFlag.png"
     alt="A Canadian Flag"
     placeholder="blurred"
     layout="fixed"
   /></Navbar.Brand> 
   <Navbar.Brand href="/" className="font-weight-bold" style= { brandSizing }>Kring's Cottages</Navbar.Brand> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto"> 
    <Nav.Link href="tel:+1613-479-0028" ><FontAwesomeIcon  style={{fontSize: "1rem"}} icon={faPhoneSquareAlt} /> 1-613-479-0028</Nav.Link>    
    </Nav>
    <Nav className="mr-0">

        <Link to="/"><Nav.Link  as="span" eventKey="/" style={name === "/" ? {color: "white"}:
      null}>Home</Nav.Link> </Link> 


      <Link to="/cottages"><Nav.Link as="span" eventKey="/cottages" style={name === "/cottages/" ? {color: "white"}:
      null}>Cottages</Nav.Link> </Link>

            <Link to="/rates"><Nav.Link as="span" eventKey="/rates" style={name === "/rates/" ? {color: "white"}:
      null}>Rates</Nav.Link> </Link>

          <Link to="/gallery"><Nav.Link as="span" eventKey="/gallery" style={name === "/gallery/" ? {color: "white"}:
      null}>Gallery</Nav.Link> </Link>

          <Link to="/directions"><Nav.Link as="span" eventKey="/directions" style={name === "/directions/" ? {color: "white"}:
      null}>Directions</Nav.Link> </Link>

          <Link to="/contact"><Nav.Link as="span" eventKey="/contact" style={name === "/contact/" ? {color: "white"}:
      null}>Contact</Nav.Link> </Link>

          <Link to="/admin"><Nav.Link as="span" eventKey="/admin" style={name === "/admin/" ? {color: "white"}:
      null}>Admin</Nav.Link> </Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
   

  }
export default NavHeader;