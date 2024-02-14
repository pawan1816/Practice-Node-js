// console.log("hello");

const express=require('express');
const app=express();


app.get('',(req,resp)=>{
    resp.send(`<h1>welcome, this is home page</h1>
    <a href="/about">Go to About Page</a>
    
    <a href="/help">Go to help Page</a>`);
});

app.get('/about',(req,resp)=>{
    // randering JSON data
    resp.send([
        {
            name:'anil',
            email:'anil@gmail.com'
        },
        {
            name:'sam',
            email:'sam@gmail.com'
        },
        {
            name:'pawan',
            email:'pawan@gmail.com'
        },
        {
            name:'devid',
            email:'devid@gmail.com'
        }
    ]);
});

app.get('/help',(req,resp)=>{
    // randering Html in browser
    resp.send(`
    <input type=text placeholder="user Name"/>
    <button>Submit</button>
    <a href="/">Go to Home Page</a>`);
});

app.listen(5000);