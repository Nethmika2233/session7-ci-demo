const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello CI/CD World!");
});

app.get("/add", (req, res) => {
    const a = Number(req.query.a) || 0;
    const b = Number(req.query.b) || 0;
    res.status(200).json({ result: a + b });
});

module.exports = app;