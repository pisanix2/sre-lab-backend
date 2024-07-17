require('dotenv').config()
const fs = require('fs')

const LAUNCHER_NAME = process.env.LAUNCHER_NAME
const path = `${__dirname}/launchers/${LAUNCHER_NAME}/index.js`

if (!fs.existsSync(path)) {
  throw new Error('launcher name not found')
}

require(path)
