const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('You on about page')
})
app.listen(3000,()=>console.log("Port is runing on 3000"))