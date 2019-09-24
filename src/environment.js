const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
const isDev = activeEnv === 'development'
const isProd = activeEnv === 'production'

export { activeEnv, isDev, isProd }
