import React from 'react'
import dayjs from 'dayjs'

import Logo from '../components/Logo'
import { useSiteData } from '../hooks/use-site-data'
import { useFooterLinks } from '../hooks/use-footer-links'
import { useSocialLinks } from '../hooks/use-social-links'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Footer = () => {
  const siteData = useSiteData()
  const footerLinks = useFooterLinks()
  const socialLinks = useSocialLinks()

  const thisYear = dayjs().get('y')

  return (
    <footer id="footer">
      <Logo />
      <ul className="list social">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name}>
            <a
              href={link}
              title={name}
              className="icon-group"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <Icon name={icon} />
            </a>
          </li>
        ))}
      </ul>
      <ul className="list links">
        {footerLinks.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="copyright">
        {thisYear} &copy; Marvin Heilemann <span>•</span> v{siteData.version}
      </div>
    </footer>
  )
}

export default Footer
