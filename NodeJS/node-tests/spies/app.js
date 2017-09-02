"use strict";

var db = require('./db');

module.exports.handleSignUp = (email, pwd) => {
  db.saveUser({ email, pwd });
};