import express from "express";
import pkg from "pg";
import dotenv from "dotenv";

const app = express();
const { Pool } = pkg;

app.use(express.json());

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

(async () => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, content TEXT, date TEXT);"
  );
})();

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
