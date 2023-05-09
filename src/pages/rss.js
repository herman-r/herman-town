import React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import ChannelHeader from "../components/channelHeader"
import Navigation from "../components/navigation"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRss } from "@fortawesome/free-solid-svg-icons"

import "../styles/rss.css"

export default function General() {
  return (
    <div>
      <Seo title="herman town" description="this is herman town." />
      <ChannelHeader title="rss" description="RSSはこちら"/>
      <div className="rss">
          <Link to="https://herman.town/rss.xml">
            <div className="rss-list">
              <div className="rssContainer">
                <div className="rssEmoji">
                  <FontAwesomeIcon icon={faRss} />
                </div>
                <div className="rssTitle">
                  <h2>RSS</h2>
                  <p>
                    <Link to="https://herman.town/rss.xml">https://herman.town/rss.xml</Link>
                  </p>
                </div>
              </div>
            </div>
          </Link>
      <Navigation />
      </div>
    </div>
  )
}
