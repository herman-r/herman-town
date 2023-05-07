import * as React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Sns from "../components/sns"
import Channel from "../components/Channel"
import Portfolio from "../components/portfolio"
import Navigation from "../components/navigation"
import Seo from "../components/seo"

import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  const tw_url="https://twitter.com/___herman";
  const ig_url="https://www.instagram.com/___herman.r/";


  return (
    <>
      <Seo title="herman town" description="this is herman town." />
      <Header title="herman town"/>
      <div className="section">
        <Sns sns="Twitter" icon={faTwitter} url={tw_url} />
        <Sns sns="Instagram" icon={faInstagram} url={ig_url} />
      </div>
      <div className="section">
        <Channel />
      </div>
      <div className="section">
        <Portfolio />
      </div>
      <Navigation />
    </>
  )
}
