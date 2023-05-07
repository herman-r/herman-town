import React from "react"
import { Link } from "gatsby"
import ChannelHeader from "../components/channelHeader"
import Navigation from "../components/navigation"

import "../styles/journals.css"

export default function Journals({ pageContext }) {
  const { journals } = pageContext

  return (
    <div>
      <ChannelHeader title="journal" description="日記みたいな感じ"/>
      <div className="journals">
        {journals.map(({ node }) => (
          <Link to={node.fields.slug}>
            <div key={node.frontmatter.title} className="journal-list">
              <p className="journalDate">{node.frontmatter.date}</p>
              <div className="journalContainer">
                <div className="journalEmoji">
                  <p>{node.frontmatter.emoji}</p>
                </div>
                <div className="journalTitle">
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Navigation />
    </div>
  )
}
