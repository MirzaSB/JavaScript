"use strict";

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  const users = [{
    name: 'John Smith',
    age: 20
  },
    {
      name: 'Jane Smith',
      age: 30
    },
    {
      name: 'Mike',
      age: 27
    }];
  res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;