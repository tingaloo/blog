import React from "react"
import { Link } from "gatsby"

const Header = props => (
  // <nav class="navbar" role="navigation" aria-label="main navigation">
  //   <div class="navbar-brand">
  //       <a class="navbar-item">
  //     <Link
  //       style={{
  //         boxShadow: `none`,
  //         textDecoration: `none`,
  //         color: `inherit`,
  //       }}
  //       to={`/`}
  //     >
  //       {props.title}
  //     </Link>
  //     </a>

  //     <a
  //       role="button"
  //       class="navbar-burger"
  //       aria-label="menu"
  //       aria-expanded="false"
  //     >
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //     </a>
  //   </div>

  //   <div class="navbar-end">
  //     <div class="navbar-item">
  //       <Link to={"/about"}>About</Link>
  //       <Link to={"/resume"}>Resume</Link>

  //     </div>
  //   </div>
  // </nav>
  <nav class="flex items-center justify-between flex-wrap bg-purple-700 p-6 mb-4 px-32">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <Link
        className="font-semibold text-xl tracking-tight"
        to={`/`}
      >Home</Link>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">

      <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 " to={"/about"}>About</Link>

      <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 " to={"/resume"}>Resume</Link>

    </div>
  </div>
</nav>
)

export default Header
