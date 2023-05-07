import React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import Movies from "../components/movies"
import Books from "../components/books"
import Navigation from "../components/navigation"

import "../styles/log.css"

export default function Log() {
  return (
    <div>
      <Seo title="herman town" description="this is herman town." />
      <Header title="Log"/>
      <Movies />
      <Books />
      <Navigation />
    </div>
  )
}
