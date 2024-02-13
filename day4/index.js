// console.log(process.argv[2]);

// create a file txt
// const fs=require('fs');
// const input=process.argv;
// cmd for add file===>   node index.js  add apple.txt 'this is a friuts'
// fs.writeFileSync(input[2],input[3])


// add and remove file

const fs=require('fs');
const input=process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
    // command in terminal -= node index.js  add orange.txt 'this is a color and friuts'

}else if(input[2]=='remove'){
     fs.unlinkSync(input[3])
}
else{
    console.log('invalid output');
    // cmd in terminal == node index.js  remove apple.txt
}
