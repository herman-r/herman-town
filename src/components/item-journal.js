import React from "react"
import { Link } from "gatsby"

import  "../styles/item-journal.css"

const ItemJournal = ({ data }) => {
  const { frontmatter, fields } = data

  return (
    <div className="item-journal">
      <Link to={fields.slug}>
        <p className="date">{frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default ItemJournal
