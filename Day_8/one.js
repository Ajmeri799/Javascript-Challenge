//1:-
let name = "Ajmeri";
let age = 23;
let str = `hello ,my name :  ${name}  and my age ${age}`;
console.log(str);

//2:-
let st2 = `hello ,chai our code.
welcome,chai our code.   `;
console.log(st2);
//

let arrays = [10, 20, 30, 40, 50];
let [first, second] = arrays;
console.log(first);
console.log(second);

const [...rest] = arrays;
console.log(rest);
const last = rest.pop();
const [lasts] = arrays.slice(-2);
const allLast = arrays.slice(-2);
const reverce = arrays.reverse();
const [lastRev] = arrays.reverse();
//
let obj = {
  title: "java script",
  author: "Brendan Eich",
  year: 1995,
};
let { title, author } = obj;
console.log(title);
console.log(author);
//
const spread = [2, 6, 8, ...arrays];
console.log(spread);
//
function restOpr(...array) {
  let sum = 0;
  for (let arg of array) {
    sum += arg;
  }
  return sum;
}
console.log(restOpr(...arrays));

//

let defPra = (val1, val2 = 1) => {
  return val1 * val2;
};
console.log(defPra(5, 9));
//

function createObj(title, auth, year) {
  return {
    title,
    auth,
    sayYear() {
      return year;
    },
  };
}
const result = createObj("android", "Andy Robin", 2005);

console.log(result.sayYear());
//9:-

const key1 = "language";
const key2 = "isStudent";

const objs = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true,
};

console.log(objs);
