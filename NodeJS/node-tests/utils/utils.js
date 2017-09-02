"use strict";

module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.square = (a) => a * a;

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1500);
};

module.exports.setName = (userObj, fullName) => {
  var names = fullName.split(' ');
  userObj.firstName = names[0];
  userObj.lastName = names[1];
  return userObj;
};