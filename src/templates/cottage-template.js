import React from 'react'
import { graphql } from "gatsby"


export default function CottageTemplate({data}) {

  const {markdownRemark} = data;

  return (
    <section>
      {markdownRemark.frontmatter.title}
      {markdownRemark.frontmatter.slug}
    </section>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`


