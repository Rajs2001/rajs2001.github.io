// Toggle navbar on burger icon click

const burger = document.querySelector('.burger');

const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {

  nav.classList.toggle('nav-active');

  // Animate burger icon

  burger.classList.toggle('line1');

  burger.classList.toggle('line2');

  burger.classList.toggle('line3');

});

