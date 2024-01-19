//Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.
const list=[5,-3,67,89,-35,63,-19,99,33];

const result=list
     .map(itVar=>{return itVar*2});
//itVar- итерационная переменная
     console.log(result);

//  Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр.
const listString= ['here','comes','the','rain','Severance'];

const result1=listString
  .map(itVar=>itVar.toUpperCase());
console.log(result1);
//Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.
let sum = 0;
const numbers=list
     .forEach(itVar=>{return sum +=itVar;});
     console.log(sum);

//Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.
const positive=list
         .filter(itVar=>{return itVar>0;})
         .map(itVar=>{return itVar;});
     console.log(positive);