//The following is a lot more optimized.

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

module.exports = eqArrays;


// //The following is less optimized
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     process.exit();
//   }

//   let result = 1;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       result *= 1;
//     }  else {
//       result *= 0;
//     }
//   }

//   if (result === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };
