/**
 * Created by dvrbancic on 16/09/2017.
 */
/**
 * Created by dvrbancic on 16/09/2017.
 */

//var db = require('mysql');

const DBHelper = require('./DBHelper');
const BasicUtils = require('./BasicUtils');

const moment = require('moment');
const APP_SESSION_TIMEOUT_CHECK = 1000 * 60 * 60 // One hour time

const ERR_CODE_DB_GET_TOKEN_FOR_ORIGIN = 'ERR_CODE_DB_GET_TOKEN_FOR_ORIGIN'
const ERR_CODE_NO_TOKEN_FOR_ORIGIN = 'ERR_CODE_NO_TOKEN_FOR_ORIGIN';

class DWikiApi {

  constructor() {
    console.log("DWikiApi initialized");
  }


}

module.exports = DWikiApi;
