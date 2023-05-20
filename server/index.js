const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "CRUD_DB",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "Select * from bankdb";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/get/trans", (req, res) => {
  const sqlSelect = "SELECT * FROM transaction";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/update", (req, res) => {
  const name1 = req.body.name1;
  const name2 = req.body.name2;
  const amt1 = req.body.amt1;
  const amt2 = req.body.amt2;
  const amt = req.body.amt;
  const sqlUpdate = "Update bankdb set balance = ? where name = ?";
  db.query(sqlUpdate, [amt1, name1], (err, result) => {
    console.log("Value Updated");
  });
  db.query(sqlUpdate, [amt2, name2], (err, result) => {
    console.log("Value Updated");
  });

  const sqlInsert =
    "INSERT INTO transaction (`from`, `to`, amount) VALUES (?, ?,?)";
  db.query(sqlInsert, [name1, name2, amt], (err, result) => {
    console.log("Value Added");
  });
});
app.listen(3001, () => {
  console.log("Backend running");
});
