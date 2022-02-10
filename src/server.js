const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log("I'm in the middleware");
    // Allows the next middleware to fire off
    next();
});
app.use((req, res, next)=> {
    console.log("I am also in the middleware");
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);