const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('../app/routes/user');
const shopRoutes = require('../app/routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/app/views');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   express.static(path.join(require.main.filename, 'src', 'app', 'public'))
// );
app.use(
  express.static(path.join(__dirname, '..', 'app', 'public'))
);

app.use(userRoutes);
app.use(shopRoutes);

module.exports = app;
