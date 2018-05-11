function getSavedTodos() {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  }
  return [];
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function generateTodoDOM(todo) {
  const todoEl = document.createElement('p');
  todoEl.textContent = todo.text;
  todoEl.classList.add('todo');
  return todoEl;
}

function generateSummaryDOM(todos) {
  const summaryEl = document.createElement('h2');
  summaryEl.textContent = `You have ${todos.length} todos left`;
  return summaryEl;
}

function clearNotes(todosContainer) {
  while (todosContainer.firstChild) {
    todosContainer.firstChild.remove();
  }
}

function renderTodos(todos, filters) {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const completedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && completedMatch;
  });

  const incompletedTodos = filteredTodos.filter(todo => !todo.completed);

  const todosContainer = document.querySelector('#todos');
  clearNotes(todosContainer);

  const summaryEl = generateSummaryDOM(incompletedTodos);
  todosContainer.appendChild(summaryEl);

  filteredTodos.forEach(todo => {
    const todoEl = generateTodoDOM(todo);
    todosContainer.appendChild(todoEl);
  });
}
