const dbConnect=require('./mongodb')

const insertdata = async()=>{
    const db= await dbConnect();
    // for one data insert we use insertone function
    // for many data insert we use insertMany function
    const result= await db.insertMany(
        [
            {name:'c2',brand:'realme',price:'70000'},
            {name:'5',brand:'realme',price:'13000'},
            {name:'note 2',brand:'vivo',price:'11000'},
            {name:'gallexy',brand:'sumsung',price:'15000'},
            {name:'15 pro',brand:'apple',price:'150000'}
    ]
        
        )
    if(result.acknowledged){
        console.log("data inserted");
    }
}
insertdata();
