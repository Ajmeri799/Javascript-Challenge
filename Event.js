const para = document.getElementById("para");
const button = document.getElementById("button");
button.addEventListener("click", function () {
  para.textContent = "hello on click";
});

//
const img = document.getElementById("img");
const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
  console.log(img.style.display);
});
//c
const div = document.getElementById("div");
div.addEventListener("mouseover", function () {
  div.style.backgroundColor = "red";
});
div.addEventListener("mouseout", function () {
  div.style.backgroundColor = "black";
});

//5:-
const input = document.getElementById("input");
const log = document.getElementById("log");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
});
input.addEventListener("keyup", function (e) {
  log.textContent += `${e.key}`;
});
