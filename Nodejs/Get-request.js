/*
npm init -y
npm i express
in package.json : "type": "module"
*/

//using express
import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running `);
});
