const bookList = document.getElementById('book-list');

const BookArray = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const prevent = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};
prevent();

const data = document.getElementById('send');

data.addEventListener('click', () => {
  const newBook = new Book();
  newBook.title = document.getElementById('title').value;
  newBook.author = document.getElementById('author').value;
  BookArray.push(newBook);
  for (let i = 0; i < BookArray.length; i += 1) {
    bookList.innerHTML += `
    <li id='book-${i}'>
        <p>${BookArray[i].title}</p>
        <p>${BookArray[i].author}</p>
        <button id="remove-${i}">Remove</button>
    </li>`
    BookArray.splice(i, 1);
  }
  document.querySelector("form").reset();
});
