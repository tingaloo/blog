import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={this.props.location} title={"About"}>
        <SEO title="About" />
        {/* <Bio /> */}
        {/* <RecruiterBlob /> */}
        <div className="container">
              <h1 className="text-4xl">About Me!</h1>

              <div className="mb-4">
                I'm Ting Lew, your everyday Javascript developer from Maryland. I do front end work for government contracts
                and I write front end code for DC Abortion Fund.
              </div>

              <div>
                I started this blog to improve my writing, but it more or less became an outlet for my random thoughts. I plan
                on documentating the lessons learned as I go through life.
              </div>

        </div>
      </Layout>
    )
  }
}

export default About
