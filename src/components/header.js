import React from "react"
import { Link } from "gatsby"

const Header = props => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {props.title}
      </Link>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <Link to={"/about"}>About</Link>
        <Link to={"/resume"}>Resume</Link>

      </div>
    </div>
  </nav>
)

export default Header
