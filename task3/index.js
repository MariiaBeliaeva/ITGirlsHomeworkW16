//Задача №1
const frontend = ["js", "css", "html"];
alert(frontend[0]);

//Задача №2
const various = [0, 1, false, 2, undefined, "", 3, null];

let variousFiltered = various.filter(function (number) {
  return number > 0;
});

alert(variousFiltered);

//Задача №3
const numbers = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

let numbersFiltered = numbers.findIndex((el) => el.length > 3);
alert(numbersFiltered);
