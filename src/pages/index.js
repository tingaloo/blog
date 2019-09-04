import React from "react"
import { Link, graphql } from "gatsby"
import "./mystyles.scss"

import Bio from "../components/bio"
import RecruiterBlob from "../components/recruiterBlob"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {/* <RecruiterBlob /> */}
        <div className="container">
          <div class="columns">
            <div class="column">
              <h1 className="is-size-1" has-text-grey-darker>Hi!</h1>
              <h1 className="is-size-2">You've reached Ting's Blog</h1>
              <h3 className="is-size-4">
                Please select among the following options
              </h3>

              <section class="section">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div class="columns">
                      <div class="column is-full">
                        <article key={node.fields.slug}>
                          <header>
                            <h3 className="is-size-5
                            has-text-weight-semibold
                            has-text-grey-lighter	">
                              <Link
                                style={{ boxShadow: `none` }}
                                to={node.fields.slug}
                                className="has-text-grey"
                              >
                                {title}
                              </Link>
                            </h3>
                          </header>
                          <section></section>
                        </article>
                      </div>
                    </div>
                  )
                })}
              </section>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
