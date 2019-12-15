const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localHost',
  user: 'user',
  password: 'root',
  database: 'bamazon'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});