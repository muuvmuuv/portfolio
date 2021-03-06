import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../../provider/history'
import Head from '../../components/Head'
import Timeline from '../../components/timeline/Timeline'

class Page extends React.Component {
  state = {
    pageName: 'Education',
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

    const timelineSection = edges.map(({ node: { frontmatter, fields, excerpt } }) => ({
      title: frontmatter.title,
      description: excerpt,
      started: frontmatter.started,
      ended: frontmatter.ended,
      link: fields.slug,
    }))
    const timelineData = [
      {
        name: null,
        icon: 'spell-book',
        data: timelineSection,
      },
    ]

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="home" />

        <h1 className="headline">{this.state.pageName}</h1>

        <Timeline data={timelineData} />
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
  query EducationQuery {
    allMdx(
      filter: { fields: { source: { eq: "education" } } }
      sort: { fields: [frontmatter___ended, frontmatter___started], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            qualifications
            started
            ended
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
