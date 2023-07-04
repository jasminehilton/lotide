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
    // console.log(sentence[i]);
    if (countObject[sentence[i]]) { // undefined is a false so it will skip to the else statement
      // the letter exists so push the index
      countObject[sentence[i]].push(i);
    } else {
      // the letter doesn't exist so add it
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