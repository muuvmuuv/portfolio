import React from 'react'

import Status from '../components/status'
import Members from '../components/members'
import Date from '../components/date'

const Hero = ({ item }) => (
  <div id="hero">
    <div className="backdrop">
      <img src={item.image.childImageSharp.fluid.src} alt={item.title} />
    </div>

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
            <span className="pre">Team:</span>{' '}
            <Members list={item.team}></Members>
          </li>
          <li>
            <span className="pre">Website:</span>{' '}
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {item.website}
            </a>
          </li>
          <li>
            <span className="pre">Timeline:</span>{' '}
            <Date date={item.started}></Date> – <Date date={item.ended}></Date>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Hero
