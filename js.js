const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
const hat = document.getElementById("hat"); 
hat.addEventListener("click", function() {
  const box = document.getElementById("box");
  const ora = new Date().getHours(); // aktuális óra 0-23 között

  if (ora >= 6 && ora < 12) {
    box.style.backgroundColor = "red";       // délelőtt piros
  } else if (ora >= 12 && ora < 18) {
    box.style.backgroundColor = "blue";      // délután kék
  } else {
    box.style.backgroundColor = "gray";      // egyébként szürke
  }
});