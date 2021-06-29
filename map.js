//FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log(actual);
    //console.log(expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const map = function(array, callback) {
//   console.log('array: ', array);
//   console.log('callback: ', callback);
//   const results = [];
//   return results;
// };

  
// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// };

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']); // => true
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]); // => true
assertArraysEqual(map(words, word => word.split("").reverse().join("")), ['dnuorg','lortnoc','ot','rojam','mot']); // => true

module.exports = map;
