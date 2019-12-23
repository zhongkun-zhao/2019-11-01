const http = require('http'),
fs = require('fs'),
urlModel = require('querystring');

let sql = [
    {
        'id' : 1,
        'name' : '彭锦程',
		'age' : 36,
		'checked':false
    }
];

const app = http.createServer((req,res)=>{
    let originAry = [
        'http://localhost:81'
    ];
    
    if(originAry.includes(req.headers.origin)){
        res.writeHead(200,{
            'Content-type':'text/html;charset=utf-8',
            'Access-Control-Allow-Origin':req.headers.origin
        })
    }

    const{pathname}
})