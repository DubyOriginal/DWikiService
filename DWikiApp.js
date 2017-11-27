/*

 INSTALLATION:
 1. npm init    //package.json vizard
 2. npm install express --save
 3. npm install request --save
 4. npm install mysql --save
 5.a create nodemon.json file
 5.b npm install nodemon --save   // automatically restart the server after each change
 5.c nodemon app.js               //start server
 6. npm install moment --save
 7. npm install ejs --save
 8. npm install path --save
 8. npm install bower --save


 */

//var config = require('config.json')('./config/live.json');
//var config = require('config.json')('./config/develop.json');
var Config = require('./config/Config.js'), config = new Config();

//process.env['NODE_ENV'] = 'live';
var enviroment = process.env.NODE_ENV;

class DWikiApp {

  constructor(app) {
    console.log("DWikiApp initialized");
    //this.monitor_router = new DWikiRouter()
  }
}

var logStartingInfo = function() {
  console.log("------------------------------------------------------------");
  console.log("starting DWikiService - %s (v%s)...", enviroment, config.service.version);
  //


}


logStartingInfo();
new DWikiApp();
require('./src/DWikiRouter');



