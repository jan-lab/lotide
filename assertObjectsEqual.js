//FUNCTION IMPLEMENTATION

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;             // as soon as there is not a match, return false
      }
    }
  }
  return true;                  // control flow will only get to the end of the loop if all the keys matched. Return true at the end (after the loop)
};


// We quickly realize while looking at the assertion messages that they print out objects as [object Object] which is not very descriptive and will not help with our debugging efforts.
// ✅✅✅ Assertion Passed: [object Object] === [object Object]
// 🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
// As a workaround to this problem, we can modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it.


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    //console.log(actual);
    //console.log(expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd,dc); // true
assertObjectsEqual(cd,cd2); // false