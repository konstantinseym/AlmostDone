import express from "express";
import pkg from "pg";

const app = express();
const { Pool } = pkg;

app.use(express.static("html"));
app.use(express.json());

const pool = new Pool({
  user: "konstantin",
  host: "localhost",
  database: "almostdone",
  password: "purplE43&%eternitY",
  port: 5432,
});

async function createTableIfNotExists() {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, content TEXT, date TEXT);",
  );
}

createTableIfNotExists();

app.get("/api/getdata", async (req, res) => {
  const dbData = await pool.query("SELECT * FROM items");
  res.json(dbData.rows);
});

app.post("/api/additem", async (req, res) => {
  const clientData = req.body;
  await pool.query("INSERT INTO items (content, date) VALUES ($1, $2);", [
    clientData.data,
    "DATE?",
  ]);
});

app.delete("/api/deleteitem/:id", async (req, res) => {
  const deletingId = req.params.id;
  await pool.query("DELETE FROM items WHERE id = $1;", [deletingId]);
});

app.listen(3000);
