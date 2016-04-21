var http = require('http');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello DevDays, Peru.</h1> <h2>I love Lima</h2>');
}).listen(process.env.PORT);  
