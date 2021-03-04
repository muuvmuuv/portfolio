import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Status from './Status'
import Members from './Members'
import DataType from './DataType'
import { Link } from '../elements/Link'
import Hero from './Hero'

const HeroProjects = ({
  title,
  subtitle,
  backdrop,
  status,
  started,
  ended,
  website,
  team,
  roles,
}) => (
  <Hero>
    <Backdrop img={backdrop} alt={title}></Backdrop>

    <div className="container container--medium">
      <div className="post-title">
        <h1 itemProp="headline">{title}</h1>
        <h2 itemProp="alternativeHeadline">{subtitle}</h2>
      </div>
      <div className="post-info">
        <ul>
          <li>
            <span className="pre">Status:</span> <Status state={status}></Status>
          </li>
          <li>
            <span className="pre">Runtime:</span>{' '}
            <Time date={started} itemProp="datePublished"></Time> –{' '}
            <Time date={ended}></Time>
          </li>
          <li>
            <span className="pre">Website:</span>{' '}
            {website ? (
              <Link href={website}>{website}</Link>
            ) : (
              <DataType tooltip="Not set" type="null"></DataType>
            )}
          </li>
          <li>
            <span className="pre">Team:</span>{' '}
            {team.length > 0 ? (
              <Members list={team}></Members>
            ) : (
              <DataType tooltip="Not set" type="array"></DataType>
            )}
          </li>
          <li>
            <span className="pre">Role:</span>{' '}
            {roles.length > 0 ? (
              roles.map((role, i) => (
                <span key={i}>
                  {role}
                  {i < roles.length - 1 && ', '}
                </span>
              ))
            ) : (
              <DataType tooltip="Not set" type="array"></DataType>
            )}
          </li>
        </ul>
      </div>
    </div>
  </Hero>
)

export default HeroProjects
