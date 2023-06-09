import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../styles/404.css"

export default function NotFound() {
    return (
        <>
            <Seo title="404 Not Found" description="ページが見つかりません" />
            <div className="not-found-message">
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
        </>
    )
}
