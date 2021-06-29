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


const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        //console.log(`array[i][j] is ${array[i][j]}`)
        newArray.push(array[i][j])
        //console.log(newArray)

      }
    } else {
      //console.log(`array[i] is ${array[i]}`)
      newArray.push(array[i]);
      //console.log(newArray)
    }
  }
  //console.log(newArray)
  return newArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => true

module.exports = flatten;