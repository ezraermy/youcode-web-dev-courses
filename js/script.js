const eachSpeakers = [
  {
    name: 'Ezra Ermy',
    picture: 'images/ez.JPG',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Abenu Ermy',
    picture: 'images/ekut2.png',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Ekut Ermy',
    picture: 'images/bu.png',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Tutu Ermy',
    picture: 'images/ekut2.png',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Ekut Ermy',
    picture: 'images/abenu.png',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Tutu Ermy',
    picture: 'images/bu.png',
    profession: 'Ezra is a full-stack web developer and researcher',
    backgound: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
];

const allSpeakers = document.querySelector('#all-speakers');
const allspeakersDesktop = document.querySelector('#all-speakers-desktop');
const title = document.querySelector('.featured-speaker-title');

title.innerHTML = 'Featured Teachers <hr>';

for (let i = 0; i < eachSpeakers.length - 4; i += 1) {
  const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].picture}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].profession}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].backgound}</p>
  </div></section>`;
  allSpeakers.innerHTML += speaker;
}

for (let i = 0; i < eachSpeakers.length; i += 1) {
  const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].picture}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].profession}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].backgound}</p>
  </div></section>`;
  allspeakersDesktop.innerHTML += speaker;
}

const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', (e) => {
  e.target.classList.add('show-loader');
  for (let i = 2; i < eachSpeakers.length; i += 1) {
    const speaker = `<section class="featured-speakers">
  <img src="${eachSpeakers[i].picture}" alt="Speaker's photo" class="person-photo box">
  <div class="person-content">
    <h2 class="person-name">${eachSpeakers[i].name}</h2>
    <p class="person-profession">${eachSpeakers[i].profession}</p>
    <hr>
    <p class="person-background">${eachSpeakers[i].backgound}</p>
  </div></section>`;
    allSpeakers.innerHTML += speaker;
  }
});
