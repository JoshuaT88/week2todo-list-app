


const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", function addTask () {
    

    //add task to what to do section

    if (todoInput.value.trim() === "")return;

    const listItem = document.createElement("li");
    const newListItem = document.createTextNode(todoInput.value);
    

    listItem.appendChild(newListItem);
    todoInput.value = "";
    
    const currentLi = document.getElementById("todoListItems");
    currentLi.appendChild(listItem);

    


    //trash can button
    const deleteButton = document.createElement("button");
    const deleteListItem = document.createTextNode("🗑️");

    listItem.appendChild(deleteButton);

    deleteButton.appendChild(deleteListItem);
    deleteButton.addEventListener("click", function deleteBtn() {
        listItem.remove();
    });


    //complete button

    const completeButton = document.createElement("button");
    completeButton.textContent = "🔴";
    

    const completedListItem = document.getElementById("completedListItems");
    listItem.appendChild(completeButton);

    completeButton.addEventListener("click", function completeBtn() {
        listItem.classList.add("completed")
   

    
    
    completeButton.textContent = "🟢";

    completedListItem.appendChild(listItem);
    
    
completeButton.disabled = true;
    completeButton.style.cursor = "default";
   
 });

 

 
});

