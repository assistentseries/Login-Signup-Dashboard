const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

db.connect((err) => {
    if (err) {
        console.error('DB connection error:', err);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});


app.post('/signup', (req, res) => {
const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?,?,?)";
const values = [
    req.body.name,
    req.body.email,
    req.body.password
];

db.query(sql, values, (err, result) => {
    if (err) {
    onsole.error('Signup error:', err);
    return res.json( "Error");
    }
    return res.json(data);
});
});
app.listen(8081, () => {
    console.log("listening");
});