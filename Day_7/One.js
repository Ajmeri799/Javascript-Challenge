//1:- Create an Object representing book with properties like title , author and year , and log the object to the console.
let book_object = {
  title: "Java",
  author: "James Gosling",
  year: 1996,
};
console.log(book_object);
//2:- Access and log the title and authour properties of book object.
console.log(book_object.title);
console.log(book_object.author);
//3:- Add a method to the book object that return string with book title and auther , and log the result of calling this method.
function book(object) {
  return `${object.title},${object.author} `;
}
console.log(book(book_object));

//4:-Add a method to the book object that takes a parameter (year) and update the books years property ,then log the update obect.

function updte(date) {
  book_object.year = date;
}
let newyear = 1995;
updte(newyear);
console.log(book_object);

//5:-Create a nested object represent a library with properties like name and books (an array of book object) ,and log the library object to the console.

let library = {
  name: "College Library",

  book: [
    {
      title: "java",
      year: 1995,
    },
    {
      title: "python",
      year: 2003,
    },
    {
      title: "OS",
      year: 1900,
    },
  ],
};
console.log(library);

//6:-Access and log the name of  the library and titles of all books in the library.

console.log(library.name);
library.book.forEach((bt) => {
  console.log(bt.title);
});
