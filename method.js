const express=require('express');
const app=express();
app.listen(3000);
app.use(express.json());
let users=[
    {
        'id':1,
        'name':"abhishek"
    },
    {
        'id':2,
        'name':"jatin"
    },
    {
        'id':3,
        'name':"muskan"
    },
]
// app.get('/users',(req,res)=>{
// res.send(users);
// });
// app.post('/users',(req,res)=>{
// console.log(req.body);
// users=req.body;
// res.json({
//     message:"data received sucessfully",
//     user:req.body
// });
// });

app.get('/users/:id',(req,res)=>{
    console.log(req.param.id);
    res.send("user id is");
   
})