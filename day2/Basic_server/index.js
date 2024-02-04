const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>hello this is pawan</h1>");
    resp.end();
}).listen(4500);


// req==request  =>it access the paremeter in node js
// resp=response =>it send the data to client
