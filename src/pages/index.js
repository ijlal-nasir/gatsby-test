import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      <h1>Hello, Gastby!</h1>
      <Link to="/about">About us </Link>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
