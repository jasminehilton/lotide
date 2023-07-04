const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};



const findKeyByValue = function(object, value) {
  for ( show in object) {
    if (bestTVShowsByGenre[show] === value) {
      return show
    }
  }
  return undefined
}


// takes an object and a value
// scans the object and returns the first key that contains/equals the value
// if no key is found that equals the value, return undefined

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");



module.exports = findKeyByValue;