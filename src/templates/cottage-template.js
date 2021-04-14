import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function CottageTemplate({data}) {

  const mr = data.markdownRemark.frontmatter;
 //map over all queried images and dynamically return as GatsbyImage elements 
 const samplePics = mr.samplePics.map(pic => { 
   let image = getImage(pic.image.childImageSharp);
   let picAlt = pic.imageAlt;
  return <GatsbyImage image={image} alt={picAlt} />
})

  return (
    <section>
      {mr.title}
   <div>{mr.title === "The Elms" ? "Two-Bedroom Cottage" : "Three-Bedroom Cottage"}</div> 
   <div className="samplePics">
       {samplePics}  
   </div>
    
    </section>
  )
}
//gallery returns an array of image objects
export const pageQuery = graphql`
  query($slug: String!) {
   markdownRemark(frontmatter: { slug: { eq: $slug } })  {
    frontmatter {
     gallery {
        image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        imageAlt
      }
      title
    }
  }
}
`

