import React from 'react'

// https://react-icons.netlify.com/
import { GiSpellBook, GiBriefcase } from 'react-icons/gi'
import { IoMdClose, IoMdArrowUp } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaTwitter, FaGithub, FaInstagram, FaDribbble, FaDiscord } from 'react-icons/fa'

// Icons that are not in `react-icons`
import Unsplash from '../images/icons/unsplash.svg'
import LeagueOfLegends from '../images/icons/league-of-legends.svg'

const icons = {
  briefcase: <GiBriefcase />,
  'spell-book': <GiSpellBook />,
  close: <IoMdClose />,
  'arrow-up': <IoMdArrowUp />,
  'arrow-up-right': <FiArrowUpRight />,
  twitter: <FaTwitter />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
  dribbble: <FaDribbble />,
  discord: <FaDiscord />,
  unsplash: <Unsplash />,
  'league-of-legends': <LeagueOfLegends />,
}

const Icon = ({ name }) => {
  const theIcon = icons[name] || (
    <span aria-hidden="true" aria-label="Icon not found">
      ⚠
    </span>
  )

  return (
    <span
      className="icon"
      aria-hidden="true"
      aria-label={`An icon which shows "${name}"`}
      name={name}
    >
      {theIcon}
    </span>
  )
}

export default Icon
