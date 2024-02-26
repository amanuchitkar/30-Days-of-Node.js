const express = require('express')
// const mymiddelware = require('./middel')
const categories=require('./categories')
const joi=require('Joi')
const app = express()

app.use(categories)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Port is runing on ${port}`))