const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const userRoutes = require('../app/routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'app', 'public')));
app.use(cookieParser());

app.use(userRoutes);
app.use(shopRoutes);

module.exports = app;
