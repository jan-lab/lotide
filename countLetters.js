//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.log('actual: ',actual)
  //console.log('expected: ',expected)
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Do not count spaces
//You can use for...of loops with strings.

const removeSpace = function(str) {
  str = str.split(" ").join("");
  return str;
};


const countLetters = function(inputString) {
  inputString = removeSpace(inputString);
  
  const results = {};
  
  for (const item of inputString) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

  return results;
};


console.log(countLetters("lighthouse in the house"));

// TEST CODE

// The following does not work since objects cannot be compared with triple equals.
// assertEqual(countLetters("lighthouse in the house"), {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// });


assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").t, 2);
assertEqual(countLetters("lighthouse in the house").o, 2);
assertEqual(countLetters("lighthouse in the house").u, 2);
assertEqual(countLetters("lighthouse in the house").s, 2);
assertEqual(countLetters("lighthouse in the house").e, 3);
assertEqual(countLetters("lighthouse in the house").n, 1);