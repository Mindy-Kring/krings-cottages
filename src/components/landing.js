import React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import LandingPic from "../images/LandingPic.jpg"

  const LandingOne = () => {
console.log('simage', (<StaticImage src="../images/LandingPic.jpg" placeholder="blurred" width={800}/>).props.__imageData);

const bgImage = (<StaticImage src="../images/LandingPic.jpg" placeholder="blurred" />)

console.log('bgImage', bgImage);


 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "3rem",
  marginBottom: "10rem"
 }  
const title = {
  textAlign: "center",
   color: "white",
  fontFamily: "Rubik",
  fontSize: "2.8rem",
  paddingTop: ".5rem"
 }  

const P = styled.p`
text-align: center;
width: 45%;
margin: 0 auto;
  color: white;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
`

    return (

<div>
<title>Home Page</title>

       <div style={{backgroundImage: `url(${LandingPic})`, backgroundPosition: "center",
  backgroundSize: "cover", textAlign: "center"}} >

        <div style={title}>Kring's Cottages </div>
        <P>Fishing, swimming, cottages and beaches located on 100-acres of Canadian landscape. Come experience the warm, sandy shores of Sand Lake, Ontario.</P>

         <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>View Cottages</button></Link>
        
   </div> 
   </div>
     
    
);
    }

export default LandingOne;



