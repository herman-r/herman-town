import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"

import "../styles/article.css"

const Article =  ({ data }) => {
  const article = data.markdownRemark

  return (
    <>
      <Seo title="herman town" description="this is herman town." />
      <Header title={article.frontmatter.title} />
      <div className="article-content">
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
      <Navigation />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
}
`

export default Article;
