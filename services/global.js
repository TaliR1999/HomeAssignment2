// global.js

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Toggle dark mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// Highlight current page in navbar
const currentPage = location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
