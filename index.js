const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(
    { what: 'Up Bdog, you are a bozo',
      hello: 'Dork'
    }
  )
})

const PORT = process.env.PORT || 5000

app.listen(5000)
