import * as React from "react";
import { Link } from "gatsby"
import LandingOne from "../components/landing"
import LandingTwo from "../components/landingtwo";
import StyledLandingThree from "../components/landingthree";
import 'bootstrap/dist/css/bootstrap.min.css';


 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
   minWidth: "9rem"
 }  
 const buttonDivStyle = {
   display: "flex",
   flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"
 }
 const navLinkStyle = {
   margin: "0"
 }

// markup
const IndexPage = () => {

  return (
    <main>
    
      <LandingOne />
      <LandingTwo />  
      <StyledLandingThree />
      <div style={buttonDivStyle}>

       <Link to="/cottages" style={navLinkStyle} ><button type="button" className="btn" style={buttonStyle}>Cottages</button></Link>
   
       <Link to="/rates" style={navLinkStyle} ><button type="button" className="btn" style={buttonStyle}>Rates</button></Link>
   
      </div>
       
    </main>
      
    
  )
}

export default IndexPage
