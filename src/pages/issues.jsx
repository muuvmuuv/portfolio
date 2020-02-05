import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'
import Issue from '../components/Issue'

class Page extends React.Component {
  state = {
    pageName: 'Issues issues tissues',
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
      allLeasot: { edges: leasotData },
    } = this.props.data

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="page header-float" />

        <HeroPage title={this.state.pageName} />

        <Article>
          <h4 className="text-center">
            More issues will come soon. Waiting for an tissue.
          </h4>
          {leasotData.map(({ node: { todo } }, index) => {
            return <Issue key={index} data={todo} />
          })}
        </Article>
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
  query TodoQuery {
    allLeasot(sort: { fields: todo___modifiedTime, order: ASC }) {
      edges {
        node {
          todo {
            tag
            ref
            modifiedTime
            line
            value
            file {
              relativePath
            }
          }
        }
      }
    }
  }
`
