import { empty } from './dom-elements.js';

// Function to show / hide empty library message
export function displayEmpty() {
  empty.classList.toggle('hide');
}