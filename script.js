//listeners
const submit = document.querySelector('.submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const check = document.querySelector('#check');
const bookGrid = document.querySelector('#book-grid');

//main
let myLibrary = [];
let counter = 0;

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

    while (counter < myLibrary.length) {
        bookCreate.innerText = `"${myLibrary[counter].name}"`;
        authorCreate.innerText = 'By: ' + myLibrary[counter].author;
        pagesCreate.innerText = myLibrary[counter].pages + ' pages';
        myLibrary[counter].check == true ? checkCreate.innerText = "Have read" : checkCreate.innerText = "Haven't read";
        cardCreate.append(bookCreate, authorCreate, pagesCreate, checkCreate, removeBtnCreate);
        cardCreate.dataset.num = counter;
        bookGrid.appendChild(cardCreate);
        counter++;
    }

    const remove = bookGrid.lastElementChild.lastElementChild;

    remove.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (card.dataset.num >= remove.parentElement.dataset.num) card.dataset.num--;
        });
        counter--;
        remove.parentElement.remove();
        myLibrary.splice(remove.parentElement.dataset.num, 1);
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