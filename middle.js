// const assertArraysEqual = require('./assertArraysEqual')
// const eqArrays = require('./eqArrays')

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (actual, expected) {
//   let isSame = eqArrays(actual, expected);
//   if (isSame) {
//     console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
// };

// needs to make sure the length is minimum 3 so it has a head middle and tail
// return an empty array for less than 3 length
// the head and tail need to be equal to ensure the middle works for both odd and even number of elements
// even elements = 2 are middle
// odd elements = 1 is middle
const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  }
  let middlePosition = array.length / 2;
  middlePosition = Math.floor(middlePosition);
  if (array.length % 2 === 0) {
    newArray.push(array[middlePosition - 1]);
  }
  newArray.push(array[middlePosition]);
  return newArray;
};


// middle([1]); // => []
// middle([1, 2]); // => []
// middle([10, 20, 30]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


module.exports = middle;