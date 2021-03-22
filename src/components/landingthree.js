import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'



const LandingThree = ({ className }) => {
 const data = useStaticQuery(
    graphql`
     query {
        file(relativePath: {eq: "Twilight4.jpg"}) {
    childImageSharp {
      fluid(
        quality: 90
        maxWidth: 1920
      ) {
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

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid
const h1 = {
    textAlign: "center",
    paddingTop: "20px"
}
const h3 = {
    textAlign: "center",
    paddingTop: "10px"
}
const gridContainer = {
    display: "inline-grid",
  gridTemplateColumns: "auto auto auto",
    padding: "10px"
}
const imgContainerOne = {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    borderRadius: "12px",
    margin: "10px",
    padding: "10px",
    height:"60%"
}
const radiusedImg = {
    borderRadius: "12px",
    marginTop: "12px"
}

const imgContainerTwo = {
    backgroundColor: "#52bc77",
    textAlign: "center",
    borderRadius: "12px",
    margin: "10px",
    padding: "10px"
}
const imgContainerThree = {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    borderRadius: "12px",
    margin: "10px",
    padding: "10px",
    height:"60%"
}
const parallax = {
    backgroundAttachment: "fixed"
}
return (
    
<BackgroundImage Tag="section"
      className={className}
      fluid={imageData}
      style={parallax}
      >
         
  <h1 style={h1}>Sights at Kring's Cottages</h1>  

<h5 style={h3}>
Just a few of the things you can see and do
</h5>
<div style={gridContainer}>

<div style={imgContainerOne} data-sal="fade-in" data-sal-delay="300"
  data-sal-easing="ease">
    <h3>Sunsets and Campfires</h3>
    <h6>Enjoy gorgeous sunsets and evenings by the campfire</h6>
    <StaticImage src="../images/Sunset.jpg" alt="Sunset" placeholder="tracedSVG" style= {radiusedImg}/>
</div>
<div style={imgContainerTwo}>
    <h3>Cottages</h3>
    <h6>Our housekeeping cottages are attractive, cozy and clean and come in 2 and 3-bedroom models with all modern amenities</h6>
    <StaticImage src="../images/Cottage.jpg" alt="Cottage" placeholder="tracedSVG" style= {radiusedImg}/>
    
    <StaticImage src="../images/CottageInterior.jpg" alt="Cottage interior" placeholder="tracedSVG" style= {radiusedImg}/>
</div>
<div style={imgContainerThree}>
    <h3>Beach</h3>
    <h6>When you're not fishing, enjoy sunny days and tranquil evenings on the soft, natural-sand beach</h6>
    <StaticImage src="../images/Beach.jpg" alt="The Beach" placeholder="tracedSVG" style= {radiusedImg} />
</div>

</div>

</BackgroundImage>

)
}

const StyledLandingThree = styled(LandingThree)`
color: white;
opacity: .2;
`
export default StyledLandingThree;