import React from "react"
import Header from "./header";
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
      
    
    return (
      <div
        style={{
          // marginLeft: `${rhythm(7)}`,
          // marginRight: `${rhythm(7)}`,
          // maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title}/>
        <main className="mx-64">{children}</main>

      </div>
    )
  }
}

export default Layout
