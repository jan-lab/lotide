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


const letterPositions = function(string) {
  //string = removeSpace(inputString);
  
  const results = {};
  
  for (let i = 0; i < string.length; i++) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (string[i] !== ' ') {
      if (Array.isArray(results[string[i]])) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [];
        results[string[i]].push(i);
      }
    }
  }
  return results;
};


//console.log(letterPositions("lighthouse in the house"));


//assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);

//The template literal does not print out [] or ''?
