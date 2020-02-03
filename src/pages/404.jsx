import React from 'react'

import { HistoryConsumer } from '../provider/history'
import Head from '../components/Head'

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
        <Head
          pageName={this.state.pageName}
          bodyClasses="header-fixed header-click-through"
        />

        <div id="hero" className="content-center size-medium">
          <div className="container">
            <div className="post-title">
              <h1>404</h1>
              <h2>Page was not found</h2>
            </div>
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
