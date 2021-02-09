import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

function about() {
  return (
    <div>
      <Header headerText="About Gatsby" />
      <Link to="/">Home </Link>
      <h1>About Us</h1>
    </div>
  )
}

export default about
