import React from "react"
import { graphql } from "gatsby"
import JournalHeader from "../components/journalHeader"
import Navigation from "../components/navigation"

import "../styles/journal.css"

const Journal = ({ data }) => {
  const journal = data.markdownRemark

  return (
    <>
      <JournalHeader title={journal.frontmatter.title}/>
      <div className="journalContent">
        <div dangerouslySetInnerHTML={{ __html: journal.html }} />
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

export default Journal;
