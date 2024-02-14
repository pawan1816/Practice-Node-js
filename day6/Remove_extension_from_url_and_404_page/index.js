// Remove extension from url and 404 page
const express=require('express');
const path=require('path')

const app=express();
const publicPath=path.join(__dirname,'public')

app.get('',(req,resp)=>{
   resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
 })
app.get('/help',(req,resp)=>{
resp.sendFile(`${publicPath}/help.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
    })

app.listen(5000)