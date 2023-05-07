import React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Header from "../components/header"
import Navigation from "../components/navigation"

import "../styles/articles.css"

export default function Articles({ pageContext }) {
  const { articles } = pageContext

  return (
    <div>
      <Seo title="herman town" description="this is herman town." />
      <Header title="Articles" />
      <div className="articles">
        {articles.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div key={node.frontmatter.title} className="article-list">
              <div className="article-title">
                <p>{node.frontmatter.emoji}</p>
                <h2>{node.frontmatter.title}</h2>
              </div>
              <p className="articleDate">{node.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </div>
      <Navigation />
    </div>
  )
}
