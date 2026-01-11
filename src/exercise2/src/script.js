"use strict";

function getNumbersIdBySum(arrayofNumbers, sum) {
  const result = [];
  for (let i = 0; i <= arrayofNumbers.length; i++) {
    for (let j = i + 1; j <= arrayofNumbers.length; j++) {
      if (arrayofNumbers[i] + arrayofNumbers[j] === sum) {
        result.push([i, j]);
      }
    }
  }
  return result.length > 0 ? result : null;
}

console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 6));
console.log(getNumbersIdBySum([1, 0, 5], 2));
console.log(getNumbersIdBySum([1, 0], 1));
console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 0));
