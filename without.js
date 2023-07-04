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

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let exists = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        exists = true;
      }
    }
    if (exists === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);



module.exports = without;