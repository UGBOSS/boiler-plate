const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('DB정보'
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! This is RKPP')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
