import React from 'react'

import { HistoryConsumer } from '../store/history'
import Head from '../components/Head'

class Page extends React.Component {
  state = {
    pageName: 'Error',
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
    return (
      <>
        <Head
          pageName={this.state.pageName}
          bodyClasses="header-fixed header-click-through"
        />

        <div className="container container--small">
          <h1>ERROR</h1>
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
