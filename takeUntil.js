//FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log(actual);
    //console.log(expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const takeUntil = function(array, callback) {
  const output = [];
  
  for (const item of array) {
    //console.log("start of for loop:",callback(item))
    if (callback(item)) {
      //console.log(output)
      return output;
    }
    output.push(item)
  }
  //console.log(output)
  return output;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])

module.exports = takeUntil;