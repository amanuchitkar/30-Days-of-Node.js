const express = require('express')
const app = express()
const mymiddelware = require('./middel')
const morgan = require('morgan')

const courses = [
  { id: 1, name: "javascript" },
  { id: 2, name: "java" },
  { id: 3, name: "python" },
  { id: 4, name: "c++" },
]
app.use(express.json())
//middelware
app.use(mymiddelware)

app.use(morgan('tiny'))
//get Metoud
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('You on about page')
})
app.get('/contact', (req, res) => {
  res.send("You are in contact page")
})

// Route parameters,Mulipel Route Handelinge
app.get("/courses/:coursename", (req, res) => {
  // let course=courses.find(course=>course.id===parseInt(req.params.id))
  let course = courses.find(course => course.name === req.params.coursename)
  console.log(course)
  // res.send(req.params.id)
  // res.send(req.params)
  if (!course) res.status(404).send("This is not found")
  res.send(course)
})

app.get("/courses", (req, res) => {
  res.send(courses)
})
//create Opretions
// app.post("/courses", (req, res) => {
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name

//   }
//   courses.push(course)
//   res.send(course)
// })
//Put Method

// app.put("/courses/:coursename", (req, res) => {
//   let course = courses.find(course => course.name === req.params.coursename)
//   if (!course) res.status(404).send("The web page not found")
//   course.name = req.body.name
// res.send(course)

// })
// Update Data

//Delete
app.delete("courses/:coursename", (req, res) => {
  let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)
  courses = UpdatedCourses
  res.send(courses)
})
// app.delete("/courses/:id",(req,res)=>{
//   let course=courses.find(course=>course.id===parseInt(req.params.id))
//   if (!course) res.status(404).send("The web page not found")

//   const index=courses.indexOf(course)
//   courses.splice(index,1)
//   res.send(course)


// })
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Port is runing on ${port}`))