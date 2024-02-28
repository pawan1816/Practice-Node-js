// Read data form mongoDB

const dbConnect=require('./mongodb')

// 1st way Promise handle

// dbConnact().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })
// console.warn(dbConnact())



// second way to control promise
const main = async()=>{
    // console.log("main function called");
   let data=await dbConnect();
   data=await data.find().toArray();
   console.warn(data);
}
main();