import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <Link to="/">
          <h1 className="header-title">herman town</h1>
        </Link>
        <div className="circle"></div>
      </div>
    </header>
  )
}
