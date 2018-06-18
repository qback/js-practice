'use strict';
/* global todos, filters, moment */

function getSavedTodos() {
  const todosJSON = localStorage.getItem('todos');
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (error) {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(id) {
  const todoIndex = todos.findIndex(todo => {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
}

function toggleTodo(id) {
  const todoToChange = todos.find(todo => {
    return todo.id === id;
  });
  if (todoToChange) {
    todoToChange.completed = !todoToChange.completed;
  }
}

function generateTodoDOM(todo) {
  const todoEl = document.createElement('p');
  const a = document.createElement('a');
  const input = document.createElement('input');
  const button = document.createElement('button');

  input.type = 'checkbox';
  input.checked = todo.completed;
  input.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(input);

  a.textContent = todo.title;
  a.href = `edit.html#${todo.id}`;
  todoEl.appendChild(a);

  button.textContent = 'x';
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(button);

  todoEl.classList.add('todo');
  if (todo.completed) {
    todoEl.classList.add('todo--completed');
  }

  return todoEl;
}

function generateSummaryDOM(todos) {
  const summaryEl = document.createElement('h2');
  summaryEl.textContent = `У тебя осталось несделанных задач - ${todos.length}`;
  return summaryEl;
}

function generateTodoEditTime(timestamp) {
  return `todo was updated ${moment(timestamp).fromNow()}`;
}

function clearNotes(todosContainer) {
  while (todosContainer.firstChild) {
    todosContainer.firstChild.remove();
  }
}

function sortTodos(todos, sortBy) {
  if (sortBy === 'created') {
    return todos.sort((a, b) => (a.createdAt >= b.createdAt ? -1 : 1));
  } else if (sortBy === 'updated') {
    return todos.sort((a, b) => (a.updatedAt >= b.updatedAt ? -1 : 1));
  } else if (sortBy === 'alphabet') {
    return todos.sort((a, b) => (a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1));
  }
}

function renderTodos(todos, filters) {
  todos = sortTodos(todos, filters.sortBy);
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
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
