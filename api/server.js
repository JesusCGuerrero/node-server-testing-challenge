const express = require("express");

const db = require("../data/dbConfig");

const server = express();

const usersRouter = require("../users/users-router")

server.use(express.json());

server.use('/api/users', usersRouter)

module.exports = server;
