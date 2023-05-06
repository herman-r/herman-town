import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

const Article =  ({ data }) => {
  const article = data.markdownRemark

  return (
    <>
      <Header />
      <div className="content">
        <h1 className="article-h1">{article.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
      </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
}
`

export default Article;
