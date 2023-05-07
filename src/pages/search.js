import React, { useState } from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

import "../styles/search.css"

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = `https://www.google.com/search?q=${searchQuery}`
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Header title="Search"/>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            className="searchText"
            value={searchQuery}
            onChange={handleChange}
            >
          </input>
        </form>
      </div>
      <Navigation />
    </div>
  )
}
