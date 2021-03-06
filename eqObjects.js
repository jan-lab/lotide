//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



//// Step 2: Primitives As Values ////

// Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!

// const eqObjects = function(object1, object2) {
//   let result = '';
//   if (Object.keys(object1).length === Object.keys(object2).length) {
//     for (let key of Object.keys(object1)) {
//       if (object1[key] === object2[key]) {
//         result = true;
//       }
//     }
//   }
//   if (result === '') {
//     result = false;
//   }
//   return result;
// };


//The above worked but below is more optimized.
/*
const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      //for (let key2 of Object.keys(object2)) {
      if (object1[key] !== object2[key]) {
        return false;             // as soon as there is not a match, return false
      }
    }
    return true;                  // control flow will only get to the end of the loop if all the keys matched. Return true at the end (after the loop)
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);
*/

//// Step 3: Arrays As Values ////

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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd,dc), true);
assertEqual(eqObjects(cd,cd2), false);