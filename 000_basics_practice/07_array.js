// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.
// 	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. Показать решение.
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
console.log([...arr, ...arr1]);

// Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
// 	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. Показать решение.
arr = [1, 2, 3];
console.log(arr.reverse());

// Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
// 	Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. Показать решение.
arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. Показать решение.
arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
// 	Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. Показать решение.
arr = ['js', 'css', 'jq'];
console.log(arr.shift());

//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. Показать решение.
arr = ['js', 'css', 'jq'];
console.log(arr.pop());

// Работа с slice
// Для решения задач данного блока вам понадобятся следующие методы: slice.
// 	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. Показать решение.
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3));

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Показать решение.
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));

// Работа с splice
// Для решения задач данного блока вам понадобятся следующие методы: splice.
// 	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. Показать решение.
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.
arr = [1, 2, 3, 4, 5];
arr = arr.splice(1, 3);
console.log(arr);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение.
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.
// 	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. Показать решение.
arr = [3, 4, 1, 2, 7];
arr.sort((a, b) => (a < b ? -1 : 1));
console.log(arr);

// Работа с Object.keys
// Для решения задач данного блока вам понадобятся следующие методы: Object.keys.
// 	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. Показать решение.
let obj = { js: 'test', jq: 'hello', css: 'world' };
arr = Object.keys(obj);
console.log(arr);
