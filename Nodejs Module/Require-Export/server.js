const http = require('http');
const server = http.createServer(serverRequest);

function serverRequest(request, response) {
console.log(request.url);
response.write(`
<style>
body 
{
  background-color: darkblue;
  font-family: Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
}
</style>
<h1 style = 'border: 2px solid white; padding: 15px; min-height: 10px; background-color: red; color: whitesmoke; text-align: center'>Hello From The Server</h1>`);
response.end();
}

server.listen(3000);
console.log('Server started at 3000');


/* var http = require('http'),
    fs = require('fs');


fs.readFile('Owner/View/Account.php', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
}); */