import pino from 'pino'

require('dotenv').config()
export default pino({
  enabled: Boolean(process.env.LOGGER_ENABLED),
  level: process.env.LOGGER_LEVEL
})
