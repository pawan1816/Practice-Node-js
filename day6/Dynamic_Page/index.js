// EJS TEMPLETE ENGINE
// most useable
// to install command==> npm i ejs 

const express=require('express');
const path=require('path')

const app=express();
const publicPath=path.join(__dirname,'public')
// step1
app.set('view engine','ejs');

app.get('',(req,resp)=>{
   resp.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',(req,resp)=>{
    const user={
        name:'Pawan Kumar',
        email:'pawan@test.com',
        city:'phagwara',
        skills:['c++','java','js','Opps','node']
    }
    resp.render('profile',{user});
    // resp.render('profile');
 })
 app.get('/login',(req,resp)=>{
    resp.render('login');
    // resp.render('profile');
 })
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
    })

app.listen(5000)