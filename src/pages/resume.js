import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pdf from "../resume/resume.pdf";

class Resume extends Component {
  render() {
    const { data } = this.props
    return (
        <Layout location={this.props.location} title={"About"}>
        <SEO title="About" />
        <div className="container">
              <h1 className="text-xl">Resume!</h1>
              <p>PDF of 
                  <a onClick={() => {window.open(pdf, '_blank')}}>Resume</a>
              </p>
        </div>
      </Layout>
    )
  }
}

export default Resume;
