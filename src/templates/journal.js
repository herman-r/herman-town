import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

const Journal = ({ data }) => {
  const journal = data.markdownRemark

  return (
    <>
      <Header />
      <div className="content">
        <h1 className="journal-h1">{journal.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: journal.html }} />
      </div>
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

export default Journal;
