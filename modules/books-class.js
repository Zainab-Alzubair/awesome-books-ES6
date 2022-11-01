/* eslint-disable import/no-mutable-exports */

import displayEmpty from './display-empty.js';
import { booksSection } from './dom-elements.js';

let library = [];

// Create class declaration for books in library
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

   addBook = () => {
     library.push(this);
   };

  removeBook = () => {
    library = library.filter((book) => book.id !== this.id);
  };
}

// Function to add click event to remove button remove book from DOM
const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    localStorage.setItem('library', JSON.stringify(library));
    if (!library.length) {
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

// Function to append book to DOM
const appendBook = (book) => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`;
  bookElement.className = 'book';
  bookElement.innerHTML = `
    <p>${book.title} by ${book.author}</p>
    <button id="remove-${book.id}" class="remove"><i class="fa-solid fa-trash-can"></i></button>
  `;

  booksSection.appendChild(bookElement);
  if (library.length === 1) {
    displayEmpty();
  }
};

// Check if local storage exists on page load and use data to add books to DOM

if (localStorage.getItem('library')) {
  const libraryData = JSON.parse(localStorage.getItem('library'));
  Array.from(libraryData).forEach((book) => {
    const newBook = new Book(book.id, book.title, book.author);
    library.push(newBook);
    appendBook(newBook);
    addRemoveListener(newBook);
  });
}

export {
  appendBook, addRemoveListener, Book, library,
};