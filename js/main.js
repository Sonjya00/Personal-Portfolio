let projects = [
  {
    id: 7,
    title: 'Restaurant Review App',
    tools: 'HTML, CSS, JS, Sass',
    img: 'img/index_desktop_copia.jpg',
    url: 'https://github.com/Sonjya00/Restaurant-Review-App',
    description: 'A fully responsive and accessible app that fetches and displays a series of data related to restaurants, which can be filtered by neighborhood and cuisine',
    alt: 'Restaurant Review App',
  },
  {
    id: 6,
    title: 'Frogger Game',
    tools: 'HTML, CSS, JS',
    img: 'img/Frogger_game.jpg',
    url: 'https://github.com/Sonjya00/Frogger-Game',
    description: 'An arcade game built with JavaScript object-oriented programming features to create player, enemies, collectibles and obstacles on a dynamic canvas',
    alt: 'Frogger Game',
  },
  {
    id: 5,
    title: 'Matching Game',
    tools: 'HTML, CSS, JS',
    img: 'img/Matching_Game2.jpeg',
    url: 'https://github.com/Sonjya00/Matching-Game',
    description: 'A fully responsive memory game with animations, a score board and a timer',
    alt: 'Matching Game',
  },
  {
    id: 4,
    title: 'Lab Pixel Art Maker',
    tools: 'HTML, CSS, JS (jQuery)',
    img: 'img/Pixel_Art_Maker.jpg',
    url: 'https://codepen.io/Sonjya00/pen/odXxvw',
    description: 'A game that creates a canvas of a custom size and allows to make drawings by coloring the cells with custom colors',
    alt: 'Lab Pixel Art Maker',
  },
  {
    id: 3,
    title: 'Animal trading card 2',
    tools: 'HTML, CSS',
    img: 'img/Animal_Trading_Card2.jpg',
    url: 'https://codepen.io/Sonjya00/pen/BxKYVr',
    description: 'A colorful card with a picture and some details about an animal',
    alt: 'Panther Chameleon Trading Card',
  },
  {
    id: 2,
    title: 'Animal Trading Card 1',
    tools: 'HTML, CSS',
    img: 'img/Animal_Trading_Card1.jpg',
    url: 'https://codepen.io/Sonjya00/pen/dJjVxJ',
    description: 'A colorful card with a picture and some details about an animal',
    alt: 'Black Panther Trading Card',
  },
  {
    id: 1,
    title: 'Fortune Cookie',
    tools: 'HTML, CSS, JS (jQuery)',
    img: 'img/Fortune_Cookie.jpg',
    url: 'https://codepen.io/Sonjya00/pen/KoagMQ',
    description: 'An app that gives the user a funny random message and allows him/her to share it via Twitter',
    alt: 'Fortune Cookie Generator',
  },
]


projects.forEach(function(project) {
  const worksList = document.getElementById('worksList');

  let textBox = document.createElement('div');
  textBox.className = 'work__item__textbox';

  let container = document.createElement('div');
  container.className = 'work__item';

  let title = document.createElement('h3');
  title.className = 'work__item__textbox--h3';
  title.textContent = project.title;

  let p1 = document.createElement('p');
  p1.textContent = project.tools;

  let p2 = document.createElement('p');
  p2.textContent = project.description;

  let link = document.createElement('a');
  link.className = 'work__item--more-btn';
  link.setAttribute('href', project.url);
  link.setAttribute('target', '_blank');
  link.textContent = 'See code';

  let img = document.createElement('img');
  img.className = 'work__item--img';
  img.setAttribute('src', project.img);
  img.setAttribute('alt', project.alt);

  textBox.appendChild(title);
  textBox.appendChild(p1);
  textBox.appendChild(p2);
  textBox.appendChild(link);

  container.appendChild(textBox);
  container.appendChild(img);

  worksList.appendChild(container);
});
