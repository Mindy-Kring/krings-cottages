import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import styled from 'styled-components'




const BackgroundSection = ({ className }) => {
    const {placeholderImage} = useStaticQuery(
    graphql`
     query {
        placeholderImage: file(relativePath: {eq: "LandingPic.jpg"}) {
    childImageSharp {
     gatsbyImageData(
       width: 800
        placeholder: BLURRED
        quality: 100
        transformOptions: {fit: COVER}
      )
    }
  }
      }
    `
  )


 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "3rem"
 }  
  const title = {
   color: "white",
  textAlign: "center",
  paddingBottom: "1rem",
  fontFamily: "Rubik",
  fontSize: "2.8rem", 
 }  
  const wrapper = {
  color: "white",
  paddingTop: "8rem",
width: "100%",
height: "1000px",
  textAlign: "center",  
 } 
  
  const image = getImage(placeholderImage)
  //converts to Gatsbys new image API
  const bgImage = convertToBgImage(image)
    return (

<BackgroundImage
      Tag="section"
      className={className}
      {...bgImage}  
      preserveStackingContext
    >

    <div style={wrapper}>
        <div style={title}>Kring's Cottages </div>
        <P>Fishing, swimming, cottages and beaches located on 100-acres of Canadian landscape. Come experience the warm, sandy shores of Sand Lake, Ontario.</P>

         <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>View Cottages</button></Link>
        
   </div>    
    </BackgroundImage>




);
    }


const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
const P = styled.p`
  color: white;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: 2rem;
  width: 50%;
  margin: 0 auto;
`
export default StyledBackgroundSection