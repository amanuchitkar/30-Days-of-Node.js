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
    isPublished:Boolean,
    rating:Number
}) 

const Course=mongoose.model('Course',courseschema)

async function creatcourse() {
    
    const course=new Course({
        name:'Python',
        creator:'Rishubh',
        isPublished:false,
        rating:3.5
    })
    const result=await course.save()
    console.log(result)
}
// creatcourse()


//comparigion oprators
//eq (equal)
//gt (greater than)
//gte(geater than equal to)
//lt(less than )
//lte(less than equal to)
//in
//not in

//logical opratiors
//and
//or
async function getcourse(){
    const courses= await Course.find({rating:{$in :[4,6,8]}}).select({name :1,publishedDate:1,rating:1})
    .and([{creator:"Prem"},{rating:6}])
    // .or([{creator:"Prem"},{rating:4}])
    // const courses= await Course.find({rating:{$gt:4}}).select({name :1,publishedDate:1,rating:1})
    // const courses= await Course.find({name:'Java',creator:'Bhushan'}).select({name :1})
    // const courses= await Course.deleteMany({name:'C++',creator:'Prem'})
    console.log(courses)
}
// getcourse()

//Update
async function updatecourse(id){
    let course=await Course.findById(id)
    if (!course) return;

    course.name='CSS',
    course.creator='Ajinkya'
    const UpdateCourse=await course.save()
    console.log(UpdateCourse)
}
// updatecourse('65d8f59ca1571585f8678a26')

//Delete
async function Deletecourse(id){
    let course=await Course.findByIdAndDelete(id)
    console.log(course)
}
Deletecourse('65d8f59ca1571585f8678a26')