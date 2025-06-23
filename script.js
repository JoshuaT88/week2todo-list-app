


const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", function addTask () {
    

    const newLi = document.createElement("li");
    const newContent = document.createTextNode(todoInput.value);

    newLi.appendChild(newContent);

    const currentLi = document.getElementById("todoListItems");
    currentLi.appendChild(newLi);

});

