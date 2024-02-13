const fs=require('fs');

// create file
// fs.writeFileSync('apple.txt','this is a apple file');

// creating file by loop
const path=require('path');
const dirpath=path.join(__dirname,'files');
// console.warn(dirpath)
// for(i=0;i<5;i++){
//     // both are used to create with different name
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple text file");
//     // fs.writeFileSync(`hello${i}.txt`,"a simple text file");
// }

fs.readdir(dirpath,(err,files)=>{
// it gives the file name in array form    
// console.warn(files)  

// it gives the file name in list form
    files.forEach((item)=>{
        console.log("file name is ",item);
    })
})