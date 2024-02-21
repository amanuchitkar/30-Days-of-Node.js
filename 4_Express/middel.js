//Midelweres
function myfirstmiddelware(res,req,next){
    console.log("This is custom midelwers")
    next()
  }

module.exports=myfirstmiddelware
//   app.use(function(req,res,next) {
//     console.log("Im second midelware")
//     next()
//   })