// How Node js work (Arcitechture)
//call Stack
// Node API
// CallBack Queue
// Call Stack -> Node APIs -> CallBack Queue -> Call Stack (the process is called event loop)


console.log("starting up")


setTimeout(()=>{
   console.log("2 second log");
},2000)

setTimeout(()=>{
    console.log("0 second log");
 },0)

console.log("finishing up")
