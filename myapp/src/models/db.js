var mysql = require('mysql');
var util = require("util");
const dbConfig = require('../config/db.config'); 

var pool = mysql.createPool(dbConfig);

pool.query = util.promisify(pool.query);

module.exports = pool;