// console.log('你好 世界')
const http = require('http');

http.createServer(function(request,response){
//     console.log('搞定')
//    if( request.url !=='/favicon.ico'){
//         // /post?user=2
//         let nun = (/user=(\d)/.exec(requext.url.split('?')[1]))[1];
//         if(num === '1'){
//           response.write('{"name":"zzk"}');
//       }else if(num === '0'){
//           response.write('{"name":"lyx"}');
//       }
//       response.end();
//    }
if(request.url !== '/favicon.ico'){
     let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
     console.log(num);
     if(num === '1'){
         response.write('{"name":"zzk"}');
     }else if(num === '0'){
         response.write('{"name":"lyx"}');
     }
     response.end();
 }

}).listen(80);