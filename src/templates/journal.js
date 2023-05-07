import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import JournalHeader from "../components/journalHeader"
import Navigation from "../components/navigation"

import "../styles/journal.css"

const Journal = ({ data }) => {
  const journal = data.markdownRemark

  return (
    <>
      <Seo title="herman town" description="this is herman town." />
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
