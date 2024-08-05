//7:-Add the method to the book object that uses the this keyword to return a string with the books title and year ,and log the result of caling this method.
let book_object = {
  title: "Java",
  author: "James Gosling",
  year: 1996,
  getThis: function () {
    return `${this.title}, ${this.year}`;
  },
};
// Call the this method and log the result
console.log(book_object.getThis());

//8:-Use a for ...in loop to iterate over the  properties of book object and log the each properties and its values.

for (let b in book_object) {
  console.log(b);
  console.log(book_object[b]);
}

// 9:- Use  Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book_object));
console.log(Object.values(book_object));
