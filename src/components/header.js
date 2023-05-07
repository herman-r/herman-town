import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header(props) {
  return (
    <header>
      <div className="headerContainer">
        <Link to="#">
          <h1 className="header-title">{props.title}</h1>
        </Link>
        <div className="circle"></div>
      </div>
    </header>
  )
}
