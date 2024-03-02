// to install mongoose command: npm i mongoose

const mongoose=require('mongoose');
const main=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    //Schema- all the field in database, it puts the validation
    const productSchema= new mongoose.Schema({
        name:String,
        brand:String, //Number
        price:String
    });
    // model- using schema connect nodejs to mongodb
    const ProductModel=mongoose.model('products',productSchema);
    let data= new ProductModel({name:"m 9",brand:"Note Pro",price:"10999"});
    let result=await data.save();
    console.log(result);
}

main()