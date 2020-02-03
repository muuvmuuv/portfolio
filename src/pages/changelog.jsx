import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'

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
        <Head pageName={this.state.pageName} bodyClasses="page header-fixed hero-small" />

        <HeroPage title={this.state.pageName} />

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