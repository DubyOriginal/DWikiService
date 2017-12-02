/**
 * Created by dvrbancic on 16/09/2017.
 */
var  DWikiApi = require('./DWikiApi');
var path = require('path');
var express = require('express');
var router = express.Router();
var request = require('request');
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
let resPath = __dirname + '/../res';
let bowerPath = __dirname + '/../bower_components';
console.log("resPath -> " + resPath);
app.use(express.static(viewPath));
app.use(express.static(resPath));
app.use(express.static(bowerPath));

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// view engine setup
app.set('view engine', 'ejs');

//**********************************************************************************************************************
app.use('/', router);
//app.use('/wiki', router);

router.get('/', function (req, res) {
  console.log("loading page -> Home");
  res.render('./pages/index')
});

router.get('/about', function (req, res) {
  console.log("loading page -> About");
  res.render('./pages/about')
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

