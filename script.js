//listeners
const submit = document.querySelector('.submit');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const check = document.querySelector('#check');
const bookGrid = document.querySelector('#book-grid');

//modal
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

//main
let myLibrary = [];
let counter = 0;

function Book(name, author, pages, check) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.check = check;
    this.checkToggle = function() {
        this.check = !check;
    }
}

// if (myLibrary.length > 0) { //for later when storage is implemented
//     for (let i = 0; i < myLibrary.length; i++) {
//         populateBooks();
//         attachRemoveListeners();
//         attachReadListeners();
//     }
// }

submit.addEventListener('click', () => {
    const newBook = new Book(book.value, author.value, pages.value, check.checked);
    myLibrary.push(newBook);
    populateBooks();
    attachRemoveListeners();
    attachReadListeners();
    modal.close();
});

function populateBooks() {
    const cardCreate = document.createElement('div');
    cardCreate.classList.add('card', 'gradient');

    const bookCreate = document.createElement('div');
    bookCreate.classList.add('content');
    bookCreate.innerText = `"${myLibrary[counter].name}"`;

    const authorCreate = document.createElement('div');
    authorCreate.classList.add('content');
    authorCreate.innerText = 'By: ' + myLibrary[counter].author;

    const pagesCreate = document.createElement('div');
    pagesCreate.classList.add('content');
    pagesCreate.innerText = myLibrary[counter].pages + ' pages';

    const checkCreate = document.createElement('div');
    checkCreate.classList.add('content', 'read');
    myLibrary[counter].check == true ? checkCreate.innerText = "Have read" : checkCreate.innerText = "Haven't read";

    const removeBtnCreate = document.createElement('button');
    removeBtnCreate.classList.add('remove');
    removeBtnCreate.innerText = 'Remove?';

    cardCreate.append(bookCreate, authorCreate, pagesCreate, checkCreate, removeBtnCreate);
    cardCreate.dataset.num = counter;
    let rngDeg = Math.random() * 360;
    cardCreate.style.backgroundImage = `linear-gradient(${rngDeg}deg, #00f2ff, #00ff88)`
    bookGrid.appendChild(cardCreate);
    counter++;
}

function attachRemoveListeners() {
    const removeBtn = bookGrid.lastElementChild.lastElementChild;
    removeBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (card.dataset.num > removeBtn.parentElement.dataset.num) card.dataset.num--;
        });
        counter--;
        removeBtn.parentElement.remove();
        myLibrary.splice(removeBtn.parentElement.dataset.num, 1);
    });
}

function attachReadListeners() {
    const read = bookGrid.lastElementChild.querySelector('.content:nth-child(4)')
    read.addEventListener('click', () => {
        if (read.innerText == "Have read") {
            read.innerText = "Haven't read";
            
        } else {
            read.innerText = "Have read"

        }
    });
}