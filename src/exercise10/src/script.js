"use strict";

function getMaxZeroCount(raw) {
  let countMax = 0;
  let countCurrent = 0;

  for (let i = 0; i < raw.length; i++) {
    if (raw[i] === "0") {
      countCurrent++;
      if (countCurrent > countMax) {
        countMax = countCurrent;
      }
    } else {
      countCurrent = 0;
    }
  }
  return countMax;
}

console.log(getMaxZeroCount("1010010001"));
console.log(getMaxZeroCount("100100100"));
console.log(getMaxZeroCount("11111"));
