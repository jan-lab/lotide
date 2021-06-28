//FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return array.slice(Math.ceil(array.length / 2) - 1, Math.ceil(array.length / 2));
  } else if (array.length % 2 === 0) {
    return array.slice(Math.floor(array.length/2) - 1,Math.floor(array.length/2) + 1);
  }
};

module.exports = middle;