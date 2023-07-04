// dont really need this require anymore
// const assertEqual = require('./assertEqual');


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
//   } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
// };


const tail = function(arr) {
  return arr.slice(1);
};
 
 

module.exports = tail;



// splice(start, deleteCount)

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log("result ", result); // ["Lighthouse", "Labs"]

// const result1 = tail(["Hello"]);
// console.log("result1", result1); // should return empty array

// const result2 = tail([]);
// console.log("result2", result2); // should return empty array

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let answer = tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log("answer", answer);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
