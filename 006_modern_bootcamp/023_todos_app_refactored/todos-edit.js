/* global getSavedTodos, saveTodos, removeTodo, moment, generateTodoEditTime */
const idToEdit = location.hash.substring(1);

let todos = getSavedTodos();
let todoToEdit = todos.find(todo => {
  return todo.id === idToEdit;
});

if (!todoToEdit) {
  location.assign('/index.html');
}

const form = document.querySelector('#edit-todo');
const removeButton = document.querySelector('#delete-todo');
const editTimeInfo = document.querySelector('#edit-time');
const titleEl = form.elements.title;
const bodyEl = form.elements.body;
titleEl.value = todoToEdit.title;
bodyEl.value = todoToEdit.body;
editTimeInfo.textContent = generateTodoEditTime(todoToEdit.updatedAt);

form.addEventListener('submit', ev => {
  ev.preventDefault();
  location.assign('/index.html');
});

titleEl.addEventListener('input', ev => {
  todoToEdit.title = ev.target.value;
  const timestamp = moment().valueOf();
  todoToEdit.updatedAt = timestamp;
  editTimeInfo.textContent = generateTodoEditTime(timestamp);
  saveTodos(todos);
});

bodyEl.addEventListener('input', ev => {
  todoToEdit.body = ev.target.value;
  const timestamp = moment().valueOf();
  todoToEdit.updatedAt = timestamp;
  editTimeInfo.textContent = generateTodoEditTime(timestamp);
  saveTodos(todos);
});

removeButton.addEventListener('click', () => {
  removeTodo(todoToEdit.id);
  saveTodos(todos);
  location.assign('/index.html');
});

//синхронизация данных из local storage на разных страницах
window.addEventListener('storage', ev => {
  if (ev.key === 'todos') {
    todos = JSON.parse(ev.newValue);
    todoToEdit = todos.find(todo => {
      return todo.id === idToEdit;
    });
    if (!todoToEdit) {
      location.assign('/index.html');
    }
    titleEl.value = todoToEdit.title;
    bodyEl.value = todoToEdit.body;
    editTimeInfo.textContent = generateTodoEditTime(todoToEdit.updatedAt);
  }
});
