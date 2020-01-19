import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../store/history'
import Head from '../components/Head'
import Link from '../components/Link'
import Time from '../components/Time'

class Page extends React.Component {
  state = {
    pageName: 'Writings',
  }

  componentDidMount() {
    const { breadcrumb } = this.props.pageContext

    this.props.history.update({
      location: breadcrumb.location,
      crumbLabel: this.state.pageName,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      allMarkdownRemark: { edges },
    } = this.props.data

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="home" />

        <h1 className="headline">{this.state.pageName}</h1>

        <div className="container container--medium">
          <div className="list">
            {edges.map(({ node: { frontmatter, fields, excerpt } }, index) => (
              <div className="item" key={index}>
                <Link to={fields.slug}>
                  <header>
                    <h2>{frontmatter.title}</h2>
                    <Time date={frontmatter.created} />
                  </header>
                  <p>{excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))

export const query = graphql`
  query WritingsQuery {
    allMarkdownRemark(
      filter: { fields: { source: { eq: "writings" } } }
      sort: {
        fields: [frontmatter___created, frontmatter___modified]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            keywords
            created
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
