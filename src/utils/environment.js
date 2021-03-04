export const activeEnvironment = process.env.GATSBY_ACTIVE_ENV || "production"

export const isDevelopment = activeEnvironment === "development"
export const isProduction = activeEnvironment === "production"

export const isSSR = typeof window === "undefined"
