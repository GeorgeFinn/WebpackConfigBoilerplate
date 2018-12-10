import React from "react"
import { Route, Link } from "react-router-dom"
import Gallery from "./containers/Gallery"
import About from "./containers/About"
import Article from "./containers/Article"

export default () => (
  <div>
    <div className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/article">Article</Link>
    </div>
    <Route exact path="/" component={Gallery} />
    <Route path="/about" component={About} />
    <Route path="/article" component={Article} />
  </div>
)
