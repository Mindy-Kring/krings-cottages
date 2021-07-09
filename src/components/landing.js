import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

  const LandingOne = () => {

 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "1rem",
 }  
const title = {
  textAlign: "center",
   color: "white",
  fontFamily: "Rubik",
  fontSize: "2.9rem",
  paddingTop: ".5rem",
  textShadow: ".5px .5px black"
 }  

 const P = {
   textAlign: "center",
   width: "45%",
   margin: "0 auto",
   color: "white",
   fontSize: "calc(16px + (13 - 4) * ((100vw - 200px) / (1600 - 300)))",
   fontFamily: "Rubik",
   textShadow: ".5px .5px black"
 }

    return (

<div>
<title>Home Page</title>

<div style={{ display: "grid"}}>
     
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 500,
        }}
        layout="fullWidth"  
        alt=""
        src="../images/LandingPic.jpg"
        formats= {["auto", "webp"]}
        objectPosition= "center"
        placeholder="blurred"
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        
        <h1 style={title}>Kring's Cottages</h1>
        <p style={P}>Fishing, swimming, cottages and beaches located on 100-acres of Canadian landscape. Come experience the warm, sandy shores of Sand Lake, Ontario.</p>

         <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>View Cottages</button></Link>
      </div>
    </div>
    </div>
  );










    }

export default LandingOne;



