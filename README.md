# ITGirlsHomeworkW16

1. Какими способами можно объявлять массивы в JS?
   let arr = [];
   let arr = new Array();

2. Приведите 3 примера, из тех, которые не были озвучены в материалах, что могло бы быть массивом?
   колода карт
   let Tarot = ["The Chariot", "The Priestess", "The Tower", "Death",];

набор ниток для вышивки
let DMCfloss = ["Dark Baby Blue", "Light Fern Green", "Medium Light Autumn Gold", "Ultra Very Dark Desert Sand", "Medium Golden Olive",];

ингредиенты для салата
let Salad =["tomato", "cucumber", "onion", "lettice", "bell pepper",];

3. Каким еще способом, кроме `pop` и `shift` можно удалять элементы из массивов?

1) delete arr[index]; с указанием индекса элемента, который надо удалить
2) arr.splice(index[, deleteCount, elem1, ..., elemN])
   начинает работу с индекса удаляемого элемента, удаляет указанное число элементов и может их заменить другими
3) можно убрать элементу массива, сократив его длину с помощью arr.length

4. Можно ли пропускать части **for**? Что получится, если написать `for(;;)`?
   Любая часть for может быть пропущена.
   Если написать `for(;;)`, получитс бесконечный цикл.

5. Самостоятельно разберитесь, как работает цикл while и приведите два примера кода с его использованием.
   while (условие) {
   тело цикла
   }
   Код в этом цикле будет выполняться, пока условие верно.

   let i = 0; while (i < 10) { alert(i); i++; }

   let i = 0; do { alert( i ); i++; } while (i < 3);

6. Какой получится массив, если создать его вот так `new Array(5)`?
   Получится массив без элементов, с заданной длиной 5.

7. Как вывести чётные числа от 2 до 10 при помощи цикла for?
   for (let i = 2; i <= 10; i++) {
   if (i % 2 == 0) {
   alert(i);
   }
   }

8. Каков будет результат выполнения этого кода? Почему?
   let arr = ["a", "b"];

arr.push(function() {
alert( arr );
})

arr[2](); // ?

Сначала мы добавляем в конец массива функцию, он станет a, b, function()
затем, по индексу элемента 2 произойдёт вызов этой функции, которая выведет массив.

9. Три основных способа перебора элементов массива?

1) цикл for
2) цикл for..of
3) метод arr.forEach

10. Как можно выбрать все инпуты из вашей формы регистрации из прошлого ДЗ с помощью `querySelector*`?
    document.querySelectorAll('input')

11. Самостоятельно разберитесь, как можно проще всего сделать сортировку в массиве на JS?
    Можно воспользоваться встроенной функцией sort().
    Также есть мнжество других алгоритмов сортировки, наиболее популярными из них называют пузырьковую, шейкерную, расчёской, быструю и пирамидальную.

12. Как можно принудительно остановить выполнение цикла?
    С помощью оператора break.
