'use strict'

const dotenv = require('dotenv')

dotenv.load({
  path: process.env.ENV_PATH || '.env'
})

module.exports = {
  load: function (path) {
    dotenv.load({ path })
  },

  is: function (environment) {
    if (! Array.isArray(environment)) {
      environment = [environment]
    }

    return environment.includes(this.get('NODE_ENV'))
  },

  isNot: function (environment) {
    return ! this.is(environment);
  }

  isEmpty: function (value) {
    return (value && value.length !== 0)
  },

  isTruthy: function (value) {
    return (value === 'true' || value === '1')
  },

  isFalsey: function (value) {
    return (value === 'false' || value === '0')
  },

  hasValue: function (x) {
    return (x !== undefined && x !== null)
  },

  boolify: function (value) {
    return this.isTruthy(value) ? true : this.isFalsey(value) ? false : value
  },

  exists: function (key) {
    return this.hasValue(process.env[key])
  },

  get: function (key, dflt) {
    return this.boolify(
      process.env[key] || (this.hasValue(dflt) ? dflt : null)
    )
  },

  set: function (key, value) {
    process.env[key] = value
  }
}
