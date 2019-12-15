const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'root',
  database: 'bamazon'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});