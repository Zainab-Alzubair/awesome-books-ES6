import { appendBook } from './append-book.js';
import { addRemoveListener } from './add-remove-listener.js';

export let library = [];

// Create class declaration for books in library
export class Book {
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
