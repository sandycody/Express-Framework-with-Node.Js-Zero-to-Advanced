var http = require('http'); // Import Node.js core module

// http is a protocol for fetching resources such as HTML documents
// http is essentially the foundation of any data exchange on the web

// Creating server

// request and response both are the callback function parameters that are used for node.js - queries, params, body, headers and even cookies
var server = http.createServer(function(req, res) {
    // handle incoming requests here...
    if (req.url === '/') {

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is the home page</p></body></html>');

        res.end();
    }

    // add another page to our site which is the contact page
    else if (req.url === '/contact') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is the contact page</p></body></html>');

        res.end();
    }
    else res.end('Invalid request!');

});

server.listen(5000); //listening to any incoming requests
console.log("Node.js web server at port 5000 is running...");