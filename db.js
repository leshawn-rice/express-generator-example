"use strict";

// External Dependencies
const { Client } = require("pg");

/** Database setup for foobar_db. */
const { getDatabaseUri } = require("./config");
const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect();

module.exports = db;