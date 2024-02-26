const express = require('express')
// const mymiddelware = require('./middel')

const app = express()
app.use(express.json())
// app.use(mymiddelware)
const categories = [
    { id: 1, name: 'web' },
    { id: 2, name: 'mobile' },
    { id: 3, name: 'Photography' }
]

app.get('/api/categories', (req, res) => {
    res.send(categories);
});

app.post('/api/categories', (req, res) => {
    const category = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(category);
    res.send(category);
});

app.put("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send("The web page not found")
    // if (error) return res.status(404).send(error.details[0].message);
    // console.error(error.errors)
    category.name = req.body.name
    res.send(category)
    
});

app.delete('/api/categories/:id',(req,res)=>{
    const category=categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send("The web page not found");
    const index=categories.indexOf(category);
    categories.splice(index,1);
    res.send(category);
    
});

app.get('/api/categories/:id', (req, res) => {
    const category=categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send("The web page not found");
    res.send(category);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Port is runing on ${port}`))