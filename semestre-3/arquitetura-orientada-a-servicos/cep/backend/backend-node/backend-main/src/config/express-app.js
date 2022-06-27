const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRoutes = require('../app/routes/user');

const app = express();

const timerMiddleWare = (req, res, next) => {
  console.time('Timing');
  console.log(`Started request processing of ${req.method} at ${req.url}`);
  
  next();
  
  console.log(`Finished request processing of ${req.method} at ${req.url}`);
  console.timeEnd('Timing');
  console.log('---------------------------------------');
}

app.use(timerMiddleWare);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use(userRoutes);

module.exports = app;
