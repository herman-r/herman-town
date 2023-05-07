import React from "react"
import "../styles/likes.css"

export default function Movie(props) {
  return (
    <div className="movie">
      <p className="movie-title">『{props.title}』</p>
      <p className="movie-date">{props.date}</p>
    </div>
  )
}
