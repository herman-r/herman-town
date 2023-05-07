import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faNewspaper, faBook, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import "../styles/navigation.css"

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path || location.pathname.startsWith('/journal');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="navigation">
      <div className="navigationContainer">
        <Link to="/" className={`nav ${isActive("/") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faHouse} className="navIcon" />
          <p>Home</p>
        </Link>
        <Link to="/article" className={`nav ${isActive("/article") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faNewspaper} className="navIcon" />
          <p>Article</p>
        </Link>
        <Link to="/log" className={`nav ${isActive("/log") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faBook} className="navIcon" />
          <p>Log</p>
        </Link>
        <Link to="/search" className={`nav ${isActive("/search") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
          <p>Search</p>
        </Link>
        <Link to="/me" className={`nav ${isActive("/me") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faUser} className="navIcon" />
          <p>Herman</p>
        </Link>
      </div>
    </div>
  )
}
