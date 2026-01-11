"use strict";

function getSimpleNumbers(touple) {
  const [start, end] = touple;
  if (end < 2 || start > end) return [];

  const sito = new Array(end + 1).fill(true);
  sito[0] = sito[1] = false;

  for (let i = 2; i * i <= end; i++) {
    if (sito[i]) {
      for (let j = i * i; j <= end; j += i) {
        sito[j] = false;
      }
    }
  }

  const result = [];
  const newStart = Math.max(start, 2);
  for (let i = newStart; i <= end; i++) {
    if (sito[i]) {
      result.push(i);
    }
  }
  return result;
}

console.log(getSimpleNumbers([2, 10]));
console.log(getSimpleNumbers([2, 2]));
