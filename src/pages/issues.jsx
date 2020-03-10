import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'
import Issue from '../components/Issue'
import { Link } from '../elements/Link'

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

        <HeroPage
          title={this.state.pageName}
          subtitle={
            <>
              All remaining issues in the code. More can be found{' '}
              <Link
                href="https://github.com/muuvmuuv/portfolio/issues"
                title="Open GitHub issues"
              >
                on GitHub
              </Link>
              .
            </>
          }
        />

        <Article>
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
              absolutePath
              base
            }
          }
        }
      }
    }
  }
`
