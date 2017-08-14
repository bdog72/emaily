const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ what: 'Up Bdog' })
})

const PORT = process.env.PORT || 5000

app.listen(5000)
