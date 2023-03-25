require('dotenv').config()
require('colors')
const express = require('express')
const Router = require('./routes/root.routes')
const ApiRouter = require('./routes/API/v1/api.routes')
const DB = require('./db.config')
const app = express()
DB.connectDB

app.use('/static',express.static('public'))
app.use(express.json());
app.use('/',Router);
app.use('/api',ApiRouter);

module.exports = app
