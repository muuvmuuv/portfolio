import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../store/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'

class Page extends React.Component {
  state = {
    pageName: 'Whats next?',
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
      data: { singleFile },
    } = this.props

    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="page header-fixed" />

        <HeroPage title={this.state.pageName} />

        <Article html={singleFile.childMarkdownRemark.html}></Article>
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
    singleFile(name: { eq: "TODO" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
