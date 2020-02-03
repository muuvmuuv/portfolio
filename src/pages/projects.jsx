import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Portfolio from '../components/Portfolio'
import dayjs from 'dayjs'

class Page extends React.Component {
  state = {
    pageName: 'Projects',
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
      data: { allMdx },
    } = this.props

    const items = allMdx.edges.sort((nodeA, nodeB) => {
      const AF = nodeA.node.frontmatter
      const BF = nodeB.node.frontmatter

      const future = dayjs().add(10, 'y')
      const present = dayjs().add(-10, 'y')
      const AEnded = AF.ended ? dayjs(AF.ended) : future
      const BEnded = BF.ended ? dayjs(BF.ended) : future
      const diffEnded = BEnded.diff(AEnded)
      const AStarted = AF.started ? dayjs(AF.started) : present
      const BStarted = BF.started ? dayjs(BF.started) : present
      const diffStarted = AStarted.diff(BStarted)

      if (!BF.started && !BF.ended) {
        return -1
      } else if (!AF.started && !AF.ended) {
        return 1
      }

      return diffEnded - diffStarted
    })

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="home" />

        <h1 className="headline">{this.state.pageName}</h1>

        <div className="container">
          {items.map((item, index) => (
            <Portfolio item={item.node} key={index}></Portfolio>
          ))}
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
  query ProjectsQuery {
    allMdx(filter: { fields: { source: { eq: "projects" } } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 992, srcSetBreakpoints: [576, 768]) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            started
            ended
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
