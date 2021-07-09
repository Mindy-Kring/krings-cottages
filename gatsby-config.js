module.exports = {
  siteMetadata: {
    title: "Kring's Cottages", 
    description: `Kring's Cottages. Cottages, boats and motors for rent in Plevna, Ontario, Canada. Fishing, swimming, cottages and beaches located on 100-acres of Canadian landscape. Come experience the warm, sandy shores of Sand Lake, Ontario.`,
    author: `Terry J Reynolds`,
    keywords: "cottage, fishing, beach, Canada, trip",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-scroll-reveal",
    "react-magnifier",
      {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
  `gatsby-plugin-sharp`,
      {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    }, 
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: .5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
    }
    }
  ],
};
