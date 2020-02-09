import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'
import { globalHistory } from '@reach/router'
import { scroller } from 'react-scroll'

import { ThemeContext } from '../provider/theme'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import mdxElements from '../components/MDXElements'

export default class Index extends React.Component {
  static contextType = ThemeContext

  componentDidMount() {
    const hash = globalHistory.location.hash
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.substr(1), {
          offset: -30,
          duration: 200,
          smooth: true,
        })
      }, 300)
    }
  }

  render() {
    return (
      <>
        <Helmet htmlAttributes={{ theme: this.context.theme }} />
        <Header></Header>
        <MDXProvider components={mdxElements}>
          <main role="main" id="main">
            {this.props.children}
          </main>
        </MDXProvider>
        <Footer></Footer>
        <ScrollToTop />
      </>
    )
  }
}
