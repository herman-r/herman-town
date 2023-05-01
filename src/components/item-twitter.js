import React from "react"
import { Link } from "gatsby"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import  "../styles/item-twitter.css"

export default function ItemTwitter() {
  return (
    <Link to="https://twitter.com/___herman" target="_blank">
      <div className="item-twitter">
        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} className="icon" />
      </div>
    </Link>
  )
}
