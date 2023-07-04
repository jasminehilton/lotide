const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item);
  }
  return results;
};


const assertArraysEqual = function(actual, expected) {
  let isSame = eqArrays(actual, expected);
  if (isSame) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};
 
const eqArrays = function(arr1, arr2) {
  console.log(arr1, arr2);
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

assertArraysEqual(map(words), words);



module.exports = map;