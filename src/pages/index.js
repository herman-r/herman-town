import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Sns from "../components/sns"
import Channel from "../components/Channel"
import Portfolio from "../components/portfolio"
import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  const tw_url="https://twitter.com/___herman";
  const ig_url="https://www.instagram.com/___herman.r/";


  return (
    <>
      <Seo title="herman town" description="this is herman town." />
      <Header />
      <div className="section">
        <Sns sns="Twitter" icon={faTwitter} url={tw_url} />
        <Sns sns="Instagram" icon={faInstagram} url={ig_url} />
      </div>
      <div className="section">
        <Channel />
      </div>
      <div className="section">
        <Portfolio />
      </div>
      <Navigation />
    </>
  )
}

export const query = graphql`
query {
  latestJournal: allMarkdownRemark(
    filter: { fields: { type: { eq: "journal" } } }
    sort: { fields: frontmatter___date, order: DESC }
    limit: 1
  ) {
    edges {
      node {
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
