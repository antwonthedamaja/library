// modal
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

//listeners
const submit = document.querySelector('.submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const bookGrid = document.querySelector('.book-grid');

let myLibrary = [];

function populateBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

submit.addEventListener('click', () => {
    let newBook = new Book(book.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
    console.table(myLibrary);
    // populateBooks();
    modal.close();
})