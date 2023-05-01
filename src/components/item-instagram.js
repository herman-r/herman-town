import React from "react"
import { Link } from "gatsby"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import  "../styles/item-instagram.css"

export default function ItemInstagram() {
  return (
    <Link to="https://www.instagram.com/___herman.r/" target="_blank" >
      <div className="item-instagram">
        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className="icon" />
      </div>
    </Link>
  )
}
