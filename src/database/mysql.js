require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost', 
    user: process.env.MYSQL_USER || 'root',      
    password: process.env.MYSQL_PASSWORD || '',  
    database: process.env.MYSQL_DATABASE || 'mydb'  
});

connection.connect((error) => {
    if (error) {
        console.error('Error connect to database:', error.message);
        process.exit(1);
    } else {
        console.log('Connected to database...');
    }
});

module.exports = connection;