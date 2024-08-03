//1:- create an array of numbers from 1 to 5 and log array to the console.
let ar = [1, 2, 3, 4, 5];
console.log(ar);

//2:- Access the first and last elements of the array and log them to the console.

console.log(ar[0]);
console.log(ar[ar.length - 1]);

//3:-Use the push method to add a new number to the end of the array and log update array.
let arrs = [90, 80, 70, 60, 50];
arrs.push(40);
for (let i = 0; i < arrs.length; i++) {
  console.log(arrs[i]);
}

//4:-Use the pop method to remove a last element from the array and log update array.
let a = [22, 33, 44, 55];
a.pop();
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//5:- Use the shift method to remove a first element from the array and log update array.
let b = [12, 23, 34, 45, 56];
b.shift();
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}

//6:- Use the unshift method to add a first element from the array and log update array.
let c = [12, 23, 34, 45, 56];
c.unshift(100);
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

//7:- arrya display using for loop.
let arrays = [90, 80, 70, 60, 50];
for (let i = 0; i < arrays.length; i++) {
  console.log(arrays[i]);
}
//8:-by using  for each

arrays.forEach((element) => {
  console.log(element);
});

//9:-two dimentional array

let array = [
  [1, 2, 3, 4],
  [1, 4, 9, 16],
];
console.log(array);

//10:-display selected element
console.log(array[1][3]);

//11:- create an array of numbers use map function to double of num and log array to the console.
let arr = [11, 12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let newarr = arr.map((e) => e * 2);
console.log(newarr);

// 12:- filter method
function even(num) {
  if (num % 2 == 0) {
    return num;
  }
}

let newar = arr.filter(even);
console.log(newar);

// use reduce method to print the sum of arrays

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (a, c) {
  return a + c;
}, 0);
console.log(sum);
