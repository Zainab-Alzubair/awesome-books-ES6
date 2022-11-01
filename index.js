import { uid } from './modules/random-id.js';
import { load } from './modules/loader.js';
import {
  newBtn, contactBtn, listBtn, form, listSection, addSection, contactSection, main, time,
} from './modules/dom-elements.js';
import { library, Book } from './modules/books-class.js';
import { addRemoveListener } from './modules/add-remove-listener.js';
import { appendBook } from './modules/append-book.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
time.innerHTML = now;

// Add event listener to new button to show form
newBtn.addEventListener('click', () => {
  load();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('list-back', 'add-back');
    newBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('contact-back', 'add-back');
    newBtn.classList.add('active');
  }
});

// Add event listener to contact button to show contact-info
contactBtn.addEventListener('click', () => {
  load();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('list-back', 'contact-back');
    contactBtn.classList.add('active');
  } else {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('add-back', 'contact-back');
    contactBtn.classList.add('active');
  }
});

// Add event listener to list button to show library
listBtn.addEventListener('click', () => {
  load();

  if (addSection.classList.contains('show')) {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.height = '';
    main.classList.replace('add-back', 'list-back');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    main.classList.replace('contact-back', 'list-back');
    listBtn.classList.add('active');
  }
});

// Add submit event listener to form to add book to local storage and DOM
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const book = new Book(uid(), bookTitle.value, bookAuthor.value);
  book.addBook();
  localStorage.setItem('library', JSON.stringify(library));
  appendBook(book);
  addRemoveListener(book);
  localStorage.removeItem('formData');
  bookAuthor.value = '';
  bookTitle.value = '';

  load();
  if (addSection.classList.contains('show')) {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  }
});
