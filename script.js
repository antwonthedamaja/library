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

//form listeners
const submit = document.querySelector('.submit');


let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function getBooks() {
    for (let i = 0; i < myLibrary.length; i++) {

    }
}

submit.addEventListener('click', () => {
    
    modal.close();
})