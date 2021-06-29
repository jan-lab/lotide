//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* THIS ALSO WORKS
const findKeyByValue = function (obj, value) {
  
  let result = '';
  
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      result = key;
    }
  }

  if (result === '') {
    result = undefined;
  }
  
  return result;
};
*/

const findKeyByValue = function (obj, value) {
  
  if (!Object.values(obj).includes(value)) {
    return undefined;
  }

  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
};

/* THIS ALSO WORKS
const findKeyByValue = function (obj, value) {

  let result = '';
  
  if (!Object.values(obj).includes(value)) {
    result = undefined;
  } else {
    for (let key of Object.keys(obj)) {
      if (obj[key] === value) {
        result = key;
      }
    }
  }
  return result;
  
};
*/

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;