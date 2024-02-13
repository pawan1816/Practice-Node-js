// difference between Asynchronous and Synchronous
// in Synchronous operatioin tasks are performed one at a time. ex PHP
// in Asynchronous second Task do not wait to finish first task. ex node,javascript


// console.log("start exe....")

// setTimeout(()=>{
//    console.log("logic exe...");
// },2000)


// console.log("Complete exe...");


let a=10;
let b=0;

setTimeout(()=>{
    b=20;
 },2000)
 
 
 console.log(a+b);
