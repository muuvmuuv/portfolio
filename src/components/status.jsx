import React from 'react'

import { capitalizeString } from '../utils/transform'

const Status = ({ state }) => {
  const stateTransformed = capitalizeString(state)

  switch (state) {
    case 'wip':
      return (
        <span className="status">
          Work in progress{' '}
          <span className="dot dot--right dot--orange dot--animated"></span>
        </span>
      )

    case 'idle':
      return (
        <span className="status">
          Idle <span className="dot dot--right dot--blue"></span>
        </span>
      )

    case 'finished':
      return (
        <span className="status">
          Finished <span className="dot dot--right dot--green"></span>
        </span>
      )

    case 'outdated':
    case 'offline':
      return (
        <span className="status">
          {stateTransformed} <span className="dot dot--right dot--red"></span>
        </span>
      )

    default:
      return <span className="status">No status for `{state}`</span>
  }
}

export default Status
