// file
const fs=require("fs")


// read file
// let fileContent=fs.readFileSync('./f1.txt')
// console.log("data of the fiel =>" + fileContent)
// //Write in side the file

// fs.writeFileSync("f2.txt","This is file 2")
// console.log("file has been writen")

// fs.appendFileSync("f3.txt"," Data update succesfully")
// console.log("file has been append Data")

fs.unlinkSync("f2.txt")
console.log("file has been Deleted")
