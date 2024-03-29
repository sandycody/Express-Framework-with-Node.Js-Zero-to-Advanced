const express = require('express'); //Express Module
const app = express(); //object
const bodyParser = require('body-parser'); //middleware to handle POST request
const port = 3000;

/* body-parser library */

// body-parser is an npm library used to process data that sent through HTTP request body.

// It is a middleware (it's a function that holds the request object, as well as the response object and it can also respond to the server before the request)


/* NOTE : 
{ extended: false }: Parses simple URL-encoded bodies only. Does not support parsing of nested objects or arrays in the form data.

{ extended: true }: Parses both simple and extended URL-encoded bodies, allowing for more complex form submissions with nested objects or arrays.
*/

app.use(bodyParser.urlencoded({extended: false}));


// defining routes

// Routing refers to how an application's endpoints (URI) respond to client requests -- All URL's are URI's, but not all URI's are URL's

/* Basic difference between URL and URI

URI --> Person's Name where actual location or address is not known

URL --> Person's address where actual location of a person is identified

Note : We focus on URIs as we have different content types (HTML, JSON, XML)

*/

// The app object includes get(), post(), put() and delete()

app.get('/', (req, res) => {
    // res.send('<html><body><h1>Learning Express JS which is a framework of Node JS</h1></body></html>');

    res.sendFile(__dirname + '/index.html'); //Absolute Path
});

// For creation of a page
app.post('/submit-contact-data', (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    res.send(`${name} submitted successfully`);
});

// For updation of data
app.put('/update-data', (req, res) => {
    res.send('PUT Request');
});

// For deletion of data
app.delete('/delete-data', (req, res) => {
    res.send('DELETE Request');
});

app.patch('/submit-contact-data', (req, res) => {
    res.send('Partial Updation');
});

app.listen(port, () => {
    console.log(`Express App is listening on port ${port}`);
});

