// Creation of a server at port 4000
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // Reading the html file
    fs.readFile('demofile1.html', (err, data) => {
        if (err) throw err;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    console.log("Reading data...");

}).listen(4000);

console.log('Server is listening at port 4000');



