const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 탸입을 분석해서 가져올 수 있도록 해준다.
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입을 분석해서 가져올 수 있도록 해준다.
app.use(bodyParser.json());

// npm run start -> 스타트
// Agent pid 451

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! This is RKPP!!')
})

app.post('/register', (req, res) => {

  //회원가입 할 때 필요한 정보들을 client에서 가져오면, 그것들을 DB에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})