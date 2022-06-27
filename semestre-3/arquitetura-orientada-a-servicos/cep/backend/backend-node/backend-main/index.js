require('dotenv').config();
const app = require('./src/config/express-app');

app.listen(process.env.SERVER_PORT);
console.log(`server running on port ${process.env.SERVER_PORT}`);