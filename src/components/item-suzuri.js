import React from "react"
import { Link } from "gatsby"
import surisurikun from "../images/surisurikun.png"
import "../styles/item-suzuri.css"

export default function ItemSuzuri() {
  return (
    <Link to="https://suzuri.jp/HERMAN" target="_blank">
      <div className="item-suzuri">
        <img src={surisurikun} alt="surisuri-kun" />
      </div>
    </Link>
  )
}
