import React from "react"
import { Link } from "gatsby"
import Movie from "../components/movie"

import "../styles/log.css"

export default function Movies(props) {
  const movie1 = {
    'title': 'Mickey: The Story of a Mouse',
    'date': '2023/05/18'
  }

  const movie2 = {
    'title': 'Oswald the Lucky Rabbit',
    'date': '2023/05/16'
  }

  const movie3 = {
    'title': "Nope",
    'date': '2023/05/09'
  }

  return (
    <div>
      <div className="logs">
        <div className="movies-title">
          <h2>Recently Watched</h2>
          <Link to="https://filmarks.com/users/HerMan" target="_blank">
            <p>Filmarks</p>
          </Link>
        </div>
        <Movie title={movie1.title} date={movie1.date} />
        <Movie title={movie2.title} date={movie2.date} />
        <Movie title={movie3.title} date={movie3.date} />
      </div>
    </div>
  )
}
