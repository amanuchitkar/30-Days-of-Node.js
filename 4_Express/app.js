const express = require('express')
const app = express()
const courses=[
  {id:1,name:"javascript"},
  {id:2,name:"java"},
  {id:3,name:"python"},
  {id:4,name:"c++"},
]

app.get('/', (req, res)=> {
  res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('You on about page')
})
app.get('/contact',(req,res)=>{
  res.send("You are in contact page")
})

// Route parameters
app.get("/courses/:coursename",(req,res)=>{
  // let course=courses.find(course=>course.id===parseInt(req.params.id))
  let course=courses.find(course => course.name===req.params.coursename)
  console.log(course)
  // res.send(req.params.id)
  // res.send(req.params)
  if (!course) res.status(404).send("This is not found")
  res.send(course)
})
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Port is runing on ${port}`))