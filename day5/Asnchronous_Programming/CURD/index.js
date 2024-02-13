// CURD with file System
// C-create
// R-Read
// U-Update 
// D-Relete

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filepath,'this is the simple text file');


//read
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })

// // append
// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })


// // rename
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })


// delete operation
fs.unlinkSync(`${dirPath}/fruit.txt`)