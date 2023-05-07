import React from "react"
import Header from "../components/header"
import Sns from "../components/sns"
import Navigation from "../components/navigation"


import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import picture from "../images/herman.png"

import "../styles/me.css"
import "../styles/style.css"

export default function Me() {
  const tw_url="https://twitter.com/___herman";
  const ig_url="https://www.instagram.com/___herman.r/";

  return (
    <div>
      <Header title="Me"/>
      <Navigation />
      <div className="section profile">
        <img src={picture} alt="herman"></img>
        <div className="">
          <p>herman</p>
          <p>
            SUZURI / GMO Pepabo, Inc.
            <br></br>
            プロダクト開発ディレクター
          </p>
        </div>
      </div>
      <div className="section ">
        <Sns sns="Twitter" icon={faTwitter} url={tw_url} />
        <Sns sns="Instagram" icon={faInstagram} url={ig_url} />
      </div>
    </div>
  )
}
