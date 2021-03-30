import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'




const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(
    graphql`
     query {
        file(relativePath: {eq: "LandingPic.jpg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 500) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
      }
    `
  )


 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
  boxShadow: "2px 2px white",
  marginTop: "3rem"
 
 }  
   // Set ImageData.
  const imageData = data.file.childImageSharp.fluid
    return (

<BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}   
    >

    <WRAPPER>
        <TITLE>Kring's Cottages </TITLE>
        <P>Fishing, swimming, cottages and beaches located on 100-acres of Canadian landscape. Come experience the warm, sandy shores of Sand Lake, Ontario.</P>
        <button type="button" className="btn" style={buttonStyle}>View Cottages</button>
   </WRAPPER>    
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
  const TITLE = styled.h2`
  color: white;
  text-align: center;
  padding-bottom: 1rem;
  font-family: 'Rubik';
  font-size: 2.8rem; 
`
        const WRAPPER = styled.h1`
  color: white;
  padding-top: 8rem;
width: 100%;
height: 1000px;
  text-align: center; 
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