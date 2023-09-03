const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended : false}))
app.set("view engine","ejs");
app.set("views",path.resolve("./src/views"));

module.exports = app;