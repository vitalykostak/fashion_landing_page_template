import '../styles/default.scss';
import '../styles/style.scss';
import BurgerMenu from './BurgerMenu.js';

const burgerMenuElem = document.querySelector('.header__nav-links');
const burgerIcon = document.querySelector('.burger-icon');

const burgerIconDefaultInnerHTML = burgerIcon.innerHTML;
const burgerIconToCloseInnerHTML = '&#x2715';

const openingClassSelector = 'header__nav-links--open';

const burgerMenu = new BurgerMenu(burgerMenuElem, openingClassSelector);

window.addEventListener('onload', burgerMenu.isActive.bind(burgerMenu));
window.addEventListener('resize', burgerMenu.isActive.bind(burgerMenu));
window.addEventListener('resize', burgerMenu.setHeightToMenu.bind(burgerMenu));

burgerIcon.addEventListener('click', () => {
  burgerMenu.toggleMenu();

  if (burgerMenu.isOpen()) {
    changeBurgerIconToClose();
    freezeBurgerIconToClose();
  } else {
    changeBurgerIconToDefault();
    unfreezeBurgerIconToClose();
  }
});

function freezeBurgerIconToClose() {
  burgerIcon.style.position = 'fixed';
}
function unfreezeBurgerIconToClose() {
  burgerIcon.style.position = 'static';
}

function changeBurgerIconToClose() {
  burgerIcon.innerHTML = burgerIconToCloseInnerHTML;
  burgerIcon.classList.add('burger-icon--close');
}

function changeBurgerIconToDefault() {
  burgerIcon.innerHTML = burgerIconDefaultInnerHTML;
  burgerIcon.classList.remove('burger-icon--close');
}
