import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import CottageDetailsTwoBedroom from '../components/cottagedetailstwobedroom'
import CottageDetailsThreeBedroom from '../components/cottagedetailsthreebedroom'
import CottageDetailsLeosPlace from '../components/cottagedetailsleosplace'


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
export default function CottageTemplate({data}) {
  const mr = data.markdownRemark.frontmatter;
 //map over all queried images and dynamically return as GatsbyImage elements 
 const samplePics = mr.samplePics.map(pic => { 
   let image = getImage(pic.image.childImageSharp);
   let picAlt = pic.imageAlt;
  return <GatsbyImage className="styledSamplePics" image={image} alt={picAlt} />
})

 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "3rem"
 }  
 const buttonDivStyle = {
     display: "flex",
     flexDirection: "row",
     justifyContent: "center"
 }
  return (
    <section>
  <div>
          <TITLE>{mr.title}</TITLE>
          <P>{mr.title === "The Elms" ? "Two-Bedroom Cottage" : "Three-Bedroom Cottage"}</P>

  </div> 
   <div className="samplePics">
       {samplePics}  
   </div>
   <div>
     {mr.title === "The Elms" ? <CottageDetailsTwoBedroom /> : mr.title === "Leos Place" ? <CottageDetailsLeosPlace /> : <CottageDetailsThreeBedroom /> }
   </div>
   <div style={buttonDivStyle}>
       <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Cottages</button></Link>

       <Link to="/rates" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Rates</button></Link>
   </div>
    
    </section>
  )
}
//gallery returns an array of image objects
export const pageQuery = graphql`
  query($slug: String!) {
   markdownRemark(frontmatter: { slug: { eq: $slug } })  {
    frontmatter {
      samplePics {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 350
              placeholder: TRACED_SVG
              quality: 50
              height: 350
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

