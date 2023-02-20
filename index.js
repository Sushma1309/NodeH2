const express=require('express');
const app=express();
const port=3000;

app.get('/about',(req,res)=>{
    console.log(req);
    console.log(res);
    res.send('Hello NodeJs');
})

app.listen(port,()=>{
    console.log('NodeJs is running on port 3000')
})

