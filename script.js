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
    const cardCreate = document.createElement('div');
    cardCreate.classList.add('card', 'gradient');

    const bookCreate = document.createElement('div');
    bookCreate.classList.add('content');
    
    const authorCreate = document.createElement('div');
    authorCreate.classList.add('content');
    
    const pagesCreate = document.createElement('div');
    pagesCreate.classList.add('content');
    
    const checkCreate = document.createElement('div');
    checkCreate.classList.add('content');
    
    const removeBtnCreate = document.createElement('button');
    removeBtnCreate.classList.add('remove');
    removeBtnCreate.innerText = 'Remove?';

    for (let i = 0; i < myLibrary.length; i++) {
        bookCreate.innerText = `"${myLibrary[i].name}"`;
        authorCreate.innerText = 'By: ' + myLibrary[i].author;
        pagesCreate.innerText = myLibrary[i].pages + ' pages';
        myLibrary[i].check == true ? checkCreate.innerText = "Have read" : checkCreate.innerText = "Haven't read";
        cardCreate.append(bookCreate, authorCreate, pagesCreate, checkCreate, removeBtnCreate);
        bookGrid.appendChild(cardCreate);
    }

    const removeBtn = document.querySelectorAll('.remove');
    
    removeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        });
    });
}

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