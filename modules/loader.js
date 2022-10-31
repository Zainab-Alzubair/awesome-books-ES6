import { main, loader } from './dom-elements.js';
// Function to show loading screen
export const load = () => {
  main.classList.add('hide');
  loader.classList.remove('hide');
  setTimeout(() => {
    loader.classList.add('hide');
    main.classList.remove('hide');
  }, 1000);
};
