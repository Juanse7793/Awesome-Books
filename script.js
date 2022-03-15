const container = document.getElementById('ul-container');

const arrayOfObjects = [];

function Object(title, author) {
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
  const newBook = new Object();
  newBook.title = document.getElementById('title').value;
  newBook.author = document.getElementById('author').value;
  arrayOfObjects.push(newBook);
  for (let i = 0; i < arrayOfObjects.length; i += 1) {
    const list = `
    <li>
        <p>${arrayOfObjects[i].title}</p>
        <br>
        <p>${arrayOfObjects[i].author}</p>
        <br>
        <button id="remove">Remove</button>
    </li>`;
    container.innerHTML += list;
    arrayOfObjects.splice(i, 1);
  }
});
