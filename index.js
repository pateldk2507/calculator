const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('index',{
        resp: "",
    });
});

app.get('/add',function(req,res){

    console.log(req.url);
    return res.render('index',{
        type :'add',
        resp : req.url,
    });
});


app.get('/sub',function(req,res){

    console.log(req.url);
    return res.render('index',{
        type :'sub',
        resp : req.url,
    });
});

app.get('/mul',function(req,res){

    console.log(req.url);
    return res.render('index',{
        type :'mul',
        resp : req.url,
    });
});

app.get('/div',function(req,res){

    console.log(req.url);
    return res.render('index',{
        type :'div',
        resp : req.url,
    });
});



app.listen(port,function(err){
    if(err){
        console.log("Server Error!!",err);
    }

    console.log("Server running on port: ",port);
});
