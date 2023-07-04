const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let isSame = eqArrays(actual, expected);
  if (isSame) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function(sentence) {
  let countObject = {};
  for (let i = 0; i < sentence.length; i++) {
    if (countObject[sentence[i]]) {
      countObject[sentence[i]].push(i);
    } else {
      countObject[sentence[i]] = [i];
    }
  }
  return countObject;
};

const result = letterPositions("Hello");

assertArraysEqual(result["H"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);



module.exports = letterPositions;