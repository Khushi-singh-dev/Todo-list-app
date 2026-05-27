let taskInp = document.getElementById("Task");
let taskList = document.getElementById("taskList");
let addBtn = document.querySelector(".addTask");
let editTask = null;

addBtn.addEventListener("click", () => {
  let task = taskInp.value;
  if (task === "") {
    alert("Please, Enter a task!");
    return;
  }

  taskInp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });

  if (editTask) {
    editTask.querySelector("span").innerText = task;
    editTask = null;
    addBtn.innerText = "AddTask";
    taskInp.value = "";
    return;
  }

  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  let editBtn = document.createElement("button");

  let span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);
  delBtn.textContent = "❌";
  editBtn.textContent = "✏️";
  delBtn.classList.add("addTask");
  editBtn.classList.add("addTask");

  li.appendChild(delBtn);
  li.appendChild(editBtn);
  taskList.appendChild(li);

  delBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
  });

  editBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    taskInp.value = li.querySelector("span").innerText;
    addBtn.innerText = "Update";
    editTask = li;
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  taskInp.value = "";
});

let themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");

    themeToggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");

    themeToggle.innerText = "🌙";
  }
});

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  themeToggle.innerText = "☀️";
}
