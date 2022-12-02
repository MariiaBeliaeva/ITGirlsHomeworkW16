const numbers = [];

const input = document.querySelector("#numberInput");
const addBtn = document.querySelector("#inputButton");
const readyBtn = document.querySelector("#readyButton");
const result = document.querySelector("#result");
const sum = document.querySelector("#sum");

const addNumber = () => {
  let number = Number(input.value);
  if (number) {
    numbers.push(number);
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  numbers.sort(compareNumbers);

  result.innerHTML = numbers;
  input.value = "";
};

const sumInput = () => {
  let done = 0;
  for (let i = 0; i < numbers.length; i++) done += numbers[i];

  sum.innerHTML = done;
};

addBtn.addEventListener("click", addNumber);
readyBtn.addEventListener("click", sumInput);
