const fs=require("fs")

//make directory
// fs.mkdirSync('myDirectory')

//Check inside directory

// let FolderPath="C:\\Users\\Aman\\OneDrive\\Documents\\My Code\\30 Days of Node js\\Node_Moudule_system"
// let Foldercontent=fs.readdirSync(FolderPath)
// console.log("Folder Content",Foldercontent)

let doseExist=fs.existsSync("myDirectory")
console.log(doseExist)
