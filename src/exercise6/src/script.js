"use strict";

function alphabetMap(rawString, mapCount) {
  const shifr = { a: "def", b: "efc", c: "abe", d: "cba", e: "fba", f: "dcb" };

  let result = rawString;
  for (let i = 0; i < mapCount; i++) {
    let newResult = "";
    for (let char of result) {
      newResult += shifr[char];
    }
    result = newResult;
  }
  return result;
}

console.log(alphabetMap("abcdef", 1));
console.log(alphabetMap("aa", 2));
console.log(alphabetMap("bad", 1));
