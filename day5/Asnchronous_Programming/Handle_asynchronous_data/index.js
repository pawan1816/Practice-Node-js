// Handle asynchronous data

let a=20;
let b=0;

let waitingDate=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})


waitingDate.then((data)=>{
    console.log(a+data)
})
