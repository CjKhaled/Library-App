const originalBook = new Book('The Hobbit', "J.R.R. Tolkien", 295, false, 0);
const myLibrary = [originalBook];
let bookId = 1;

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
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
    p.textContent = `${this.pages} pages`;
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.id = this.id;
    deleteButton.textContent = 'Delete Book';
    let read = document.createElement('button');
    read.className = 'read'
    read.textContent = this.read;
    let id = document.createElement('span');
    id.textContent = this.id;

    div.appendChild(id);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(read);
    div.appendChild(deleteButton);

    let shelf = document.querySelector('.library-shelf')
    shelf.appendChild(div)
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
    Book.printBook();
    bookId++;
}

function removeBookFromLibrary(id) {
    myLibrary.forEach((book) => {
        if (book.id == id) {
            myLibrary.splice(book[id], 1);
        }
    })
    console.log(myLibrary)
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
    let newBook = new Book(title, author, pages, false, bookId)
    addBookToLibrary(newBook)
    dialog.close();
})

document.querySelector('.library-shelf').addEventListener('click', function(e) {
    if (e.target && e.target.className === 'read' || e.target && e.target.className === 'not-read') {
        e.target.textContent = e.target.textContent === 'read' ? 'not read yet' : 'read';
    }
});

document.querySelector('.library-shelf').addEventListener('click', (e) => {
    if (e.target && e.target.className == 'delete') {
        const pickedId = parseInt(e.target.id);
        if (pickedId != 0){
            removeBookFromLibrary(pickedId);
            e.target.parentNode.remove();
        } 
    }
})



