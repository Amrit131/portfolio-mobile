/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
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
const section1 = document.createElement('div');
const project = document.querySelector('.project-contain');
const section2 = document.createElement('div');
works.appendChild(section1);
project.appendChild(section2);

const obj = [{
  name: ['Multi-Post Stories', 'Multi Post Stories'],
  description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"],
  img: 'images/project-background.png',
  technologies: ['html', 'bootstrap', 'Ruby on Rails'],
  live: 'https://amrit131.github.io/portfolio-mobile/',
  source: 'https://github.com/Amrit131/portfolio-mobile',
}, {
  name: ['Data Dashboard Healthcare', 'Data Dashboard Healthcare'],
  description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"],
  img: 'images/project-background.png',
  technologies: ['html', 'bootstrap', 'Ruby on Rails'],
  live: 'https://amrit131.github.io/portfolio-mobile/',
  source: 'https://github.com/Amrit131/portfolio-mobile',
}, {
  name: ['Professional Art', 'Professional Art website'],
  description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"],
  img: 'images/project-background.png',
  technologies: ['html', 'bootstrap', 'Ruby on Rails'],
  live: 'https://amrit131.github.io/portfolio-mobile/',
  source: 'https://github.com/Amrit131/portfolio-mobile',
}, {
  name: ['Website Portfolio', 'Website Portfolio'],
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

const open1 = document.getElementsByClassName('open1');
for (let i = 0; i < open1.length; i++) {
  open1[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'pop-up';
    popup.innerHTML = `
          <div class="gymfit-container">
          <div class="post-container">
              <h3 class= "header-3">${obj[1].name[0]}</h3>
              <h3 class= header3>${obj[1].name[1]}</h3>
              <a class= "close-btn" href= "#">
                  <span class= "close-bar" id= "bar1"></span>
                  <span class= "close-bar" id= "bar2"></span>
              </a>
              <ul id="tech-btn1">
                  <li class="bttn"><button>${obj[1].technologies[0]}</button></li>
                  <li class="bttn" ><button>${obj[1].technologies[1]}</button></li>
                  <li class="bttn" ><button>${obj[1].technologies[2]}</button></li>
              </ul>
              <div class="pop-up-desktop">
                  <img class="gymfit-img" src="${obj[1].img}" alt="Gym Fit Image">
                  <div class = "para-button">
                      <p class="stories-para">${obj[1].description[0]}</p>
                      <p class="stories-para1">${obj[1].description[1]}</p>
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

const open2 = document.getElementsByClassName('open2');
for (let i = 0; i < open2.length; i++) {
  open2[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'pop-up';
    popup.innerHTML = `
          <div class="gymfit-container">
          <div class="post-container">
              <h3 class= "header-3">${obj[3].name[0]}</h3>
              <h3 class= header3>${obj[3].name[1]}</h3>
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

const open3 = document.getElementsByClassName('open3');
for (let i = 0; i < open3.length; i++) {
  open3[i].addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const popup = document.createElement('div');
    popup.className = 'pop-up';
    popup.innerHTML = `
          <div class="gymfit-container">
          <div class="post-container">
              <h3 class= "header-3">${obj[2].name[0]}</h3>
              <h3 class= header3>${obj[2].name[1]}</h3>
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

// form validation
// eslint-disable-next-line no-unused-vars
function validation() {
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const text = document.getElementById('text');
  // eslint-disable-next-line no-useless-escape
  const pattern = /^([a-z0-9\._]+)@([a-z0-9\.])+([a-z]+)(.[a-z]+)?$/;
  if (email.match(pattern)) {
    document.getElementById('btn-form').type = 'submit';
    text.innerHTML = '';
  } else {
    // form.classList.remove('valid');
    form.classList.add('invalid');
    document.getElementById('btn-form').type = 'button';
    text.innerHTML = '* Your email is invalid. (make sure your email is in lower cases)';
  }
}

// Local Storage
const form = document.getElementById('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('msg');

const input = JSON.parse(localStorage.getItem('inputs'));

if (input) {
  nameField.value = input.name;
  emailField.value = input.email;
  messageField.value = input.message;
}

form.addEventListener('change', (event) => {
  event.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  const obj1 = {
    name: name,
    email: email,
    message: message,
  };

  localStorage.setItem('inputs', JSON.stringify(obj1));
});