const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 😁 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(` 😞 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let countObject = {}
  for(let name of allItems) {
    // console.log(name)
    // console.log(itemsToCount[name])
    if(itemsToCount[name] === true) {
      if(countObject[name] !== undefined) {
        countObject[name] = ++countObject[name]
      } else {
        countObject[name] = 1
      }
    }
  }

  return countObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;
