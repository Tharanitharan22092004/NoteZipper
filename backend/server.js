const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API running...");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server listening on port ${process.env.PORT}`));
