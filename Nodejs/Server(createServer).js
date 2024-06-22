/*
npm init -y
npm i express
in package.json : "type": "module"
*/

//using create server

import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello, World!\n");
});

server.listen(port, () => {
  console.log(`Server running`);
});
