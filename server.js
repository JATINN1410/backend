// //server creation
// const http=require('http');
// const fs=require('fs');
// const _ =require('lodash');
// const { log } = require('console');
// const server=http.createServer((req,res)=>{
//     console.log("request ha smade from browser ro server");
//     // console.log(req);
//     // console.log(req.method);
//     // console.log(req.url);
//     // console.log(res);
//     // res.setHeader('content-type','text/html');
//     // res.write('<h1>hellow jatin agrawal</h1>');
//     // res.end();
//     let num=_.random(5,33);
//     console.log(num);
//     res.setHeader('content-type','text/html');
//     let path='.';
//     switch(req.url)
//     {
//         case '/':
//         path+='/a.html'
//         res.statusCode=200;
//         break;
//         case '/jatin':
//           res.statusCode=301;
//           res.setHeader('location','/');
//           res.end();
//             break;
//         case '/b':
//             path+='/b.html'
//             res.statusCode=200;
//             break;
//             default :
//                 path+='/c.html'
//                 res.statusCode=404;
//                 break;
//     }
//     fs.readFile(path,(err,filedata)=>{
// if(err)
// {
//     console.log(err);
// }
// else{
//       res.write(filedata);
//     res.end();
// }
//     });
// });
// server.listen(3000,'localhost',()=>{
// console.log('server is listning to the call');
// });
// epress
