import React from 'react'

import Backdrop from './Backdrop'
import Time from './Time'
import Status from './Status'
import Members from './Members'
import DataType from './DataType'

const HeroProjects = ({ item }) => (
  <div id="hero">
    <Backdrop
      img={item.image.childImageSharp.fluid}
      alt={item.title}
    ></Backdrop>

    <div className="container container--medium">
      <div className="post-title">
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
      </div>
      <div className="post-info">
        <ul>
          <li>
            <span className="pre">Status:</span>{' '}
            <Status state={item.status}></Status>
          </li>
          <li>
            <span className="pre">Runtime:</span>{' '}
            <Time date={item.started}></Time> – <Time date={item.ended}></Time>
          </li>
          <li>
            <span className="pre">Website:</span>{' '}
            {item.website ? (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                title={`Link to website: ${item.website}`}
              >
                {item.website}
              </a>
            ) : (
              <DataType tooltip="Not set" type="null"></DataType>
            )}
          </li>
          <li>
            <span className="pre">Team:</span>{' '}
            <Members list={item.team}></Members>
          </li>
          <li>
            <span className="pre">Role:</span>{' '}
            {item.role.map((r, i) => (
              <span>
                {r}
                {i < item.role.length - 1 && ', '}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default HeroProjects
