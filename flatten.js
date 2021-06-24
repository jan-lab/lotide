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

//Question: The template literal does not print out [] or ''?

//https://gist.github.com/jan-lab/b8e2bd706c9f655f17b5d2d8173e9d69