const form = document.querySelector('#task-form');
const taskInput = form.querySelector('#task');
const taskList = document.querySelector('#task-list');
const removeAllBtn = document.querySelector('#clear');
const filterInput = document.querySelector('#filter');

loadListeners();

function loadListeners() {
  document.addEventListener('DOMContentLoaded', getItemsFromLocalStorage);
  form.addEventListener('submit', addItem);
  taskList.addEventListener('click', removeItem);
  removeAllBtn.addEventListener('click', removeAllItems);
  filterInput.addEventListener('input', filterItems);
}

function getItemsFromLocalStorage() {
  const items = extractFromLocalStorage('items');
  items.forEach(element => {
    const newItem = createListItem(element);
    taskList.appendChild(newItem);
  });
}

function addItemToLocalStorage(value) {
  const items = extractFromLocalStorage('items');
  items.push(value);
  writeToLocalStorage('items', items);
}

function extractFromLocalStorage(key) {
  const itemsFromLocalStorage = localStorage.getItem(key);
  return itemsFromLocalStorage === null ? [] : JSON.parse(itemsFromLocalStorage);
}

function writeToLocalStorage(key, payout) {
  localStorage.setItem(key, JSON.stringify(payout));
}

function addItem(ev) {
  ev.preventDefault();
  const taskInputValue = taskInput.value;
  if (taskInputValue === '') {
    alert('Добавь текст задачи');
    return;
  }
  const newItem = createListItem(taskInputValue);
  taskList.appendChild(newItem);
  addItemToLocalStorage(taskInputValue);
  taskInput.value = '';
}

function createListItem(value) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = value;
  const removeIcon = document.createElement('a');
  removeIcon.className = 'delete-item secondary-content';
  removeIcon.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(removeIcon);
  return li;
}

function removeItem(ev) {
  const removeLink = ev.target.closest('.delete-item');
  if (removeLink) {
    const itemToRemove = removeLink.closest('.collection-item');
    if (confirm('Удалить задачу')) {
      taskList.removeChild(itemToRemove);
      const items = extractFromLocalStorage('items');
      const removeText = itemToRemove.firstChild.textContent;
      const filteredItems = items.filter(item => {
        return item !== removeText;
      });
      writeToLocalStorage('items', filteredItems);
    }
  }
}

function removeAllItems() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem('items');
}

function filterItems(ev) {
  const text = ev.target.value.toLowerCase();
  const items = Array.from(taskList.querySelectorAll('.collection-item'));
  items.forEach(item => {
    const itemText = item.firstChild.textContent.toLowerCase();
    if (itemText.includes(text)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}
