import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import "../styles/journalHeader.css"

export default function JournalHeader(props) {
  return (
    <header className="journalHeader">
      <div className="journalHeaderContainer">
        <Link to="/journal">
          <FontAwesomeIcon icon={faAngleLeft} className="backIcon"/>
        </Link>
        <div className="journalHeaderTitle">
          <h1>{props.title}</h1>
          <p>#journal</p>
        </div>
      </div>
    </header>
  )
}
