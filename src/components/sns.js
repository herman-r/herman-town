import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sns(props) {
  return (
      <Link to={props.url} target="_blank">
        <div className="item sns-item">
          <FontAwesomeIcon className="icon" icon={props.icon} />
          <p className="text">{props.sns}</p>
        </div>
      </Link>
  )
}
