import dotEnvFlow from 'dotenv-flow'

dotEnvFlow.config()

export const APP_ENV: 'development' | 'production' | 'test' = process.env.APP_ENV === 'production' ? 'production' : process.env.APP_ENV === 'test' ? 'test' : 'development'
export const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || ''
export const RECAPTCHA_REQUIRED = process.env.RECAPTCHA_REQUIRED === 'true'
export const FIREBASE_CREDENTIALS = JSON.parse(process.env.CREDS || '')
export const PORT = process.env.PORT || ''

export const DATABASE_URL = process.env.DATABASE_URL || ''
export const DATABASE_HOST = process.env.DATABASE_HOST || ''
export const DATABASE_USER = process.env.DATABASE_USER || ''
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''

export const REDIS_HOST = process.env.REDIS_HOST || ''
export const REDIS_PORT = process.env.REDIS_PORT || '6379'
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || ''

export const SERVER_SECRET = process.env.SERVER_SECRET || ''

export const SENTRY_DSN = 'https://06b712885aaec6a28dc9b88eda3a2e71@o4507801705709568.ingest.us.sentry.io/4507801713770496'
