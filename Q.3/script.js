'use strict';
// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
const sumNumbers = function (arr) {
  let sum_of_numbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum_of_numbers += arr[i];
    }
  }
  console.log(`Sum of numbers in the given array is ${sum_of_numbers}`);
};

sumNumbers([2, '11', 3, 'a2', false, 5, 7, 1]);
sumNumbers([2, 3, 0, 5, 7, 8, true, false]);
