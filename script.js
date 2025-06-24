


const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", function addTask () {
    

    //create task

    if (todoInput.value.trim() === "")return;

    const listItem = document.createElement("li");
    const newListItem = document.createTextNode(todoInput.value);
    

    listItem.appendChild(newListItem);
    todoInput.value = "";
    
    const currentLi = document.getElementById("todoListItems");
    currentLi.appendChild(listItem);

    


    //Delete Button
   const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.addEventListener("click", () => listItem.remove());
  listItem.appendChild(deleteButton);


    //complete button

    const completeButton = document.createElement("button");
  completeButton.textContent = "🔴";
  listItem.appendChild(completeButton);

  completeButton.addEventListener("click", () => {
    listItem.classList.add("completed");
    completeButton.textContent = "🟢";
    completeButton.disabled = true;
    completeButton.style.cursor = "default";

    const completedList = document.getElementById("completedListItems");
    completedList.appendChild(listItem);
  });

 

 
});

