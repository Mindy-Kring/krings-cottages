import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, author, keywords, lang, meta }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
            keywords
					}
				}
			}
		`
	);
  const pageAuthor = site.siteMetadata.author
  const siteKeywords = site.siteMetadata.keywords
	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
      //this divides the tab up into two parts, the current page title and the site title
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
        {
					property: `og:title`,
					content: title,
				},
				{
					name: `og:author`,
					content: pageAuthor,
				},
        {
          name: `keywords`,
          content: siteKeywords,
        },
			
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
  title:``,
  author: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default SEO;