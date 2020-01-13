import React from 'react'

import Logo from '../components/Logo'
import { useFooterLinks } from '../hooks/use-footer-links'
import { useSocialLinks } from '../hooks/use-social-links'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Footer = () => {
  const footerLinks = useFooterLinks()
  const socialLinks = useSocialLinks()

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
    </footer>
  )
}

export default Footer
