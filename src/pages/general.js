import React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import ChannelHeader from "../components/channelHeader"
import Navigation from "../components/navigation"

import "../styles/general.css"

export default function General() {
  return (
    <div>
      <Seo title="herman town" description="this is herman town." />
      <ChannelHeader title="general" description="お知らせ用のチャンネル"/>
      <div className="general">
          <Link to="#">
            <div className="general-list">
              <p className="generalDate">2023-05-08</p>
              <div className="generalContainer">
                <div className="generalEmoji">
                  <p>🌞</p>
                </div>
                <div className="generalTitle">
                  <h2>公開してみる</h2>
                  <p>
                    まだ旧ブログから移行した記事に画像やリンクがなかったりします。とりあえずデプロイしてみた記念。
                    次はRSSの対応と画像の最適化をしたいかなあ。
                  </p>
                </div>
              </div>
            </div>
          </Link>
      </div>
      <Navigation />
    </div>
  )
}
