
var mysql = require('mysql');
//local mysql db connection

const pool = mysql.createPool({
host  : 'localhost',
user  : 'root',
password : '',
database : 'ai&ds'
});
module.exports = pool;
