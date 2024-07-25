// check num is positive , negative or zero.
let num = 5;
if (num < 0) {
  console.log("number is negetive");
} else if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("number is zero");
}
// check elegible for vote
let age = 25;
if (age >= 18) {
  console.log("Elegible for vote");
} else {
  console.log("not elegible for vote");
}

//display day using switch

let a = 5;
let b = 9;
let c = 4;
if (a > b && a > c) {
  console.log("num a is gretter than b&c");
} else if (b > a && b > c) {
  console.log("num b is gretter than a&c");
} else {
  console.log("num c is gretter than b&a");
}
//

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// grade using switch case.
let Total = 40;
switch (Total / 10) {
  case 10:
  case 9:
  case 8:
  case 7:
    console.log("A");
    break;
  case 6:
    console.log("B");
    break;
  case 5:
    console.log("C");
    break;
  case 4:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// even odd using ternary oprator.

let val = 5;
val % 2 == 0 ? console.log("num is even") : console.log("num is odd");

// check leap year.

let year = 2024;
if (year % 4 == 0 || year % 400 == 0 || year % 100 != 0) {
  console.log("year is leap year");
} else {
  console.log("year is not leap year");
}
