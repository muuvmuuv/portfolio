import React from 'react'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'
import Hero from '../components/Hero'

class Page extends React.Component {
  state = {
    pageName: 'Error',
  }

  componentDidMount() {
    // const { breadcrumb } = this.props.pageContext

    this.props.history.update({
      location: '/',
      crumbLabel: this.state.pageName,
      crumbs: [],
    })
  }

  render() {
    return (
      <>
        <Head pageName={this.state.pageName} bodyClasses="header-float" />

        <Hero size="medium" centered={true}>
          <div className="container">
            <div className="post-title">
              <h1>404</h1>
              <h2>Page was not found</h2>
            </div>
          </div>
        </Hero>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))
