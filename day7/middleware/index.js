// to use the express we first require to install the package.json and package-lock.json and node_modules file
// and the command to install is npm i expess

const express=require('express');
const app=express();

// to create middleware
const reqFilter=(req,resp,next)=>{
    // console.log("reqFilter");
    if(!req.query.age){
        resp.send("Please Provide age")
    }
    else if(req.query.age<18){
        resp.send("You Can not acces page")
    }
    else{
        next();
    }
    
}
app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome to home page')
})

app.get('/users',(req,resp)=>{
    resp.send('welcome to Users page')
})

app.listen(5000);


// types of middleware
// 1. application-level middleware  currently used
// 2. Router-level middleware
// 3. Error-handling middleware
// 4. Built-in middleware
// 5. Third-party middleware