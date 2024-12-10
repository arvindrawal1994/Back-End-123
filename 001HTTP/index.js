const express = require('express');

const app = express();

app.get('/:name', (req, res)=>{
    res.send('Hello Word')
});

app.post('/greet',(req,res)=>{
    res.send('hello')
})

app.listen(5000);