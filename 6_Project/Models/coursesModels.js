const Joi = require('Joi');
const mongoose = require('mongoose');
const {categoriesschema}=require("./categoriesModels")

const couresesschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30
    },
    category: {
        type:categoriesschema,
        required:true
    },
    creator: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true
    }

})
const Course = mongoose.model('course', couresesschema)


function validateData(course) {
    const schema = {
        title: Joi.string().min(3).required(),
        categoryID: Joi.string().min(3).required(),
        creator: Joi.string().min(3).required(),
        rating: Joi.string().min(0).required()
    }
    return Joi.validate(course, schema)
}
exports.Course = Course
exports.validate = validateData