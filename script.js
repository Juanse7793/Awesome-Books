class MainBooks {
  constructor() {
    this.array = [];
  }

  lStorage() {
    const convertToLocalStorage = JSON.stringify(this.array);
    localStorage.setItem('book', convertToLocalStorage);
  }

  addBook(title, author) {
    const newBook1 = {
      title,
      author,
    };

    this.array.push(newBook1);
    this.lStorage();
  }

  remove(title, author) {
    this.array = this.array.filter((book) => book.title !== title || book.author !== author);
    this.lStorage();
  }
}

const listOfBooks = new MainBooks();

if (localStorage.book) {
  const local = JSON.parse(localStorage.book);
  listOfBooks.array = local;
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
  listOfBooks.array.forEach((book) => {
    const cdiv = document.createElement('div');
    const rmBtn = document.createElement('button');
    const read = `
      <article id='book'>
          <p>"${book.title}"</p> by
          <p>${book.author}</p>
      </article>`;

    cdiv.innerHTML = read;
    cdiv.appendChild(rmBtn);
    container.appendChild(cdiv);
    cdiv.classList.add('book-container');

    rmBtn.innerHTML = 'remove';
    rmBtn.addEventListener('click', () => {
      container.removeChild(cdiv);
      return listOfBooks.remove(book.title, book.author);
    });
  });
}

display();

const book = document.getElementById('form');
const bookElement = book.querySelectorAll('input');

bookElement[2].addEventListener('click', (e) => {
  if (bookElement[0].value !== '' && bookElement[1].value !== '') {
    listOfBooks.addBook(bookElement[0].value, bookElement[1].value);
    display();
    bookElement[0].value = '';
    bookElement[1].value = '';
  } else {
    e.preventDefault();
  }
});
