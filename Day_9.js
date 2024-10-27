const data = document.getElementById("head");
data.innerHTML = "This is updated element of head";
const bgColor = document.querySelector(".one");
bgColor.style.backgroundColor = "red";
const node = document.createElement("div");
node.textContent = "append div element";
node.className = "append";
document.body.appendChild(node);
const list = document.getElementById("list");
const element_li = document.createElement("li");
element_li.textContent = "append list";
list.appendChild(element_li);
//
const remove_ele = document.querySelector(".append");
remove_ele.remove();
//
list.lastElementChild.remove();

//
const img = document.getElementById("img");
img.src = "img1.jpg";
//
img.className = "imgClass";
img.classList.remove("imgClass");
console.log(img);

//
const click = document.createElement("div");
click.textContent = "clicked button element";
click.className = "append";

document.getElementById("button").onclick = function () {
  document.body.appendChild(click);
};
