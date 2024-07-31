// WAF to check if a number is even or odd and log the result to the console.
function check(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
let a = 5;
check(a);
//WAF to calculate the square of a number and return the result.
function square(num) {
  num = num ** 2;
  console.log(num);
}
square(a);

// WAF expression to find the maximum of two umbers and log the result to the console.

function max(num1, num2) {
  if (num1 > num2) {
    console.log("max num is :", num1);
  } else {
    console.log("max num is :", num2);
  }
}
let b = 9;
max(a, b);

// WAF expression to concatenate two  string and return the result.

function concatenate(s1, s2) {
  s1 = s1 + s2;
  console.log(s1);
}
let s1 = "ajm@eri";
let s2 = " gudiya";
concatenate(s1, s2);

//

const sum = (num1, num2) => {
  let num = num1 + num2;
  return num;
};
console.log(sum(a, b));

//
const specific_char = (str) => {
  const reg = /[^A-Za-z0-9]/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
};
console.log(specific_char(s1));
//

function product(a, b = 5) {
  a = a * b;
  console.log(a);
}
let c = 5;
let d = 4;
product(c);
product(c, d);

function greeting(name, age = 20) {
  console.log(`welcome  ${name}`, age);
}
greeting(s1);

//
function higherOrderFun(fun, number) {
  const List = [];
  for (let i = 0; i < number.length; i++) {
    List.push(fun(number[i]));
  }
  console.log(List);
}
let arr = [1, 4, 5, 6];
higherOrderFun(square, arr);
//
function higherOrderFun(fun1, fun2, number) {}
