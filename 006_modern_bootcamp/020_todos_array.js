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

const deleteTodo = (list, text) => {
  const index = list.findIndex(item => {
    return item.text.toLowerCase() === text.toLowerCase();
  });
  if (index !== -1) {
    list.splice(index, 1);
  }
};

const getThingsToDo = todos => {
  return todos.filter(todo => !todo.completed);
};

const sortTodosByText = todos => {
  return todos.sort((a, b) => {
    return a.text.toLowerCase() <= b.text.toLowerCase() ? -1 : 1;
  });
};

const sortTodosByComletion = todos => {
  return todos.sort((a, b) => {
    return a.completed - b.completed; //преобразование типов
  });
};

console.log(getThingsToDo(todos));

console.log(sortTodosByText(todos));

console.log(sortTodosByComletion(todos));

deleteTodo(todos, 'зевнуть');
console.log(todos);
