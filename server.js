import express from "express";

const app = express();

app.use(express.static("html"));
app.use(express.json());

app.get("/api/getdata", async (req, res) => {
  const dbData = [
    { id: 1, content: "Do some shit", date: "01.01.2026" },
    { id: 2, content: "Suicide", date: "01.02.2026" },
  ];
  res.json(dbData);
});

app.listen(3000);
