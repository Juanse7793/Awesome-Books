let arrayOfObjects = [];

function lStorage() {
  const convertToLocalStorage = JSON.stringify(arrayOfObjects);
  localStorage.setItem('book', convertToLocalStorage);
}

if (localStorage.book) {
  const local = JSON.parse(localStorage.book);
  arrayOfObjects = local;
}

function addBook(title, author) {
  const newBook1 = {
    title,
    author,
  };
  arrayOfObjects.push(newBook1);

  lStorage();
}

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
      <article id='book'>
          <p>${book.title}</p>
          <p>${book.author}</p>
          <br>
          <br>
      </article>`;

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

const book = document.getElementById('form');
const bookElement = book.querySelectorAll('input');

bookElement[2].addEventListener('click', (e) => {
  if (bookElement[0].value !== '' && bookElement[1].value !== '') {
    addBook(bookElement[0].value, bookElement[1].value);
    display();
    bookElement[0].value = '';
    bookElement[1].value = '';
  } else {
    e.preventDefault();
  }
});