const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.use(express.json());
server.use(helmet());
server.use(cors());

const usersRouter = require("../api/users/users-router");
const potlucksRouter = require("../api/potlucks/potlucks-router");

server.use("/api/users", usersRouter);
server.use("/api/potlucks", potlucksRouter);

server.get("/", (req, res, next) => {
  res.status(200).json("up and running");
});

module.exports = server;
