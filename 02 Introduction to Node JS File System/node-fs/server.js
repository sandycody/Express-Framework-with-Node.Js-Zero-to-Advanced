// Asynchronous file reading

var fs = require('fs');

// How to append file content in node fs
/*
fs.appendFile('test1.txt', 'He recently won Junos Award.', (err) => {
    if (err) console.log(err);
    else console.log("Write operation completed second time");
});
*/

// How to delete files in node fs

fs.unlink('test.txt', (err) => {
    if (err) throw err;
    console.log("File deleted!");
});

// How to read files in Node fs
var data = fs.readFile('test1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString()); //Converted the data in form of bytes to string
});
console.log("Reading file...");

// How to write files in Node fs

/*
fs.writeFile('test.txt', 'My name is Sandeep Wadhawan', (err) => {
    if (err) console.log(err);
    else console.log("Write operation completed");
});
*/

/*
fs.writeFile('test1.txt', 'My name is Karan Aujla', (err) => {
    if (err) console.log(err);
    else console.log("Write operation completed second time");
}); 
*/