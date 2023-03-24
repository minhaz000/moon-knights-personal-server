const express = require('express')
require('dotenv').config()
require('colors')
const Router = require('./routes/root.routes')
const ApiRouter = require('./routes/API/v1/api.routes')
const DB = require('./db.config')
const app = express()
DB.connectDB
var os = require("os");
var hostname = os.hostname();
console.log( hostname)
app.use('/static',express.static('public'))
app.use(express.json());
app.use('/',Router);
app.use('/api',ApiRouter);

module.exports = app
