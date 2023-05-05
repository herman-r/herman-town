import React from "react"
import { Link } from "gatsby"

import  "../styles/item-article.css"

const ItemArticle = ({ data, index }) => {
  const { frontmatter, fields } = data

  console.log(data);

  return (
    <div className={`item article article-${index}`}>
      <Link to={fields.slug}>
        <p>{frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default ItemArticle
