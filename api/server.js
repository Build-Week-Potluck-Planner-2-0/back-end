const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("../api/auth/auth-router");
const usersRouter = require("../api/users/users-router");
const potlucksRouter = require("../api/potlucks/potlucks-router");

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/potlucks", potlucksRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
