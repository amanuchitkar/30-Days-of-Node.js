const mongoose=require('mongoose')
//starting
mongoose.connect('mongodb://localhost/testDatabase')
.then(()=>console.log('Connection is Successful'))
.catch(err=>console.log("could'n connect mongodb",err))

//schema
const courseschema=new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate:{type:Date,default:Date.now},
    isPublished:Boolean
}) 

const Course=mongoose.model('Course',courseschema)

async function creatcourse() {
    
    const course=new Course({
        name:'Javascript',
        creator:'mrinal',
        isPublished:true
    })
    const result=await course.save()
    console.log(result)
}
creatcourse()
    