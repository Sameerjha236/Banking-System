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
  const id1 = req.body.id1;
  const id2 = req.body.id2;
  const amt1 = req.body.amt1;
  const amt2 = req.body.amt2;
  const sqlUpdate = "Update bankdb set balance = ? where id = ?";
  db.query(sqlUpdate, [amt1, id1], (err, result) => {});
  db.query(sqlUpdate, [amt2, id2], (err, result) => {});
});
app.listen(3001, () => {
  console.log("Backend running");
});
