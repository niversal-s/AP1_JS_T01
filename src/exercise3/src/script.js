"use strict";

function getNOD(first, second) {
  if (first === 0 && second === 0) {
    return 0;
  }
  while (second !== 0) {
    let tmp = second;
    second = first % second;
    first = tmp;
  }
  return first;
}

console.log(getNOD(3, 6));
console.log(getNOD(0, 2));
console.log(getNOD(5, 5));
console.log(getNOD(1, 3));
console.log(getNOD(0, 0));
