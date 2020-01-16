import React from 'react'

import AngularIcon from '../images/icons/angular.svg'
import AppleIcon from '../images/icons/apple.svg'
import CodepenIcon from '../images/icons/codepen.svg'
import DiscordIcon from '../images/icons/discord.svg'
import DribbbleIcon from '../images/icons/dribbble.svg'
import GithubIcon from '../images/icons/github.svg'
import HackernewsIcon from '../images/icons/hackernews.svg'
import InstagramIcon from '../images/icons/instagram.svg'
import IonicIcon from '../images/icons/ionic.svg'
import LeagueOfLegendsIcon from '../images/icons/league-of-legends.svg'
import MarkdownIcon from '../images/icons/markdown.svg'
import NodejsIcon from '../images/icons/nodejs.svg'
import NpmIcon from '../images/icons/npm.svg'
import PythonIcon from '../images/icons/python.svg'
import SassIcon from '../images/icons/sass.svg'
import SteamIcon from '../images/icons/steam.svg'
import TwitchIcon from '../images/icons/twitch.svg'
import TwitterIcon from '../images/icons/twitter.svg'
import UnsplashIcon from '../images/icons/unsplash.svg'
import WindowsIcon from '../images/icons/windows.svg'
import WordpressIcon from '../images/icons/wordpress.svg'
import XingIcon from '../images/icons/xing.svg'
import YoutubeIcon from '../images/icons/youtube.svg'

const icons = {
  angular: <AngularIcon />,
  apple: <AppleIcon />,
  codepen: <CodepenIcon />,
  discord: <DiscordIcon />,
  dribbble: <DribbbleIcon />,
  github: <GithubIcon />,
  hackernews: <HackernewsIcon />,
  instagram: <InstagramIcon />,
  ionic: <IonicIcon />,
  lol: <LeagueOfLegendsIcon />,
  markdown: <MarkdownIcon />,
  nodejs: <NodejsIcon />,
  npm: <NpmIcon />,
  python: <PythonIcon />,
  sass: <SassIcon />,
  steam: <SteamIcon />,
  twitch: <TwitchIcon />,
  twitter: <TwitterIcon />,
  unsplash: <UnsplashIcon />,
  windows: <WindowsIcon />,
  wordpress: <WordpressIcon />,
  xing: <XingIcon />,
  youtube: <YoutubeIcon />,
  link: '↗',
}

const Icon = ({ name, textOnly }) => {
  const IconElement = icons[name] || <span>Icon not found</span>

  let classes = 'icon'
  if (textOnly) {
    classes += ' icon-text'
  }

  return (
    <span className={classes} name={name}>
      {IconElement}
    </span>
  )
}

export default Icon
