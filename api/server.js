const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req, res, next) => {
  res.status(200).json("up and running");
});

module.exports = server;
