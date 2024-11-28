function outer() {
  let name = "ajmeri";
  function display() {
    console.log(name);
  }
  display();
}

// outer();

function counters() {
  let counter = 0;
  function increament() {
    return counter++;
  }
  function getValue() {
    console.log(counter);
  }
  return { increament, getValue };
}

// const counter = counters();
// counter.increament();
// counter.increament();
// counter.getValue();

function UniqueID() {
  const id = Math.random() * 10;
  console.log(id);
}
UniqueID();

// //4:-

function greets() {
  let name = "ajmeri";
  function display() {
    console.log(`Welcome! ,${name}`);
  }
  return { display };
}
const val = greets();
val.display();

//5:

function createArray(size) {
  let func = [];
  for (let i = 0; i < size; i++) {
    func[i] = function () {
      console.log("My value:", i);
    };
  }
  for (var j = 0; j < size; j++) {
    func[j]();
  }
}
createArray(5);

//
// function module() {

//     add(item){
//     return push(item)
//     }
//     remove(){

//     }
//     listItem(){

//     }
// }
// list=[2,33,2,34.4,65,2]
