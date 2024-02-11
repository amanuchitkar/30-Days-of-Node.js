// file
const fs=require("fs")


// read file
let fileContent=fs.readFileSync('./f1.txt')
console.log("data of the fiel =>" + fileContent)
//Write in side the file

fs.writeFileSync("f2.txt","This is file 2")