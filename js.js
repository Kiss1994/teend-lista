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
const input = document.getElementById("new-task");
const button =document.getElementById("add-button");
const list = document.getElementById("task-list");
  button.addEventListener("click",function(){
    const szoveg = input.value.trim();
    if (szoveg !== "") {
    const ujElem = document.createElement("li");
    ujElem.textContent = szoveg;
    list.appendChild(ujElem);
    input.value = ""; // törli a mezőt hozzáadás után
  } else {
    alert("Írj be valamit a mezőbe!");
  }
  })