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
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Port is runing on ${port}`))