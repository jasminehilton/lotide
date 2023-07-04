// const assertArraysEqual = require('../assertArraysEqual')
// const middle = require('../middle')
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("should return an empty array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return an empty array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("should return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});



 