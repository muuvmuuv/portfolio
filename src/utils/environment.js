const activeEnv = process.env.GATSBY_ACTIVE_ENV || 'production'

const isDev = activeEnv === 'development'
const isProd = activeEnv === 'production'

const isSSR = typeof window === 'undefined'

export { activeEnv, isDev, isProd, isSSR }
