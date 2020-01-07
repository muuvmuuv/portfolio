import React, { useContext } from 'react'
import { useSiteMetadata } from '@hooks/use-site-metadata'
import { GlobalContext } from '@app/context'
import Link from './Link'
import { getRandomDate, getRandomInt, s } from '@utils/helper'

const Navigation = () => {
  const { menuLinks } = useSiteMetadata()
  const [state, setSate] = useContext(GlobalContext)

  // console.log(menuLinks)
  // console.log(state)

  const toggleNav = () => {
    setSate(s => ({ ...s, navOpen: !state.navOpen }))
  }

  const getPre = perm => {
    const byte = getRandomInt(156, 653)
    let num = getRandomInt(0, 60)
    num = num < 10 ? `${s()}${num}` : num
    const rndDate = getRandomDate().locale('en')
    let date = rndDate.format('D MMM HH:mm')
    if (rndDate.date() < 10) {
      date = `${s()}${date}`
    }
    switch (perm) {
      case 'l':
        perm = 'lrw-rw-r--'
        break
      case 'd':
        perm = 'drw-rw-r--'
        break
      case '-':
        perm = '-rwxrw-r--'
        break
      default:
        perm = 'dr--r--r--'
        break
    }
    // -rw-r--r--   1 marvinheilemann staff   455B 26 Sep 09:47 NOTES.md
    const str = `${perm} ${s()} ${num} root staff ${s()} ${byte}B ${date}`
    return <span dangerouslySetInnerHTML={{ __html: str }} />
  }

  const exitAnimation = (exit, node) => {
    console.log('EXITEXITEXITEXITEXITEXIT')
    setSate(s => ({ ...s, navOpen: false }))
  }

  return (
    <div id="navigation" className={state.navOpen ? 'open' : ''}>
      <button
        className="trigger"
        onClick={toggleNav}
        onKeyPress={toggleNav}
        title="Open Navigation"
      >
        <div className="hl hl1">
          <div className="hli hli1"></div>
        </div>
        <div className="hl hl2">
          <div className="hli hli2"></div>
        </div>
        <div className="hl hc1">
          <div className="hli hci1"></div>
        </div>
        <div className="hl hc2">
          <div className="hli hci2"></div>
        </div>
      </button>
      <div className="overlay"></div>
      <div className="wrapper">
        <nav>
          <div className="cwd">
            <div>~/Documents/Projects/Portfolio master !20 ?</div>
            <div>❯ ls -la</div>
            <div>total 1728</div>
          </div>
          <ul>
            {menuLinks.map(({ name, link, type }, index) => (
              <li key={`NI${index}`}>
                {type === 'l' ? (
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-link"
                  >
                    {getPre(type)}
                    {name}
                  </a>
                ) : (
                  <Link
                    to={link}
                    className="nav-link"
                    exit={{
                      trigger: ({ exit, node }) => exitAnimation(exit, node),
                    }}
                  >
                    {getPre(type)}
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
