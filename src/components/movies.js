import React from "react"
import Movie from "../components/movie"

import "../styles/likes.css"

export default function Movies(props) {
  const movie1 = {
    'title': 'Guardians of the Galaxy Vol. 3',
    'date': '2023/05/04'
  }

  const movie2 = {
    'title': 'The Super Mario Bros. Movie',
    'date': '2023/05/02'
  }

  const movie3 = {
    'title': "Mickey's Rival",
    'date': '2023/04/23'
  }

  return (
    <div>
      <div className="likes">
        <div className="movies-title">
          <h2>Recently Watched</h2>
          <p>Filmarks</p>
        </div>
        <Movie title={movie1.title} date={movie1.date} />
        <Movie title={movie2.title} date={movie2.date} />
        <Movie title={movie3.title} date={movie3.date} />
      </div>
    </div>
  )
}
