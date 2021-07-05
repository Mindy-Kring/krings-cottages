import * as React from "react";
import { Link } from "gatsby"
import StyledBackgroundSection from "../components/landing";
import LandingTwo from "../components/landingtwo";
import StyledLandingThree from "../components/landingthree";
import 'bootstrap/dist/css/bootstrap.min.css';

 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px",
   width: "6rem",
   marginTop: "1.5rem",
   marginLeft:  ".2rem",
   color: "rgba(0,0,0,.5)"
 }  
 const buttonDivStyle = {
   display: "flex",
    justifyContent: "center"
 }
 const navLinkStyle = {
   margin: "0"
 }

 
// markup
const IndexPage = ({data}) => {
     
  return (
    <main>
<title>Home Page</title>
      <StyledBackgroundSection />  
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
