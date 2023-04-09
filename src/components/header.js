import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>herman town</h1>
      </Link>
    </header>
  )
}
