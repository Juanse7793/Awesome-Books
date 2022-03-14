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
  const newTask = new Object();
  newTask.title = document.getElementById('title').value;
  newTask.author = document.getElementById('author').value;
  arrayOfObjects.push(newTask);
});
