const add = document.getElementById('add-btn');
const text = document.getElementById('book-title');
const entireList = document.getElementById('ul-container');
const author = document.getElementById('book-author');

add.addEventListener('click', (e) => {
  if (text.value !== '' && author.value !== '') {
    e.preventDefault();

    const list = document.createElement('li');
    list.innerHTML = text.value;
    const listAuthor = document.createElement('span');
    listAuthor.innerHTML = author.value;
    entireList.appendChild(list);
    entireList.appendChild(listAuthor);
  }
});