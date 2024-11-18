const promises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("that is promise resolve msg.");
    resolve();
  }, 2000);
});
promises.then(function () {
  console.log("async");
});
// //2:-
const promisTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve("that is promise resolve msg.");
    } else {
      reject("ERROR");
    }
  }, 2000);
})
//   .then(function () {
//     console.log("async");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//3:-
// function setData(data, delay) {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve(data);
//     }, delay);
//   });
// }
// setData("data one", 1000)
//   .then((result) => {
//     console.log(result);
//     return setData("data two", 2000);
//   })

//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//4:-

// const asyncPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Ajmeri", Rollno: 33, age: 21 });
//   }, 2000);
// });
// async function handlelPromise() {
//   const response = await asyncPromise;
//   console.log(response);
// }
// handlelPromise();

//5:-

//  const asyncPromises = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Ajmeri", Rollno: 33, age: 21 });
//     } else {
//       reject("Error went wrong");
//     }
//   }, 2000);
// });
// async function handlelPromise() {
//   try {
//     const response = await asyncPromises;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handlelPromise();

//6:-
fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    // console.log(data);
  });

//7:-

// async function asyncfetchAPI() {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//   const User = await responce.json();
//   console.log(User);
// }
// asyncfetchAPI();

//8:-

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

//9:-
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
