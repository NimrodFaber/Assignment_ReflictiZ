const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reflectiz_task",
});
const cors = require("cors");
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.set("view engine", "html");
connection.connect(function (err) {
  if (err) throw err;
  console.log("conected");
});

app.post("/checkout", function (req, res) {
  // const{firstName,}=req.body
  let sql =
    "INSERT INTO users (id,first_name,last_name,streetAddress,city,state,zipCode,email,Phone) VALUES (null,'" +
    req.body.firstName +
    "','" +
    req.body.lastName +
    "','" +
    req.body.streetAddress +
    "','" +
    req.body.city +
    "','" +
    req.body.state +
    "','" +
    req.body.zipCode +
    "','" +
    req.body.email +
    "','" +
    req.body.Phone +
    "')";

  connection.query(sql, function (err) {
    if (err) throw err;
    res.send("form save succsessfuly");
    connection.end();
  });
});

app.get("/getall", function (req, res) {
  let sql = "SELECT * FROM users";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
    connection.end();
  });
});
app.listen(port, () => {
  console.info(`start server start listening on port ${port}`);
});
