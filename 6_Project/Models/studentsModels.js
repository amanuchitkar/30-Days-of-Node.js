const Joi = require('Joi');
const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 30 },
    isEnrolled: {
        type: Boolean, default: false
    },
    Phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12
    }


})
const Students = mongoose.model('students', studentSchema)

function validate(students) {
    const schema = {
        name: Joi.string().min(3).max(20).required(),
        Phone:Joi.string().min(10).max(13).required(),
        isEnrolled:Joi.boolean()
    }
    return Joi.validate(students, schema)
}

exports.Students=Students
exports.validateDate=validate