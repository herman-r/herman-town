import React from "react"
import { Link } from "gatsby"

import  "../styles/item-journal.css"

const ItemJournal = ({ data }) => {
  const { frontmatter, html, fields } = data

  return (
    <div className="item-journal">
      <Link to={fields.slug}>
        <p>{frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default ItemJournal
