import React, { useState }from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

export default function Channel() {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggle();
      event.preventDefault();
    }
  };

  return (
    <div>
      <div
        className="toggle"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <p>Channel</p>
        <FontAwesomeIcon icon={faAngleRight} className={`toggleIcon ${isOpen ? 'opened' : 'closed'}`} />
      </div>
      <div className={`content ${isOpen ? 'visible' : 'hidden'}`}>
        <Link to="#" className={`item ${isOpen ? 'visible' : 'hidden'}`}>
          <p className="hash">#</p>
          <p className="text">Journal</p>
        </Link>
      </div>
    </div>
  )
}
