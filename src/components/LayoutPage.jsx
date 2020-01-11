import React from 'react'
import { Helmet } from 'react-helmet-async'

import SEO from '../components/SEO'
import HeroPage from '../components/HeroPage'
import Article from '../layouts/Article'

const LayoutPath = ({ children, name }) => (
  <>
    <SEO title={name} />
    <Helmet
      bodyAttributes={{
        page: 'page',
        class: 'single header-fixed hero-small',
      }}
    />
    <HeroPage title={name} />
    <Article>{children}</Article>
  </>
)

export default LayoutPath
