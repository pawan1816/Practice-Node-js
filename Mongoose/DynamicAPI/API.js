const express=require('express');
require('./config');
const Products=require('./products')

const app=express();

app.use(express.json());
app.post("/create",async (req,resp)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
})

app.get("/list",async (req,resp)=>{
    let data=await Products.find();
    resp.send(data);
})

app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await Products.deleteOne(req.params);
    resp.send(data);
})

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    let data=await Products.updateOne(
        //{condition}
        req.params,
        {
            //updated data
            $set:req.body
        }
    );
    resp.send(data);
})
app.listen(5000);