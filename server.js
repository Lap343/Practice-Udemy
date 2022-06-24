// Npm imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Route imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// 404 Controller imports
const { pageNotFound } = require('./controllers/404');

const app = express();

// Template engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404
app.use(pageNotFound);

app.listen(3000);