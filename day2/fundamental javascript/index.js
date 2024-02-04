// check if else
// var x=21
// if(x===21){
//     console.log("matched");
// }
// else{
//     console.log("not matched");
// }



// // for loop
// for(i=0;i<10;i++){
//     console.log(i);
// }


// //array
// const arr=[2,3,4,5,5,6,6,7];
// console.log(arr);

// // there are not support export import 
// import {x} from './app'



// //  way to import

// const app= require('./app')
// console.log(app.z());


//filter use
const arr=[1,2,3,4,5,6,6,7,7,8,8,9];
const result=arr.filter((item)=>{
    // return item ===6  // match
       return item>=4
//   console.log(item);
})

console.warn(result)