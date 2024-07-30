//1:- write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}
//2:- write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  //   console.log("5*", i, "=", 5 * i);
}

// 3:- write a program to caculate the sum of numbers from 1 to 10 using a while loop.

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
// console.log(sum);

//4:- write a program to print  number from 10 to 1 using a while loop.

let x = 10;
while (x > 0) {
  //   console.log(x);
  x--;
}

//5:- write a program to print numbers from 1 to 5 using a  do...while loop

let y = 1;
do {
  //   console.log(y);
  y++;
} while (y <= 5);

//6:- write a program to calculate the factorial of numbers using do while loop
let num = 10;
let z = 1;
fact = 1;
do {
  fact *= z;
  z++;
} while (z <= num);
console.log(fact);

// 7:-write a program to print a pattern using for loop.

for (let a = 1; a <= 5; a++) {
  let patt = "";
  for (let b = 1; b <= a; b++) {
    patt += "* ";
  }
  console.log(patt);
}
//8:-write a program to print numbers from 1 to 10,but skip the number 5 using  continue statement.

for (let s = 1; s <= 10; s++) {
  if (s == 5) continue;
  //   console.log(s);
}

//9:-write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using  break statement.

for (let v = 1; v <= 10; v++) {
  if (v == 7) break;
  console.log(v);
}
