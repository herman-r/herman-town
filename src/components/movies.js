import React from "react"
import { Link } from "gatsby"
import Movie from "../components/movie"

import "../styles/log.css"

export default function Movies(props) {
  const movie1 = {
    'title': 'Orphan',
    'date': '2023/05/08'
  }

  const movie2 = {
    'title': 'Guardians of the Galaxy Vol. 3',
    'date': '2023/05/04'
  }

  const movie3 = {
    'title': "The Super Mario Bros. Movie",
    'date': '2023/05/02'
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
