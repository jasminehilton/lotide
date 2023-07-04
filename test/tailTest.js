// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail   = require('../tail');
 
describe("#tail", () => {
  it("ensure we get back two elements", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.strictEqual(result.length, 2);
  });

  it("ensure first element is Lighthouse", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.strictEqual(result[0], "Lighthouse"); 
  });
  it("ensure second element is Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.strictEqual(result[1], "Labs"); 
  });
});



// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"