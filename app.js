/*Мини-клон доски Trello

- разберемся с тем, как работает Drag&Drop
- позволит вам добавлять на сайт такие штуки, как перетаскивание товара в корзину, 
 или вовсе - запилить собственное приложение для совместной работы команды.
*/

/*Получаем элемент, который будем перетаскивать*/
const item = document.querySelector(".item");
/*Получаем элементы, куда будем перетаскивать (плейсхолдеры)*/
const placeholders = document.querySelectorAll(".placeholder");

/*Обработчик события в момент начала захвата элемента*/
item.addEventListener("dragstart", dragstart);
/*Обработчик события в момент отпускания элемента.*/
item.addEventListener("dragend", dragend);

/*Обработчик события для плейсхолдеров*/
for (const placeholder of placeholders) {
  //в процессе движения перемещаемого элемента внутри целевого (над плейсхолдером)
  placeholder.addEventListener("dragover", dragover);
  //при заходе курсора перетаскиваемого элемента на принимающий блок (на плейсхолдере)
  placeholder.addEventListener("dragenter", dragenter);
  //когда перетаскиваемый элемент покидает целевой блок (вне плейсхолдера)
  placeholder.addEventListener("dragleave", dragleave);
  //когда мы отпускаем элемент
  placeholder.addEventListener("drop", dragdrop);
}

/*Ф-я для обработчика события в начале перетаскивания элемента*/
function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

/*Ф-я для обработчика события в конце перетаскивания элемента*/
function dragend(event) {
  event.target.classList.remove("hold", "hide");
}

/*Ф-я для обработчика события в процессе движения перемещаемого элемента внутри целевого (над плейсхолдером) */
function dragover(event) {
  //preventDefault отменяет действия браузера по умолчанию
  event.preventDefault();
}

/*Ф-я для обработчика события при заходе курсора перетаскиваемого элемента на принимающий блок (на плейсхолдер)*/
function dragenter(event) {
  event.target.classList.add("hovered");
}

/*Ф-я для обработчика события когда перетаскиваемый элемент покидает целевой блок (вне плейсхолдера)*/
function dragleave(event) {
  event.target.classList.remove("hovered");
}

/*Ф-я для обработчика события когда мы отпускаем элемент*/
function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}

/* ***event.target – это «целевой» элемент, на котором произошло событие
 ***append - позволяет вставить в конец какого-либо элемента другой элемент
 */
