const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoutes = require('../app/routes/user');
const shopRoutes = require('../app/routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/app/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'app', 'public')));
app.use(cookieParser());

app.use(userRoutes);
app.use(shopRoutes);

module.exports = app;
