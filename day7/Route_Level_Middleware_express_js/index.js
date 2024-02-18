// Route Level Middleware
const express=require('express');
const reqFilter=require('./middleware')
const app=express();

const route=express.Router();
// to create middleware
route.use(reqFilter);
// app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome to home page')
});

route.get('/users',(req,resp)=>{
    resp.send('welcome to Users page')
});
app.get('/help',(req,resp)=>{
    resp.send('welcome to Help page')
});
route.get('/about',(req,resp)=>{
    resp.send('welcome to About page')
});
route.get('/contact',(req,resp)=>{
    resp.send('welcome to Contact page')
});

app.use('/',route);
app.listen(5000);