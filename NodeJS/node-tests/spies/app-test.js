"use strict";

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it ('should call saveUser with user object', () => {
    const email = 'andrew@example.com';
    const pwd = '123abc';
    app.handleSignUp(email, pwd);
    expect(db.saveUser).toHaveBeenCalledWith({email, pwd});
  });

});