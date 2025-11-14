const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const pendingCount = document.getElementById("pendingCount");
const clearAllBtn = document.getElementById("clearAll");

function updatePending() {
  let count = document.querySelectorAll(".task-item").length;
  pendingCount.textContent = `You have ${count} pending tasks`;
}

function addTask() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">🗑</button>
  `;

  taskList.appendChild(li);
  input.value = "";
  updatePending();

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    updatePending();
  });
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  updatePending();
});
