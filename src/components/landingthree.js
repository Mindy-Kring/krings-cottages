import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import styled from 'styled-components'



const LandingThree = ({ className }) => {

 const {placeholderImage} = useStaticQuery(
    graphql`
     query {
        placeholderImage: file(relativePath: {eq: "Twilight4.jpg"}) {
    childImageSharp {
      gatsbyImageData(
       width: 800
        placeholder: BLURRED
        quality: 80
        transformOptions: {fit: COVER}
      )
      }
    }
  }
      
    `
  )

 
const h1 = {
    textAlign: "center",
    paddingTop: "20px"
}
const h3 = {
    textAlign: "center",
    paddingTop: "10px"
}

const imgContainerOne = {
   backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "black",
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px",  
}
const radiusedImg = {
    borderRadius: "12px",
    marginTop: "12px"
}

const imgContainerTwo = {
    backgroundColor: "rgba(82,188,119, 0.7)",
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px",
}
const imgContainerThree = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "black",
    textAlign: "center",
    borderRadius: "12px",
    padding: "10px",
}
const subTitle = {
  fontSize: "1rem",
  marginBottom: "20px"
}
const parallax = {
    backgroundAttachment: "fixed"
}

 // Set ImageData.
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

return (
    
<BackgroundImage 
      Tag="section"
      className={className}
      style={parallax}
      {...bgImage}
      preserveStackingContext
      
      >
         
  <h1 style={h1}>Sights at Kring's Cottages</h1>  

<h5 style={h3}>
Just a few of the things you can see and do
</h5>
<div className="landingThreeContainer">

<div style={imgContainerOne} id="one" data-sal="flip-up" data-sal-easing="ease" data-sal-duration="800" 
 >
    <h3>Sunsets and Campfires</h3>
    <p style={subTitle}>Enjoy gorgeous sunsets and evenings by the campfire</p>
    <StaticImage src="../images/Sunset1.jpg" alt="Sunset" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
    <StaticImage src="../images/FirepitWeb.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
</div>
<div style={imgContainerTwo} data-sal="zoom-in" data-sal-easing="ease" data-sal-repeat data-sal-duration="800" >
    <h3>Cottages</h3>
    <p style={subTitle}>Our housekeeping cottages are attractive, cozy and clean and come in 2 and 3-bedroom models with all modern amenities</p>
    <StaticImage src="../images/Cottage.jpg" alt="Cottage" placeholder="tracedSVG" style= {radiusedImg} width={350}/>  
    <StaticImage src="../images/CottageInterior.jpg" alt="Cottage interior" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
</div>
<div style={imgContainerThree} data-sal="flip-up" data-sal-easing="ease" data-sal-duration="800" >
    <h3>Beach</h3>
    <p style={subTitle}>Enjoy sunny days and tranquil evenings on the soft, natural-sand beach</p>
    <StaticImage src="../images/Beach.jpg" alt="The Beach" placeholder="tracedSVG" style= {radiusedImg} width={350} />
    <StaticImage src="../images/BeachLong.jpg" alt="Long view of the beach" placeholder="tracedSVG" style= {radiusedImg} width={350} />
</div>

</div>

</BackgroundImage>

)
}

const StyledLandingThree = styled(LandingThree)`
color: white;
opacity: .9;
`
export default StyledLandingThree;