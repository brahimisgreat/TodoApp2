const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todo'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM todotasks', (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});