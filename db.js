const mysql = require('mysql2/promise');

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // Adjust username and password
    password: '',
    database: 'dosen',
  });

  // Use the connection object to execute queries

  // Alternatively, close the connection explicitly
  // connection.end();

  return connection;
};

module.exports = createConnection;
