import express from "express";
// const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
