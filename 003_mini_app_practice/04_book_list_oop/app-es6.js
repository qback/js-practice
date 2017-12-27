const form = document.querySelector('#book-form');
const bookList = document.querySelector('#book-list');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  insertBookToList({ title, author, isbn }) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="javascript:void(0)" class="delete">X</a></td>
  `;
    bookList.appendChild(row);
  }

  removeBookFromList(node) {
    node.closest('tr').remove();
  }

  clearFields() {
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.textContent = message;
    div.className = `alert ${className}`;
    form.parentElement.insertBefore(div, form);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }
}

function addBook(ev) {
  ev.preventDefault();

  const ui = new UI();
  const [title, author, isbn] = [titleInput.value, authorInput.value, isbnInput.value];

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Вы ввели неполную информацию о книге', 'error');
    return;
  }

  const newBook = new Book(title, author, isbn);

  ui.insertBookToList(newBook);
  ui.showAlert('Книга добавлена', 'success');
  ui.clearFields();
  console.log('ui:', ui);
}

function removeBook({ target }) {
  const ui = new UI();
  if (target.classList.contains('delete')) {
    ui.removeBookFromList(target);
    ui.showAlert('Книга удалена', 'success');
  }
}
