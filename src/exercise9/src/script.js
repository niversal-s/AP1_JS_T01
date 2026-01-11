"use strict";

function binarySearch(arrayOfNumbers, num) {
  let left = 0;
  let right = arrayOfNumbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arrayOfNumbers[mid] === num) {
      return mid;
    } else if (arrayOfNumbers[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([2, 4, 6, 8, 10], 8));
console.log(binarySearch([-10, -5, 0, 5, 10], 0));
