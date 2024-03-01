const Joi = require('Joi');
const mongoose = require('mongoose');

const categoriesschema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 30 },

})
const Category = mongoose.model('category', categoriesschema)


function validateData(category) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(category, schema)
}
exports.Category=Category
exports.categoriesschema=categoriesschema
exports.validate=validateData