import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'
import { Link } from '../elements/Link'

class Page extends React.Component {
  state = {
    pageName: 'Changelog',
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
      singleFile: {
        childMdx: {
          fields: { slug },
          body,
        },
      },
    } = this.props.data

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="page header-float" />

        <HeroPage
          title={this.state.pageName}
          subtitle={
            <>
              This displays all releases and their changes. A better view is{' '}
              <Link
                href="https://github.com/muuvmuuv/portfolio/releases"
                title="View all releases on GitHub"
              >
                available on GitHub
              </Link>
              .
            </>
          }
        />

        <Article slug={slug} mdx={body}></Article>
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
  query ChangelogQuery {
    singleFile(name: { eq: "CHANGELOG" }) {
      childMdx {
        fields {
          slug
        }
        body
      }
    }
  }
`
