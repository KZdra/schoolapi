var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sapi'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('mysqlconnected')
});


module.exports= conn;