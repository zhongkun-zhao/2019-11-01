const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require('fs');
app.use(bp.urlencoded({extended:false}));
let u = express.static('www');
app.use(u);


app.get('/login',(req,res)=>{
    console.log(req.query);
    if(req.query.user === 'zzk'){
          res.json({
              code:1,
              msg:'你真帅'
          })
    }
})

app.post('/register',(req,res)=>{
    console.log(req.body)
})

app.listen(80)