const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let countObject = {};
  for (let letter of sentence) {
    if (countObject[letter] !== undefined) {
      countObject[letter] = ++countObject[letter];
    } else {
      countObject[letter] = 1;
    }
  }
  return countObject;
};

const result = countLetters("LHL");

assertEqual(result["L"], 2);
assertEqual(result["H"], 1);


module.exports = countLetters;