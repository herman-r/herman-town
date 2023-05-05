import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import ItemJournal from "../components/item-journal"
import ItemTwitter from "../components/item-twitter"
import ItemInstagram from "../components/item-instagram"
import ItemFilmarks from "../components/item-filmarks"
import ItemSuzuri from "../components/item-suzuri"
import ItemArticle from "../components/item-article"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Home({ data }) {
  const { markdownRemark } = data
  console.log(data)
  console.log(data.allMarkdownRemark)

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
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <ItemArticle key={node.id} data={node} index={index} />
            ))}
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
    allMarkdownRemark(
      filter: { fields: { type: { eq: "article" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

