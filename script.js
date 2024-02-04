const originalBook = new Book()
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read) {
        this.read = "read";
    } else {
        this.read = "not read yet";
    }
}

Book.prototype.printBook = function() {
    let div = document.createElement('div');
    div.className = 'book';
    let h3 = document.createElement('h3');
    h3.textContent = this.title;
    let h4 = document.createElement('h4');
    h4.textContent = this.author;
    let p = document.createElement('p');
    p.textContent = `${this.pages} pages`
    let read = document.createElement('button');
    read.className = 'read'
    read.textContent = this.read;

    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(read);

    let shelf = document.querySelector('.library-shelf')
    shelf.appendChild(div)
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
    Book.printBook();
}


const newBook = document.querySelector('.add')
const dialog = document.querySelector('dialog')
const closeDialog = document.querySelector('.close')
const submitBook = document.querySelector('.submit')

closeDialog.addEventListener('click', (e) => {
    dialog.close();
})

newBook.addEventListener('click', (e) => {
    dialog.showModal();
})

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    let newBook = new Book(title, author, pages, false)
    addBookToLibrary(newBook)
})

document.querySelector('.library-shelf').addEventListener('click', function(e) {
    if (e.target && e.target.className === 'read' || e.target && e.target.className === 'not-read') {
        e.target.textContent = e.target.textContent === 'read' ? 'not read yet' : 'read';
    }
});



