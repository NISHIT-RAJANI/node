const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! This app listening 3000 port')
})

