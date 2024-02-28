const express = require('express')
const mongoose = require('mongoose')
// const mymiddelware = require('./middel')
const categories = require('./Routes/categories')
const students=require('./Routes/student')
const joi = require('Joi')
const app = express()

mongoose.connect('mongodb://localhost/LearningPlatform')
    .then(() => console.log("Connect Succesfully"))
    .catch(err => console.log('Coudnot connect to mongodb', err))


app.use(express.json())
app.use("/api/categories/",categories)
app.use("/api/students/",students)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Port is runing on ${port}`))