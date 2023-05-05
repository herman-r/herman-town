import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <div>
      <h1>{article.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </div>
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