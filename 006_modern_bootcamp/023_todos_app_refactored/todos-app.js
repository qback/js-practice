/*global getSavedTodos*/
/*global saveTodos*/
/*global renderTodos*/

let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector('#filter-todo').addEventListener('input', ev => {
  filters.searchText = ev.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#create-note').addEventListener('submit', ev => {
  ev.preventDefault();

  const inputValue = ev.target.elements.addNote.value;
  if (inputValue.length === 0) return;

  todos.push({
    text: inputValue,
    completed: false
  });
  saveTodos(todos);

  ev.target.elements.addNote.value = '';
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', () => {
  filters.hideCompleted = !filters.hideCompleted;
  renderTodos(todos, filters);
});

document.querySelector('#sort-by').addEventListener('change', ev => {
  console.log(ev.target.value);
});
