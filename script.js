/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
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

// Works section

const body = document.querySelector('body');
const works = document.querySelector('.works');
const content = document.querySelector('.content');
const nav = document.querySelector('.navbar');

const obj = [{
  name: ['Multi-Post Stories', 'Keeping Track of Hundreds of components website'],
  description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"],
  img: 'images/project-background.png',
  technologies: ['html', 'bootstrap', 'Ruby on Rails'],
  live: 'https://amrit131.github.io/portfolio-mobile/',
  source: 'https://github.com/Amrit131/portfolio-mobile',
}];

const open = document.getElementsByClassName('open');
for (let i = 0; i < open.length; i++) {
  open[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'pop-up';
    popup.innerHTML = `
          <div class="gymfit-container">
          <div class="post-container">
              <h3 class= "header-3">${obj[0].name[0]}</h3>
              <h3 class= header3>${obj[0].name[1]}</h3>
              <a class= "close-btn" href= "#">
                  <span class= "close-bar" id= "bar1"></span>
                  <span class= "close-bar" id= "bar2"></span>
              </a>
              <ul id="tech-btn1">
                  <li class="bttn"><button>${obj[0].technologies[0]}</button></li>
                  <li class="bttn" ><button>${obj[0].technologies[1]}</button></li>
                  <li class="bttn" ><button>${obj[0].technologies[2]}</button></li>
              </ul>
              <div class="pop-up-desktop">
                  <img class="gymfit-img" src="${obj[0].img}" alt="Gym Fit Image">
                  <div class = "para-button">
                      <p class="stories-para">${obj[0].description[0]}</p>
                      <p class="stories-para1">${obj[0].description[1]}</p>
                      <div class="btn-container1">
                          <a href= ${obj[0].live} ><button class= "close" id="btn1" type= "button">See Live <img id= "icon-img" src= "images/see-live-icon.png"></button></a>
                          <a href= ${obj[0].source} ><button class= "close" id="btn2" type= "button">Source code <img id= "icon-img" src= "images/source-icon.png"></button></a>
                      </div>
                  </div>
              </div>
          </div>
          `;

    works.classList.toggle('act');
    body.classList.toggle('act');
    content.classList.toggle('act');
    nav.classList.toggle('act');
    main.appendChild(popup);
    body.appendChild(main);

    const close = document.querySelector('.close-btn');
    close.addEventListener('click', () => {
      body.removeChild(main);
      body.classList.remove('act');
      works.classList.remove('act');
      content.classList.remove('act');
      nav.classList.remove('act');
    });
  });
}
