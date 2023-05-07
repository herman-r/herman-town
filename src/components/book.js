import React from "react"
import "../styles/log.css"

export default function Book(props) {
  return (
    <div className="book">
      <p className="book-title">『{props.title}』</p>
      <p className="book-date">{props.date}</p>
    </div>
  )
}
