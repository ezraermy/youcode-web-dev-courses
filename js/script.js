const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const myBtn = document.querySelector('.my-btn');

const eachSpeakers = [
  {
    name: 'Ezra Ermy',
    picture: 'images/avatar.jpg',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Abenu Ermy',
    picture: 'images/avatar.jpg',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Ekut Ermy',
    picture: 'images/avatar.jpg',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
];

const allSpeakers = document.querySelector('#all-speakers');
const title = document.querySelector('.featured-speaker-title');

title.innerHTML = `<h2 class="featured-speaker-title">Featured Teachers</h2>
<hr>`;

for (let i = 0; i < eachSpeakers.length; i += 1) {
  const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].picture}" alt="Speaker's photo" class="person-photo">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].profession}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].backgound}</p>
  </div>`;
  allSpeakers.innerHTML += speaker;
}

// LOAD MORE
const loadMore = document.querySelector('.load-more');
loadMore.innerHTML = `<p id="dots"></p><p id="more" style="padding-left: 20px; color: crimson">No more speakers</p>
</section> <button onclick="myFunction()" id="myBtn">Load more</button>`;
function myFunction() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  const btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

myBtn.addEventListener('click', myFunction);

// MOBILE MENU
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);