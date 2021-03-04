import React from 'react'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Article from '../layouts/Article'
import HeroPage from '../components/HeroPage'

class Page extends React.Component {
  state = {
    pageName: 'Page',
  }

  componentDidMount() {
    const { breadcrumb } = this.props.pageContext

    this.setState({ pageName: this.props.pageContext.frontmatter.title })

    this.props.history.update({
      location: breadcrumb.location,
      crumbLabel: this.props.pageContext.frontmatter.title,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      frontmatter: { title, subtitle },
    } = this.props.pageContext

    return (
      <>
        <Head
          pageTitle={title}
          pageName={this.state.pageName}
          bodyClasses="page header-float hero-small"
        />

        <HeroPage title={title} subtitle={subtitle} />

        <Article>{this.props.children}</Article>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))
