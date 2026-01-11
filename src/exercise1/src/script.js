"use strict";

function range(start, end) {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

console.log(range(0, 5));
console.log(range(3, 3));
console.log(range(8, 0));
console.log(range(0, 0));
