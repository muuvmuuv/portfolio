import dayjs from "dayjs"
import React from "react"

import Icon from "../components/Icon"
import Logo from "../components/Logo"
import { Link } from "../elements/Link"
import { useFooterLinks } from "../hooks/use-footer-links"
import { useSocialLinks } from "../hooks/use-social-links"

const Footer = () => {
  const footerLinks = useFooterLinks()
  const socialLinks = useSocialLinks()

  const thisYear = dayjs().get("y")

  return (
    <footer id="footer" role="contentinfo">
      <Logo />
      <ul className="list social">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name}>
            <Link
              href={link}
              title={name}
              className="icon-group"
              noStyling={true}
              noIcon={true}
            >
              <Icon name={icon} />
            </Link>
          </li>
        ))}
      </ul>
      <ul className="list links">
        {footerLinks.map(({ name, link }) => (
          <li key={name}>
            <Link href={link} title={name} noStyling={true} noIcon={true}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="copyright">
        {thisYear} &copy; Marvin Heilemann <span>•</span> v
        {process.env.GATSBY_APP_VERSION}
      </div>
    </footer>
  )
}

export default Footer
