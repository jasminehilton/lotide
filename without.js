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
    // we don't know if source is inside itemsToRemove
    let exists = false;
    // keep source at one position but check all elements in the second array
    for (let j = 0; j < itemsToRemove.length; j++) {
      // if the item matches then it exists, and should not be added in the newArray
      if (itemsToRemove[j] === source[i]) {
        exists = true;
      }
    }
    // if exists is false - that means that it was not found in the itemsToRemove array
    if (exists === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]



module.exports = without;