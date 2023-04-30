import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import  "../styles/item-filmarks.css"

export default function ItemFilmarks() {
  return (
    <div className="item-filmarks">
      <FontAwesomeIcon icon="fa-brands fa-filmarks" style={{color: "#00acee",}} />
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          d="M x1 y1 L x2 y2 L x3 y3 L x4 y4 L x5 y5 L x6 y6 L x7 y7 L x8 y8 L x9 y9 L x10 y10 L x11 y11 L x12 y12 L x13 y13 L x14 y14 L x15 y15 L x16 y16 L x17 y17 L x18 y18 L x19 y19 L x20 y20 Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
