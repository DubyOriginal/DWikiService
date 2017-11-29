/**
 * Created by dvrbancic on 16/09/2017.
 */
const DWikiApi = require('./DWikiApi');
const path = require('path');
const express = require('express');
const request = require('request');
//var config = require('config.json')('./config/live.json');
//var config = require('config.json')('./config/develop.json');
var Config = require('../config/Config.js'), config = new Config();

const bodyParser = require('body-parser');
var monitorApi;


var app = express();

class DWikiRouter {
  constructor() {
    console.log("DWikiRouter initialized");
    monitorApi = new DWikiApi();
  }
}

new DWikiRouter();

//**********************************************************************************************************************
// EXPRESS CONFIGURATION
//**********************************************************************************************************************
let viewPath = __dirname + '/../views';
let resPath = __dirname + '/../resources';
let bowerPath = __dirname + '/../bower_components';
console.log("resPath -> " + resPath);
app.use(express.static(viewPath));
app.use('/wiki/', express.static(resPath));
app.use(express.static(bowerPath));

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// view engine setup
app.set('view engine', 'ejs');

//**********************************************************************************************************************
// FRONT ROUTES - PAGE
//**********************************************************************************************************************
//app.get('/', function (req, res) {
//  res.redirect('/wiki/')
//});

//PAGE - Home
app.get('/wiki/', function (req, res) {
  console.log("loading page -> Home");
  res.render('./pages/index')
});

//PAGE - About
app.get('/wiki/about', function (req, res) {
  console.log("loading page -> About");
  res.render('./pages/about');
});

//**********************************************************************************************************************
// PUBLIC ROUTES
app.use('/wiki/test', function (req, res, next) {
  console.log("server: /test");
});

// get values from DB
app.get('/wiki/getallsensorsdata', function (req, res) {
  console.log("server: GET /wiki/getallsensorsdata");
  monitorApi.getAllSensorsData((result) => {
    if (res != null){
      if (result != null){
        res.set('Content-Type', 'application/json')
        res.send(result);
      }else{
        res.send(null);
      }
    }else{
      console.log("/wiki/getallsensorsdata res in NULL");
    }
  });
});


//**********************************************************************************************************************
let APP_PORT = config.service.port;
app.listen(APP_PORT, function (err) {
  if (err) {
    console.log("app.listen err -> " + err)
    throw err;
  }
  console.log('Server started on PORT: ' + APP_PORT.toString());
  console.log("------------------------------------------------------------");
}).on('error', function (err) {
  if (err) {
    console.warn("app.on.error -> " + err)
  }
});

