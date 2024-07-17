const express = require('express')
const app = express()
const PORT = process.env.PORT
const LAUNCHER_NAME = process.env.LAUNCHER_NAME

app.get('/', (req, res) => {
  const content = `Successful response. now[${new Date()}] hostname[${process.env.HOSTNAME}]`
  console.log(content)
  res.send(content)
})

app.listen(PORT, () => console.log(`${LAUNCHER_NAME} is listening on port ${PORT}.`))
