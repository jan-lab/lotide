//FUNCTION IMPLEMENTATION

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    process.exit();
  }

  let result = 1;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result *= 1;
    }  else {
      result *= 0;
    }
    //console.log(`array1[i]: ${array1[i]} array2[i]: ${array2[i]}`)
    //console.log(array1[i] === array2[i])
    //console.log(result)
  }

  if (result === 1) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log(actual);
    //console.log(expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

//Question: The template literal does not print out [] or ''?
