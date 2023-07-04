const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("should return 5", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return hello ", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
 

