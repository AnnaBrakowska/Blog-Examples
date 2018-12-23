const fill = document.querySelector(".drag-element");
const empties = document.querySelectorAll(".empty");

//Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//Drag functions

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  //   empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

//Drag Functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "drag-element";
}

function dragOver(e) {
  e.preventDefault();
}

// function dragEnter(e) {
//   e.preventDefault();
//   this.className += " hovered";
// }

function dragLeave(e) {
  e.preventDefault();
  console.log("leave", this);
  this.classList.remove("hovered");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
