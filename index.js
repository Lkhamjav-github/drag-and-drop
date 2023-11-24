const item = document.querySelector(".item");

const box2 = document.querySelector("#box-2");
const box1 = document.querySelector("#box-1");

const dragStart = (e) => {
  console.log("dragging", e.target.id);
  e.dataTransfer.setData('text/plain', e.target.id);
}

const dragOver = (e) => {
  e.preventDefault();
  console.log("dragged over");
}

const dropItem = (e) => {
  e.preventDefault();
  const dropId = e.dataTransfer.getData('text/plain');
  console.log("dropId", dropId);
  const draggable = document.getElementById(dropId);
  e.target.appendChild(draggable)
}

item.addEventListener("dragstart", dragStart);
box2.addEventListener("dragover", dragOver);
box2.addEventListener("drop", dropItem);
// item.addEventListener("dragover", dragOver);
// box1.addEventListener("drop", dropItem);
// box1.addEventListener("dragover", dragOver);