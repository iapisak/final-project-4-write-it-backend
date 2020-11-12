const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const PORT = process.env.PORT || 4000;
require('dotenv').config();

const routes = require('./routes/api');

const corsOptions = {
    "Access-Control-Allow-Origin": ['http://localhost:3000', 'https://project-write-it.herokuapp.com'],
    "Access-Control-Allow-Methods": POST,GET,PUT,DELETE,
    "Access-Control-Allow-Credentials": true,
    // Origin: ['http://localhost:3000', 'https://project-write-it.herokuapp.com'],
    Credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// === MiddleWare === //
app.use(bodyParser.json());
app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URI }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
}));

// === Routes === //
app.use('/api/v1', routes)

app.listen(PORT, () => {console.log(`We are on ${PORT}`)});