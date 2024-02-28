const dbConnect=require('./mongodb');

const deletedata= async()=>{
//    console.log("function to delete the data");
    let data =await dbConnect();
    // for single delete deleteOne
    // for multiple deleteMany
    let result=await data.deleteMany({name:'5'})
    console.warn(result);
    if(result.acknowledged){
        console.log("record deleted");
    }
}

deletedata();