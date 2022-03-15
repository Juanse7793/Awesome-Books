let arrayOfObjects = [];

function lStorage() {
  const convLs = JSON.stringify(arrayOfObjects);
  localStorage.setItem('book', convLs);
}

if (localStorage.book === true) {
  const local = JSON.parse(localStorage.book);
  arrayOfObjects = local;
}

function addBook(title, author) {
  const newBook1 = {
    title,
    author,
  };
  arrayOfObjects.push(newBook1);
}

lStorage();

function remove(title, author) {
  arrayOfObjects = arrayOfObjects.filter((book) => book.title !== title || book.author !== author);
  lStorage();
}

const container = document.getElementById('container');

function notDuplicate() {
  const remove = document.querySelectorAll('div');
  remove.forEach((book) => {
    container.removeChild(book);
  });
}

function display() {
  notDuplicate();
  arrayOfObjects.forEach((book) => {
    const cdiv = document.createElement('div');
    const rmBtn = document.createElement('button');
    const read = `
      <li id='book'>
          <p>${book.title}</p>
          <p>${book.author}</p>
          <br>
          <br>
      </li>`;

    cdiv.innerHTML = read;
    cdiv.appendChild(rmBtn);
    container.appendChild(cdiv);

    rmBtn.innerHTML = 'remove';
    rmBtn.addEventListener('click', () => {
      container.removeChild(cdiv);
      return remove(book.title, book.author);
    });
  });
}

display();

const newBook = document.getElementById('form');
const bookElement = newBook.querySelectorAll('input');

bookElement[2].addEventListener('click', () => {
  if (bookElement[0].value !== '' && bookElement[1].value !== '') {
    addBook(bookElement[0].value, bookElement[1].value);
    display();
    bookElement[0].value = '';
    bookElement[1].value = '';
  } else if (bookElement[0].value !== '') {
    addBook(bookElement[0].value, 'Unknokwn Author');
    display();
    bookElement[0].value = '';
    bookElement[1].value = '';
  }
});