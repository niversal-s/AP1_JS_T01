"use strict";

function sma(arrayOfNumbers, period) {
  const result = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const start = Math.max(0, i - period + 1);
    const size = i - start + 1;
    let sum = 0;
    for (let j = start; j <= i; j++) {
      sum += arrayOfNumbers[j];
    }
    result.push(parseFloat((sum / period).toFixed(3)));
  }
  return result;
}

console.log(sma([1, 2, 3], 3)); // [0.333, 1, 2]
console.log(sma([1, 2, 3], 2)); // [0.5, 1.5, 2.5]
console.log(sma([1, 2, 3], 1)); // [1, 2, 3]
