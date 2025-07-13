const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/shivam', (req, res) => {
  res.send('chal chal chal')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
