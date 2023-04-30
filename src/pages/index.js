import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import ItemJournal from "../components/item-journal"
import ItemTwitter from "../components/item-twitter"
import ItemInstagram from "../components/item-instagram"
import ItemFilmarks from "../components/item-filmarks"
import ItemSuzuri from "../components/item-suzuri"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({ data }) {
  const { markdownRemark } = data

  return (
    <>
      <Seo title="herman town" description="this is herman town." />
      <Header />
        <div className="profile"></div>
        <div className="main-section">
          <div className="main">
            <div className="item journal">
              <ItemJournal data={markdownRemark} />
            </div>
            <div className="item twitter">
              <ItemTwitter />
            </div>
            <div className="item instagram">
              <ItemInstagram />
            </div>
            <div className="item filmarks">
              <ItemFilmarks />
            </div>
            <div className="item suzuri">
              <ItemSuzuri />
            </div>
          </div>
        </div>
    </>
  )
}

export const query = graphql`
  query {
    markdownRemark(fields: { type: { eq: "journal" } }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
      fields {
        slug
      }
    }
  }
`
