const mongoose=require('mongoose')
//starting
mongoose.connect('mongodb://localhost/testDatabase')
.then(()=>console.log('Connection is Successful'))
.catch(err=>console.log("could'n connect mongodb",err))

//schema