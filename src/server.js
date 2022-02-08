const http = require('http');
const express = require('express');

const app = express();
app.use((req, res, next)=> {
    console.log("I'm in the middleware");
    // Allows the next middleware to fire off
    next();
});
app.use((req, res, next)=> {
    console.log("I'm in the middleware");
});

const server = http.createServer(app);

server.listen(3000);