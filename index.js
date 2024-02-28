console.log("This is  backend");

const express = require('express')
// import express from 'express'; //same as prev
require('dotenv').config();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
res.send('JOHAN')
})

app.get('/login',(req,res)=>{
res.send('<h1>Please Log in on Johan.com</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2> This is not youtube </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})