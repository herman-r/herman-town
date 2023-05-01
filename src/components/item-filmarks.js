import React from "react"
import { Link } from "gatsby"
import filmarks from "../images/filmarks.png"
import  "../styles/item-filmarks.css"

export default function ItemFilmarks() {
  return (
    <Link to="https://filmarks.com/users/HerMan" target="_blank">
      <div className="item-filmarks">
        <img src={filmarks} alt="filmarks-logo"></img>
      </div>
    </Link>
  )
}
