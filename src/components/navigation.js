import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faNewspaper, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import "../styles/navigation.css"

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
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
        <Link to="/articles" className={`nav ${isActive("/articles") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faNewspaper} className="navIcon" />
          <p>Article</p>
        </Link>
        <Link to="/likes" className={`nav ${isActive("/likes") ? "active" : ""}`}>
          <FontAwesomeIcon icon={faHeart} className="navIcon" />
          <p>Like</p>
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
