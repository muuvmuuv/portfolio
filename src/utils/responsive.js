// TODO: remove this file in future releases if not really needed

export const Breakpoint = {
  // See: src/styles/_variables.scss:1~7
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
}

export const breakpoints = [
  Breakpoint.XS,
  Breakpoint.SM,
  Breakpoint.MD,
  Breakpoint.LG,
  Breakpoint.XL,
]

/**
 * Create responsive source by type.
 *
 * @deprecated
 */
export function createResponsiveSources(sources, type) {
  const srLength = sources.length
  const brLength = breakpoints.length

  if (!type) {
    console.error('No type specified! (possible values: fluid or fixed')
    return []
  }

  const firstSource = sources[0].childImageSharp[type]

  if (srLength === 1 || srLength > brLength) {
    console.error('Too many/or only one source! Returning the first...')
    return firstSource
  }

  const restSources = sources.slice(1, sources.length)

  return [
    firstSource,
    ...restSources.map((source, index) => ({
      ...source.childImageSharp[type],
      media: `(min-width: ${breakpoints[index + 1]}px)`,
    })),
  ]
}

/**
 * Create responsive fluid sources.
 *
 * @deprecated
 */
export function createResponsiveFluid(...sources) {
  return createResponsiveSources(sources, 'fluid')
}

/**
 * Create responsive fixed sources.
 *
 * @deprecated
 */
export function createResponsiveFixed(...sources) {
  return createResponsiveSources(sources, 'fixed')
}
