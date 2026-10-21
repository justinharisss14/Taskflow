const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");
const emptyMessage = document.getElementById("empty-message");
const filterButtons = document.querySelectorAll("[data-filter]");

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem("taskflow-tasks"));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  } catch (error) {
    console.warn("Could not save tasks:", error);
  }
}

let tasks = loadTasks();
let currentFilter = "all";

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({
    id: Date.now(),
    name: taskName,
    completed: false
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
});

function renderTasks() {
  taskList.innerHTML = "";

  const visibleTasks = tasks.filter(function (task) {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  visibleTasks.forEach(function (task) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    if (task.completed) {
      listItem.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", "Complete task");

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const taskText = document.createElement("span");
    taskText.textContent = task.name;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (item) {
        return item.id !== task.id;
      });

      saveTasks();
      renderTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });

  totalCount.textContent = tasks.length;

  completedCount.textContent = tasks.filter(function (task) {
    return task.completed;
  }).length;

  emptyMessage.textContent =
    tasks.length === 0
      ? "No tasks yet. Add your first task!"
      : "No " + currentFilter + " tasks to show.";

  emptyMessage.style.display =
    visibleTasks.length === 0 ? "block" : "none";

  filterButtons.forEach(function (button) {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

renderTasks();