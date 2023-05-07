import React from "react"
import Header from "../components/header"
import Movies from "../components/movies"
import Books from "../components/books"
import Navigation from "../components/navigation"

import "../styles/log.css"

export default function Log() {
  return (
    <div>
      <Header title="Log"/>
      <Movies />
      <Books />
      <Navigation />
    </div>
  )
}
