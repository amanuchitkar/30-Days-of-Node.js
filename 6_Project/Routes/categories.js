const express = require('express');
const {Category,validate}=require('../Models/categoriesModels')
const router = express.Router()

router.use(express.json())
// router.use(mymiddelware)







router.get('/', async (req, res) => {
    let categories = await Category.find()
    res.send(categories);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const category = new Category({
        name: req.body.name
    })
    await category.save();
    res.send(category);
});

router.put("/:id", async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    // const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send("The web page not found")
    // if (error) return res.status(404).send(error.details[0].message);
    // console.error(error.errors)
    // category.name = req.body.name
    res.send(category)

});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    if (!category) return res.status(404).send("The web page not found");
    // const index = categories.indexOf(category);
    // categories.splice(index, 1);
    res.send(category);

});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)
    // const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send("The web page not found");
    res.send(category);
});

module.exports = router