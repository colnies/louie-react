const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL username
    password: 'admin', // MySQL password
    database: 'testdb', // database name
});
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Route to insert data
app.post('/submit', (req, res) => {
    const { name, email, phone, age } = req.body;
    const sql = 'INSERT INTO adopt (name, email, phone, involvement, details) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone, involvement, details], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User added!', result });
    });
});

app.get('/adopt', (req, res) => {
    db.query('SELECT COUNT(*) as total FROM adopt', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0].total);
    });
});

app.listen(3001, () => {
    console.log('Server running on http://127.0.0.1:3001');
});