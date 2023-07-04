const assert = require('chai').assert;
const tail   = require('../tail');
 
describe("#tail", () => {
  it("ensure we get back two elements", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
 
  it("ensure first element is Lighthouse", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("ensure second element is Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
});
