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


// TEST CODE
assertArraysEqual(middle([1]),[]);// => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]


//Question: The template literal does not print out [] or ''?
