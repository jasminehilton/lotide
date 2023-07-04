const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let isSame = eqArrays(actual, expected);
  if (isSame) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};
 


module.exports = assertArraysEqual;