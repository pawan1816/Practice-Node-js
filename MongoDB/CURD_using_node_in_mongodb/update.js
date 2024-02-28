const dbConnect=require('./mongodb')

const updatedata =async()=>{
     let data=await dbConnect();
     // updateOne for updating 1st value of the database with same name
     // for all we use update only it will update all the value which match with the value
     let result = await data.updateOne(
        {name:'5 pro'},{
            $set: {name:'5',price:"9999" }
        }
     );
     console.warn(result);
}
updatedata();