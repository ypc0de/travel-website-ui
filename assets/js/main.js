const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});
