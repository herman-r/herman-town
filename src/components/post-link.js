import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h3>
      <Link to={`/post/${post.slug}`}>{post.title}</Link>
    </h3>
    <p>{post.createdAt}</p>
  </div>
)

export default PostLink
