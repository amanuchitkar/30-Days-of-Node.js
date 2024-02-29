const express = require('express');


const {Students,validateData}=require('../Models/studentsModels')
const router = express.Router()
router.use(express.json())
// router.use(mymiddelware)




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


module.exports = router