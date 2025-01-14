const express = require('express');
const server = express();
const morgan = require("morgan")
const router = require("../src/routes/index")
const cors = require("cors");

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router);

module.exports = server;