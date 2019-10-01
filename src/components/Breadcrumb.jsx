import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GlobalContext } from '../context'

const Breadcrumb = ({ location: { pathname } }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const [state] = useContext(GlobalContext)

  const fragments = pathname.split('/')
  fragments.shift()
  fragments.pop()

  const menuLinks = siteMetadata.menuLinks
  // const menuLinks = [
  //   {
  //     name: 'Projects',
  //     link: '/projects',
  //   },
  //   {
  //     name: 'Demo',
  //     link: '/projects/demo',
  //   },
  // ]

  console.log(state)
  console.log(menuLinks)
  console.log(fragments)

  const path = menuLinks.filter(({ name, link }) => {
    const menuIndex = fragments.indexOf(name.toLowerCase())
    if (menuIndex > -1) {
      const menu = menuLinks[menuIndex]
      console.log(menu)
      return menu
    }
    return false
  })

  console.log(path)
  console.log(path.length)

  return state.title ? (
    <div id="back">
      <span>/ </span>
      {path.map(({ name, link }, index) => (
        <>
          <Link to={link}>{name}</Link>
          {index < path.length ? <span> / </span> : ''}
        </>
      ))}
      <span>{state.title}</span>
    </div>
  ) : null
}

const query = graphql`
  {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`

export default Breadcrumb
