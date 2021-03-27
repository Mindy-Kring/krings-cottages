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

const imgContainerOne = {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    borderRadius: "12px",
    margin: "10px",
    padding: "10px",
    height:"40vw"
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
    height:"40vw"
}
const subTitle = {
  fontSize: "1.5vw",
  marginBottom: "0"
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
<div class="landingThreeContainer">

<div style={imgContainerOne} id="one" data-sal="flip-up" data-sal-easing="ease" data-sal-duration="800" 
 >
    <h3>Sunsets and Campfires</h3>
    <p style={subTitle}>Enjoy gorgeous sunsets and evenings by the campfire</p>
    <StaticImage src="../images/Sunset.jpg" alt="Sunset" placeholder="tracedSVG" style= {radiusedImg}/>
</div>
<div style={imgContainerTwo} data-sal="zoom-in" data-sal-easing="ease" data-sal-repeat data-sal-duration="800" >
    <h3>Cottages</h3>
    <p style={subTitle}>Our housekeeping cottages are attractive, cozy and clean and come in 2 and 3-bedroom models with all modern amenities</p>
    <StaticImage src="../images/Cottage.jpg" alt="Cottage" placeholder="tracedSVG" style= {radiusedImg}/>
    
    <StaticImage src="../images/CottageInterior.jpg" alt="Cottage interior" placeholder="tracedSVG" style= {radiusedImg}/>
</div>
<div style={imgContainerThree} data-sal="flip-up" data-sal-easing="ease" data-sal-duration="800" >
    <h3>Beach</h3>
    <p style={subTitle}>When you're not fishing, enjoy sunny days and tranquil evenings on the soft, natural-sand beach</p>
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