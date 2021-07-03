import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

 const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding: 1rem 0 0 1rem;
  font-family: 'Rubik'; 
`
const P = styled.p`
  color: black;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: .5rem;
text-Align: center;
`


const Gallery = ({data}) => {
  
  //establish state for the samplePics
 const [sampleImgs] = useState(data.markdownRemark.frontmatter.samplePics);
 //map over all queried images and dynamically return as array of GatsbyImage elements

 const placeSamplePics = (images) => {
   let picArray = []
images.forEach((pic, i) => { 
 let image = getImage(pic.image);
   let picAlt = pic.imageAlt;
  picArray.push(<GatsbyImage key={picAlt} className="styledSamplePics" image={image} alt={picAlt} /> ) 
})
return picArray
 }
    return (

<div>


<div>
    <TITLE>Gallery</TITLE>
        <P>Some pics of family, fish and fun over the years at Kring's</P>
</div>

<div className="galleryPics">
 {sampleImgs ? placeSamplePics(sampleImgs) : null }

 </div>


</div>


    );




}
export default Gallery;

//samplePics returns an array of image objects
export const pageQuery = graphql`
  query {
   markdownRemark(frontmatter: {slug: {eq: "/Gallery"}})  {
     frontmatter {
      samplePics {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 750
              quality: 30
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        imageAlt
      }
      title
    }
  }
}
`