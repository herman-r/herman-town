import React, { useEffect, useState} from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="headerContainer">
        <Link to="/">
          <h1>herman town</h1>
        </Link>
        <div className="circle"></div>
      </div>
    </header>
  )
}
