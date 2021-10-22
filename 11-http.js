const http = require('http');

const server = http.createServer((req,res)=>{
     if(req.url === '/'){
        res.end("Here is our Home Page");
     }
     if(req.url === '/about')
     {
        res.end("This is about Page");
     }
    res.end(`
    <h1>Oops!!</h1>
    <p> We cant seem to find the page you are looking for</p>
    <a herf="/"> back Home </a>
    `);
}).listen(8080);