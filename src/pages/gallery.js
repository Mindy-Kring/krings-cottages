import React from 'react'
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

const mr = data.markdownRemark.frontmatter;
 //map over all queried images and dynamically return as GatsbyImage elements
 console.log('data', data);
 console.log('dataMarkdownRemark', data.markdownRemark)
 console.log('mister', mr); 

 //make an array of the GatsbyImages
 const samplePics = mr.samplePics.map((pic, i) => { 
   console.log('pic',pic);
   let image = getImage(pic.image);
   console.log('image',image);
   let picAlt = pic.imageAlt;
  return <GatsbyImage key={picAlt} className="styledSamplePics" image={image} alt={picAlt} />
})
    return (

<div>


<div>
    <TITLE>Gallery</TITLE>
        <P>Some pics of family, fish and fun over the years at Kring's</P>
</div>

<div className="galleryPics">
 {samplePics} 

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
              placeholder: TRACED_SVG
              quality: 50
              transformOptions: {fit: COVER}
              breakpoints: 10
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