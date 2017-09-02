"use strict";

const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(11);
      expect(res).toBe(121).toBeA('number');
    });

    it ('should async square a number', (done) => {
      utils.asyncSquare(9, (res) => {
        expect(res).toBe(81).toBeA('number');
        done();
      });
    });
  });

  it ('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    expect([2,3,4]).toExclude(1);
    expect({
      name: 'Andrew',
      age: 25,
      location: 'Los Angeles'
    }).toExclude({
      age: 23
    });
  });

  it ('should verify first and last names are set', () => {
    let userObj = {location: 'LA', age: 25};
    const fullName = 'John Smith';
    userObj = utils.setName(userObj, fullName);
    expect(userObj).toBeA('object').toInclude({firstName: 'John'});
    expect(userObj).toBeA('object').toInclude({lastName: 'Smith'});
  });
});
