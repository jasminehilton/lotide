// dont really need this require anymore
// const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
// };

const head = function(arr) {
  return arr[0];
};



module.exports = head;
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
