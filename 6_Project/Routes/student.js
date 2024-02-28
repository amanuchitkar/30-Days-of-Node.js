const express = require('express');
const Joi = require('Joi');
const mongoose = require('mongoose')

const router = express.Router()

router.use(express.json())
// router.use(mymiddelware)


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




router.get('/', async (req, res) => {
    let students = await Students.find()
    res.send(students);
});

router.post('/', async (req, res) => {
    const { error } = validateData(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const students = new Students({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        Phone: req.body.Phone
    })
    await students.save();
    res.send(students);
});

router.put("/:id", async (req, res) => {
    const { error } = validateData(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const students = await Students.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            isEnrolled: req.body.isEnrolled,
            Phone: req.body.Phone
        },
        { new: true })
    if (!students) return res.status(404).send("The web page not found")
    res.send(students)

});

router.delete('/:id', async (req, res) => {
    const students = await Students.findByIdAndDelete(req.params.id)
    if (!students) return res.status(404).send("The web page not found");
    res.send(students);

});

router.get('/:id', async (req, res) => {
    const students = await Students.findById(req.params.id)
    if (!students) return res.status(404).send("The web page not found");
    res.send(students);
});

function validateData(students) {
    const schema = {
        name: Joi.string().min(3).max(20).required(),
        Phone:Joi.string().min(10).max(13).required(),
        isEnrolled:Joi.boolean()
    }
    return Joi.validate(students, schema)
}
module.exports = router