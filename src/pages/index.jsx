import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { ContextConsumer } from '../context'
import SEO from '../components/SEO'
import Backdrop from '../components/Backdrop'

const PageIndex = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <>
        <SEO></SEO>
        <Helmet
          bodyAttributes={{ page: 'index', class: 'header-fixed' }}
        ></Helmet>

        <div className="showcase">
          <Link className="item" to="/projects">
            <Backdrop src="/showcase/01.jpg"></Backdrop>
            <div className="content">Projects</div>
          </Link>
          <Link className="item" to="/photography">
            <Backdrop src="/showcase/02.jpg"></Backdrop>
            <div className="content">Photography</div>
          </Link>
          <Link className="item" to="/writings">
            <Backdrop src="/showcase/04.jpg"></Backdrop>
            <div className="content">Writings</div>
          </Link>
        </div>
      </>
    )}
  </ContextConsumer>
)

export default PageIndex
