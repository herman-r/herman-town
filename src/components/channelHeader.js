import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import "../styles/channelHeader.css"

export default function ChannelHeader(props) {
  return (
    <header className="channelHeader">
      <div className="channelHeaderContainer">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className="backIcon"/>
        </Link>
        <div className="channelHeaderTitle">
          <h1>#{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </header>
  )
}
