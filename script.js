//1 Восстановить порядок книг	
const books = document.querySelectorAll('.book');

books[0].before(books[1]);
books[0].after(books[4]);
books[5].after(books[2]);

//2 изменяем background

const body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//3 Исправить заголовок в книге 3

const booksTitle = document.querySelectorAll('h2');
booksTitle[2].innerHTML = 'Книга 3. this и Прототипы Объектов';

//4 удаляем рекламу со странцы
let googleAdvertising = document.querySelector('.adv');
googleAdvertising.classList.remove('adv')

//5 Восстановить порядок глав во второй и пятой книге

const chapters = document.querySelectorAll('li');

chapters[13].after(chapters[15]);
chapters[15].after(chapters[8]);
chapters[10].before(chapters[14]);
chapters[9].after(chapters[12]);

chapters[37].after(chapters[45]);
chapters[40].after(chapters[38]);
chapters[44].before(chapters[41]); 

chapters[55].insertAdjacentHTML('afterend', 'Глава 8: За пределами ES6');
