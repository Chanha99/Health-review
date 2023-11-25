var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0615',
    database: 'cap'
});
db.connect();

module.exports = db;