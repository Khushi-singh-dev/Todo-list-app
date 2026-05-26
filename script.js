let taskInp = document.getElementById("Task");
let taskList = document.getElementById("taskList");
let addBtn = document.querySelector(".addTask");


addBtn.addEventListener("click",()=>{
    let task = taskInp.value;
    if(task === ""){
        alert("Please, Enter a task!");
        return;
    }

    taskInp.addEventListener("keydown",
        function(event){
            if(event.key === "Enter"){
                addBtn.click();
            }
        }
    );

    let li = document.createElement("li");
    let delBtn = document.createElement("button");

    li.textContent = task;
    delBtn.textContent = "Delete";
    delBtn.classList.add("addTask");
    delBtn.style.width = "140px";
    delBtn.style.height = "40px";
    delBtn.style.color = "white";
    delBtn.style.backgroundColor = "#0080ff";
    delBtn.style.border = "none";

    li.appendChild(delBtn);
    taskList.appendChild(li);

    delBtn.addEventListener("click",()=>{
        li.remove();
    });

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });

    taskInp.value = "";
});