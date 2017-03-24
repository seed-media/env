'use strict'

const path = require('path')
const dotenv = require('dotenv')

class Env {
  constructor (path) {
    dotenv.load({
      silent: process.env.ENV_SILENT || false,
      path: this.path(path || process.env.ENV_PATH)
    })
  }

  path (path) {
    return this.isEmpty(path) ? '.env' : path;
  }

  isEmpty (value) {
    return (value && value.length !== 0)
  }

  isTruthy (value) {
    return (value === 'true' || value === '1')
  }

  isFalsey (value) {
    return (value === 'false' || value === '0')
  }

  hasValue (x) {
    return (x !== undefined && x !== null )
  }

  boolify (value) {
    return this.isTruthy(value) ? true : this.isFalsey(value) ? false : value
  }

  exists (key) {
    return this.hasValue(process.env[key])
  }

  get (key, dflt) {
    return this.boolify(
      process.env[key] || (this.hasValue(dflt) ? dflt : null)
    )
  }

  set (key, value) {
    process.env[key] = value
  }
}

module.exports = Env
