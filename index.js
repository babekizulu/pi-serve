//Import HTTP Module
const http = require('http');
//Set Port Number
const PORT  = 3000;
//Import File System Module: Allows us to handle files
const fs  = require('fs');

//Create Server
const server = http.createServer((req, res) => {
    //@TODO: Error Messages
    const err404 = 'File not found'

    //@PARAMS: Pass in a Status Code and Headers (e.g Content-Type)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write(`Error: ${err404}`)
        } else {
            res.write(data);
        }
        res.end();
    }) 
})

server.listen(PORT, err => {
    err ? console.log(`Something went wrong:${err}`) : console.log(`Server is listening on port ${PORT}`);
})