const http = require('http');
const fs = require('fs');
let sql = [
    {
        id: 0,
        username: 'zzz',
        password: 123
    },
    {
        id: 1,
        username: '赵',
        password: 321
    },
    {
        id: 2,
        username: '李磊',
        password: 123
    },
];
// 写一个正则匹配下
function queryString(str) {
    let obj = {};
    str.replace(/([^=]+)=([^&]+)&?/g, ($0, $1, $2) => {
        obj[$1] = $2;
    });
    return obj;
}

http.createServer((req, res) => {
    // /register?user=123 
    let url = req.url;
    // 如果不是/favicon.ico进去判断
    if (url !== '/favicon.ico') {
        //判断接口
        if (url.includes('?')) {
            let ary = url.split('?');
            let jiekou = ary[0];//register
            let opt = queryString(ary[1]);
            switch (jiekou) {

                case '/getname':
                    //返回给前端json
                    let msg = {
                        code: 0,
                        msg: '可以注册'
                    }
                    let o1 = sql.find(item => item.username === decodeURI(opt.user));
                    if (o1) {
                        msg.code = 1;
                        msg.msg = '有这个人了'
                    }
                    res.setHeader('content-type', 'text/html;charset=utf-8');
                    res.write(JSON.stringify(msg));
                    res.end();
                    break;
                // 注册接口
                case '/register':
                    let msg1 = {
                        code: 1,
                        msg: '注册成功'
                    }
                    let o = sql.find(item => item.username === decodeURI(opt.user));
                    if (o) {
                        msg1.code = 0;
                        msg1.msg = '有这个人了';
                    } else {
                        if (opt.password) {
                            sql.push({
                                id: Date.now(),
                                username: decodeURI(opt.user),
                                password: opt.password
                            });
                        } else {
                            console.log(2222)
                            msg1.code = 2; //参数不正确
                            msg1.msg = '参数不正确';
                            res.writeHead(400, { 'content-type': 'text/html;charset=utf-8' });
                            res.write(JSON.stringify(msg1));
                            res.end();
                            return;
                        }
                    }
                    res.setHeader('content-type', 'text/html;charset=utf-8');
                    res.write(JSON.stringify(msg1));
                    res.end();
                    break;

                default:
                    break;
            }
        } else {
            //文件

            try {
                if (url === '/') {
                    url = '/index.html';
                }
                let data = fs.readFileSync('www' + url);
                res.write(data.toString());
                res.end();
            } catch (error) {
                let data = fs.readFileSync('www/404.html');
                res.write(data.toString());
                res.end();
            }
        }

    }
}).listen(80);




// http.createServer((req,res)=>{

//     let url = req.url;
//     if(url !== '/favicon.ico'){
        
//         if(url.includes('?')){
//             //接口
            
//             let ary = url.split('?');
//             console.log(ary)
//             let jiekou = ary[0]; // /register
//             let opt = queryString(ary[1]); // user=123&
            
//             switch (jiekou) {
//                 case '/getname':
//                     //返回给前端json
//                     let msg = {
//                         code:0,
//                         msg:'可以注册'
//                     }
//                     let o1 = sql.find(item=>item.username === decodeURI(opt.user));
//                     //查下有没有这个人
//                     if(o1){
//                         msg.code = 1;
//                         msg.msg = '有这个人了';
//                     }
//                     res.setHeader('content-type','text/html;charset=utf-8');
//                     res.write(JSON.stringify(msg));
//                     res.end();
//                 break;
//                 //注册接口
//                 case '/register':
//                     let msg1 = {
//                         code:1,
//                         msg:'注册成功'
//                     }
//                     // console.log(opt)
//                     let o = sql.find(item=>item.username === decodeURI(opt.user));
//                     //查下有没有这个人
//                     if(o){
//                         msg1.code = 0;
//                         msg1.msg = '有这个人了';
//                     }else{
//                         if(opt.password){
//                             sql.push({
//                                 id:Date.now(),
//                                 username:decodeURI(opt.user),
//                                 password:opt.password
//                             });
//                             console.log(sql);
//                         }else{
//                             console.log(2222)
//                             msg1.code = 2; //参数不正确
//                             msg1.msg = '参数不正确'; 
//                             res.writeHead(400,{'content-type':'text/html;charset=utf-8'});
//                             res.write(JSON.stringify(msg1));
//                             res.end();
//                             return;
//                         }
//                     }
//                     // console.log(1111,o);
//                     res.setHeader('content-type','text/html;charset=utf-8');
//                     res.write(JSON.stringify(msg1));
//                     res.end();
//                     break;
            
//                 default:
//                     break;
//             }
//             console.log(url);

//         }else{
//             //文件

//             try {
//                 if(url === '/'){
//                     url = '/index.html';
//                 }
//                 let data = fs.readFileSync('www'+url);
//                 res.write(data.toString());
//                 res.end();
//             } catch (error) {
//                 let data = fs.readFileSync('www/404.html');
//                 res.write(data.toString());
//                 res.end();
//             }
//         }
//     }
// }).listen(80);
