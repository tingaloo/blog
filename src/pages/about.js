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
          <div class="columns">
            <div class="column">
              <h1 className="is-size-1" has-text-grey-darker>About Me!</h1>
              

             
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
