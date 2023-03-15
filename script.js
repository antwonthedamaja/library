// modal
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

//listeners
const submit = document.querySelector('.submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const check = document.querySelector('#check');
const bookGrid = document.querySelector('#book-grid');

//main
let myLibrary = [];

function Book(name, author, pages, check) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.check = check;
}

submit.addEventListener('click', () => {
    const newBook = new Book(book.value, author.value, pages.value, check.checked);
    myLibrary.push(newBook);
    populateBooks();
    modal.close();
})

function populateBooks() {
    const card = document.createElement('div');
    card.classList.add('card', 'gradient');

    const book = document.createElement('div');
    book.classList.add('content');

    const author = document.createElement('div');
    author.classList.add('content');

    const pages = document.createElement('div');
    pages.classList.add('content');

    const read = document.createElement('div');
    read.classList.add('content');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove')
    removeBtn.innerText = 'Remove?';

    for (let i = 0; i < myLibrary.length; i++) {
        book.innerText = `"${myLibrary[i].name}"`;
        author.innerText = 'By: ' + myLibrary[i].author;
        pages.innerText = myLibrary[i].pages + ' pages';
        myLibrary[i].check == true ? read.innerText = "Have read" : read.innerText = "Haven't read";
        card.append(book, author, pages, read, removeBtn);
        bookGrid.appendChild(card);
    }
}