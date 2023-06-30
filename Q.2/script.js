'use strict';

// Write a JavaScript program to find the leap years in a given range of years.

// const findLeapYear = function (years) {
//   const leapYear = years.filter(year => year % 4 === 0);
//   for (let i of leapYear) {
//     console.log(`Year ${i} is leap year`);
//   }
// };

// findLeapYear([2000, 2001, 2004, 2007, 2020, 2024]);

const findLeapYear = function (startYear, endYear) {
  let year_range = [];
  for (let i = startYear; i <= endYear; i++) {
    year_range.push(i);
  }
  let leapYears = [];
  year_range.forEach(year => {
    if (leapYear(year)) {
      leapYears.push(year);
    }
  });
  return leapYears;
};
const leapYear = function (year) {
  if (year % 4 === 0) {
    return year;
  } else {
    return false;
  }
};
console.log(findLeapYear(2000, 2027));
