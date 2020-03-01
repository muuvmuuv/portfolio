const activeEnv = process.env.GATSBY_ACTIVE_ENV || 'production'

const isDev = activeEnv === 'development'
const isProd = activeEnv === 'production'

export { activeEnv, isDev, isProd }
