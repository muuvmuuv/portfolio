import React from 'react'

import { HistoryConsumer } from '../store/history'
import Head from '../components/Head'

class Page extends React.Component {
  state = {
    pageName: 'Photography',
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
        <Head pageName={this.state.pageName} bodyClasses="home" />

        <h1 className="headline">{this.state.pageName}</h1>

        <div className="gallery">content will come soon</div>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))
