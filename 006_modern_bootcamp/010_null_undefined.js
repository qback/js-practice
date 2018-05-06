// случаи получения undefined

// 1.объявлена переменная без присваивания значения
let name;
console.log(name); //undefined

// 2.функция вызвана без заданных параметров
const square = function(num) {
  console.log(num); //undefined
};

// 3.функция ничего не возвращает
console.log(square()); //undefined

//null нужен чтобы 'обнулить' значение переменной
let age = 27;
age = null;
console.log(age); //null
