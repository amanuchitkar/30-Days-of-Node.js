const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('You on about page')
})
app.get('/contact',(req,res)=>{
  res.send("You are in contact page")
})
app.listen(3000,()=>console.log("Port is runing on 3000"))