import React from 'react'
import { Link as ScrollTo } from 'react-scroll'

const Sup = (props) => {
  const sup = props.children.props

  // TODO: https://github.com/fisshy/react-scroll/issues/415
  // useEffect(() => {
  // Events.scrollEvent.register('end', (to, element) => {
  //   element.classList.add('reached')
  //   setTimeout(() => {
  //     element.classList.remove('reached')
  //   }, 3000)
  // })

  // return () => {
  //   Events.scrollEvent.remove('end')
  // }
  // })

  return (
    <sup id={props.id}>
      <ScrollTo
        title={`Anchor to ${sup.href}`}
        className={sup.className}
        href={sup.href}
        to={sup.href.substr(1)}
        spy={false}
        smooth={true}
        duration={400}
        offset={0}
      >
        {sup.children}
      </ScrollTo>
    </sup>
  )
}

const Footnotes = (props) => {
  const notes = props.children[1].props.children

  return (
    <div className="footnotes">
      <hr />

      <ol>
        {notes.map(({ props: { id, children } }, index) => (
          <li key={index} id={id}>
            {children}
          </li>
        ))}
      </ol>
    </div>
  )
}

export { Sup, Footnotes }
