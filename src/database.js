const mysql = require('mysql2');

const db = mysql.createConnection({
    // multipleStatements  : true,
    // host                : 'mysqldb',
    // user                : 'admin',
    // password            : '123',
    // database            : 'my_db',
    // port                : 3306

    multipleStatements  : true,
    host                : 'localhost',
    user                : 'root',
    password            : '',
    database            : 'rkd_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;
