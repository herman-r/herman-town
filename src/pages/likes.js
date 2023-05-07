import React from "react"
import Header from "../components/header"
import Movies from "../components/movies"
import Navigation from "../components/navigation"

import "../styles/likes.css"

export default function Likes() {
  return (
    <div>
      <Header title="Likes"/>
      <Movies />
      <Navigation />
    </div>
  )
}
