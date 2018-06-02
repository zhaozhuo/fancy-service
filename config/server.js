const path = require('path')
const env = process.env.NODE_ENV

const config = require('./server.config.json')[env]
if (config.upload) {
  config.upload.temp = path.resolve(__dirname, `../${config.upload.temp}`)
  config.upload.path = path.resolve(__dirname, `../${config.upload.path}`)
}
if (config.logs) {
  config.logs = path.resolve(__dirname, `../${config.logs}`)
}
module.exports = config
