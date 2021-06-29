//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ['Lighthouse','Labs']);
  });
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[1], 'Labs');
  });
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words); // no need to capture the return value since we are not checking it
  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []); //An array with only one element should yield an empty array for its tail
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); //An empty array should yield an empty array for its tail
  });
});
