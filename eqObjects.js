const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function (object1, object2) {
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

// tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false



module.exports = eqObjects;