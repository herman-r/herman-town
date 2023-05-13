import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import "../styles/pagination.css"

export default function Pagination({prev, next}) {
  return (
    <div className="pagination">
      {prev && (
        <Link to={prev.fields.slug}>
          <div className="prev">
            <FontAwesomeIcon icon={faAngleLeft} className="backIcon"/>
            <p>{prev.frontmatter.date}</p>
          </div>
        </Link>
      )}

      {next && (
        <Link to={next.fields.slug}>
          <div className="next">
            <p>{next.frontmatter.date}</p>
            <FontAwesomeIcon icon={faAngleRight} className="backIcon"/>
          </div>
        </Link>
      )}
    </div>
  )
}
