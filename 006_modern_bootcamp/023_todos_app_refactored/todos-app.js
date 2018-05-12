'use strict';
/*global getSavedTodos*/
/*global saveTodos*/
/*global renderTodos*/
/*global uuidv4*/
/*global moment*/

let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false,
  sortBy: 'created'
};

renderTodos(todos, filters);

document.querySelector('#filter-todo').addEventListener('input', ev => {
  filters.searchText = ev.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#create-note').addEventListener('submit', ev => {
  ev.preventDefault();

  const id = uuidv4();
  const timestamp = moment().valueOf();

  todos.push({
    id: id,
    completed: false,
    title: 'Новая задача',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  });

  saveTodos(todos);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#hide-completed').addEventListener('change', () => {
  filters.hideCompleted = !filters.hideCompleted;
  renderTodos(todos, filters);
});

document.querySelector('#sort-by').addEventListener('change', ev => {
  filters.sortBy = ev.target.value;
  renderTodos(todos, filters);
});

window.addEventListener('storage', ev => {
  if (ev.key === 'todos') {
    todos = JSON.parse(ev.newValue);
    renderTodos(todos, filters);
  }
});
