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
   marginTop: "1.5rem" 

   
 
 }  
 const buttonDivStyle = {
   display: "flex",
    justifyContent: "center"
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
<div style={buttonDivStyle}>
       <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Cottages</button></Link>
   </div>
      <div style={buttonDivStyle}>
       <Link to="/rates" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Rates</button></Link>
   </div>
      </div>
       
    </main>
      
    
  )
}

  
export default IndexPage
