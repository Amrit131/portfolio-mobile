/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function onClickMenu() {
  document.getElementById('menu').classList.toggle('icon');
  document.getElementById('nav').classList.toggle('change');
}

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('brand-title')[0];
const links = document.getElementsByClassName('links')[0];
const link1 = document.getElementsByClassName('links')[1];
const link2 = document.getElementsByClassName('links')[2];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbar.classList.toggle('active');
});

links.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('active');
  document.getElementById('menu').classList.remove('icon');
});

link1.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('active');
  document.getElementById('menu').classList.remove('icon');
});

link2.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('active');
  document.getElementById('menu').classList.remove('icon');
});
