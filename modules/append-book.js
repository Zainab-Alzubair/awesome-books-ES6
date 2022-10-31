import { booksSection } from './dom-elements.js';
import { displayEmpty } from './display-empty.js';
import { library } from './books-class.js';
// Function to append book to DOM
export const appendBook = (book) => {
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
