const { Client } = require("pg");

const klient = new Client({
  user: "postgres",
  host: "localhost",
  database: "pagilla",
  password: "foundation",
  port: 5432
});

klient.connect();

console.log("Querying database ...");
const qry = `SELECT * FROM actor LIMIT 20`;
klient.query(qry, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  res.rows.forEach(row => console.log(row['first_name'] + ' ' + row['last_name']));
  klient.end();
});