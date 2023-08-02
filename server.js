const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
// const { JSDOM } = require("jsdom"); // Import JSDOM from jsdom
// const { DOMParser } = require("xmldom");
const cheerio = require("cheerio");
const app = express();

// use body parser for post requests
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// get the url from user
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// post the result to below headings/checkheadings
app.use('/headings',require('./routes/heading'));
//start the server on localhost 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});