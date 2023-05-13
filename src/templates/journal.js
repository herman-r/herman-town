import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import JournalHeader from "../components/journalHeader"
import Pagination from "../components/pagination"
import Navigation from "../components/navigation"

import "../styles/journal.css"

const Journal = ({ data }) => {
  const journal = data.markdownRemark
  const {prev, next} = data;

  return (
    <>
      <Seo title="herman town" description="this is herman town." />
      <JournalHeader title={journal.frontmatter.title}/>
      <div className="journalContent">
        <div dangerouslySetInnerHTML={{ __html: journal.html }} />
        <p className="journalDateBottom">{journal.frontmatter.date}</p>
        < Pagination prev={prev} next={next} />
      </div>
      <Navigation />
    </>
  )
}

export const query = graphql`
  query($slug: String!, $prevSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`


export default Journal;
