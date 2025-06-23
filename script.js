


const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", function addTask () {
    

    const listItem = document.createElement("li");
    const newListItem = document.createTextNode(todoInput.value);
    

    listItem.appendChild(newListItem);

    const currentLi = document.getElementById("todoListItems");
    currentLi.appendChild(listItem);



    const deleteButton = document.createElement("button");
    const deleteListItem = document.createTextNode("🗑️");

    listItem.appendChild(deleteButton);

    deleteButton.appendChild(deleteListItem);
    deleteButton.addEventListener("click", function deleteBtn() {
        listItem.remove();
    });



    const completeButton = document.createElement("button");
    const completeListItem = document.createTextNode("🔴");

    listItem.appendChild(completeButton);

    const completedListItem = document.getElementById("completedListItems");
    completedListItem.appendChild(completeListItem);

    completeButton.addEventListener("click", function completeBtn() {
        listItem.classList.add();
    });

});

