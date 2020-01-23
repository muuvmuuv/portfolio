import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Status from './Status'
import Members from './Members'
import DataType from './DataType'

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
  <div id="hero">
    <Backdrop img={backdrop} alt={title}></Backdrop>

    <div className="container container--medium">
      <div className="post-title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="post-info">
        <ul>
          <li>
            <span className="pre">Status:</span> <Status state={status}></Status>
          </li>
          <li>
            <span className="pre">Runtime:</span> <Time date={started}></Time> –{' '}
            <Time date={ended}></Time>
          </li>
          <li>
            <span className="pre">Website:</span>{' '}
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                title={`Link to website: ${website}`}
              >
                {website}
              </a>
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
  </div>
)

export default HeroProjects
