// to install mongoose command: npm i mongoose

const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    //Schema- all the field in database, it puts the validation
const productSchema= new mongoose.Schema({
    name:String,
    brand:String, //Number
    price:String
});
const saveInDB=async()=>{
    const Product=mongoose.model('products',productSchema);
    let data = new Product({
        name:"max 131",
        price:"20000",
        brand:"micromax"
        })
    let result=await data.save();
    console.log(result);
}
// saveInDB();
const updateInDB=async()=>{
    const Product=mongoose.model('products',productSchema);
    let data=await Product.updateOne(
        {name:"Motorola 40"},
        {
            $set:{price:"7000",name:"motorola xp"}
        }
        )
        console.log(data);
}

// updateInDB();

const deteteInDB=async()=>{
    const Product=mongoose.model('products',productSchema);
    let data=await Product.deleteOne({name:"m 9"});
    console.log(data);
}

// deteteInDB();

const findInDB=async()=>{
    const Product=mongoose.model('products',productSchema);
    let data=await Product.find({name:"m"});
    console.log(data);
}
findInDB();