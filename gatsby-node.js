exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const cottageTemplate = require.resolve(`./src/templates/cottage-template.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.slug !== "/Gallery" && node.frontmatter.slug !== "/Rates") {
    createPage({
      path: node.frontmatter.slug,
      component: cottageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
      
    }
    
  })
}