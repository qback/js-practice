const todos = [
  {
    text: 'Умыться',
    completed: true
  },
  {
    text: 'Побриться',
    completed: false
  },
  {
    text: 'Одеться',
    completed: true
  },
  {
    text: 'Позавтракать',
    completed: false
  }
];

const filters = {
  searchText: '',
  hideCompleted: false
};

function renderTodos(todos, filters) {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const completedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && completedMatch;
  });

  const incompletedTodos = filteredTodos.filter(todo => !todo.completed);

  const notes = document.querySelector('#notes');
  while (notes.firstChild) {
    notes.firstChild.remove();
  }

  const info = document.createElement('h2');
  info.textContent = `You have ${incompletedTodos.length} todos left`;
  notes.appendChild(info);

  filteredTodos.forEach(todo => {
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    todoEl.classList.add('todo');
    notes.appendChild(todoEl);
  });
}

renderTodos(todos, filters);

document.querySelector('#filter-note').addEventListener('input', ev => {
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
