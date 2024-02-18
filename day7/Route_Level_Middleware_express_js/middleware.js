module.exports= reqFilter=(req,resp,next)=>{
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