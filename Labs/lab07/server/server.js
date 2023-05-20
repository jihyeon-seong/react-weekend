/**
 * 참고 : https://itprogramming119.tistory.com/entry/React-MySQL-Nodejs-%EC%97%B0%EB%8F%99%ED%95%98%EC%97%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B3%A0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
 */

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'study',
  password: 'Study123!@#',
  database: 'study',
});

app.use(
  cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get('/api/company', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  const sqlQuery = 'SELECT * FROM TODO';

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
