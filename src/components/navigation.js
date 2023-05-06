import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faNewspaper, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import "../styles/navigation.css"

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigationContainer">
        <Link to="/" className="nav"><FontAwesomeIcon icon={faHouse} className="navIcon" /><p>Home</p></Link>
        <Link to="#" className="nav"><FontAwesomeIcon icon={faNewspaper} className="navIcon" /><p>Article</p></Link>
        <Link to="#" className="nav"><FontAwesomeIcon icon={faHeart} className="navIcon" /><p>Like</p></Link>
        <Link to="#" className="nav"><FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" /><p>Search</p></Link>
        <Link to="#" className="nav"><FontAwesomeIcon icon={faUser} className="navIcon" /><p>Herman</p></Link>
      </div>
    </div>
  )
}
