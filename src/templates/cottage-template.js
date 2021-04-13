import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function CottageTemplate({data}) {

  const mr = data.markdownRemark.frontmatter;
  const image = getImage(mr.featured.childImageSharp)
  

  return (
    <section>
      
      {mr.title}
   <div>{mr.slug === "/TheElms" ? "Two-Bedroom Cottage" : "Three-Bedroom Cottage"}</div> 
 <GatsbyImage image={image} alt="picture goes here" />
    
    </section>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
   markdownRemark(frontmatter: { slug: { eq: $slug } })  {
    frontmatter {
      featured {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      title
    }
  }
}
`

