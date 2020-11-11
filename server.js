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
    Origin:['http://localhost:3000', 'https://project-write-it.herokuapp.com'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://project-write-it.herokuapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  })

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