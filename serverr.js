const express=require('express');
const app=express();
app.listen(3000);
app.get('/',(req,res)=>{
    res.send('hellow');
});
app.get('/a',(req,res)=>{
    res.sendfile('a.html')
});
app.get('/b',(req,res)=>{
    res.sendfile('b.html')
});
//redirect
app.get('/abcd',(req,res)=>{
    res.redirect('/a');
});
