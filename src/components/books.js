import React from "react"
import { Link } from "gatsby"
import Movie from "../components/book"

import "../styles/log.css"

export default function Books(props) {
  const book1 = {
    'title': '縁の下のUIデザイン──小さな工夫で大きな効果をもたらす実践TIPS＆テクニック WEB+DB PRESS plus',
    'date': '2023/05/02'
  }

  const book2 = {
    'title': '情報アーキテクチャ 第4版 ―見つけやすく理解しやすい情報設計',
    'date': '2023/02/09'
  }

  const book3 = {
    'title': "The Elements of User Experience[固定版]: 5段階モデルで考えるUXデザイン",
    'date': '2023/01/31'
  }

  return (
    <div>
      <div className="logs">
        <div className="books-title">
          <h2>Recently Read</h2>
          <Link to="https://booklog.jp/users/iamherman" target="_blank">
            <p>Booklog</p>
          </Link>
        </div>
        <Movie title={book1.title} date={book1.date} />
        <Movie title={book2.title} date={book2.date} />
        <Movie title={book3.title} date={book3.date} />
      </div>
    </div>
  )
}
