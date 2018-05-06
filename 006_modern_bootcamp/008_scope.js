let name = 'Мина';

if (true) {
  let name = 'Сана';
  if (true) {
    console.log(name); // Сана
  }
}

if (true) {
  console.log(name); // Мина
}

if (true) {
  name = 'Дахён'; // меняем переменную из глобального scope
  console.log(name); // Дахён
}
