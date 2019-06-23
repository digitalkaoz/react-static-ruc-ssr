import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import universal from "react-universal-component";

const Bottomlink = universal(import("../components/Bottomlink"), {
  loading: <span>Loading Bottomlink</span>,
  error: <span style={{color:"red"}}>ERROR loading Bottomlink</span>
});

const Toplink = universal(import("../components/Toplink"), {
  loading: <span>Loading Toplink</span>,
  error: <span style={{color:"red"}}>ERROR loading Toplink</span>
});

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div>
      <h1>It's blog time.</h1>
      <div>
        <Bottomlink/>
      </div>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Toplink />
    </div>
  )
}
