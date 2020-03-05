import React from 'react'
import { graphql, Link as NativeLink } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
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
      allMdx: { edges },
    } = this.props.data

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="home" />

        <h1 className="headline">{this.state.pageName}</h1>

        <div className="container container--medium">
          <div className="list">
            {edges.map(({ node: { frontmatter, fields, excerpt } }, index) => (
              <div className="item" key={index}>
                <NativeLink to={fields.slug}>
                  <header>
                    <h2>{frontmatter.title}</h2>
                    <Time date={frontmatter.created} />
                  </header>
                  <p>{excerpt}</p>
                </NativeLink>
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
    allMdx(
      filter: { fields: { source: { eq: "writings" } } }
      sort: { fields: [frontmatter___created, frontmatter___modified], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
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
