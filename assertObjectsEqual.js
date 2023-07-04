const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  for (let key of keys) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
 
const assertObjectsEqual = function(actual, expected) {
  let isSame = eqObjects(actual, expected);
  if (isSame) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

module.exports = assertObjectsEqual;
