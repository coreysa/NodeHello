var http = require('http');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello TechDays NL. </h1> <h2></h2>');
}).listen(process.env.PORT);  
