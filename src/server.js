const express = require('express');

const app = express();

app.use('/', (rew, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res) => {
    console.log("I am also in the hi");
    res.send('<h1>Add a product!</h1>');
});
app.use('/', (req, res) => {
    console.log("I am also in the middleware");
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);