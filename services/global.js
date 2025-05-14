
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
	menuToggle.addEventListener('click', () => {
		navLinks.classList.toggle('open');
	});
}

const darkModeToggle = document.querySelector('.dark-mode-toggle');

if (darkModeToggle) {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		document.body.classList.add('dark-mode');
	}

	darkModeToggle.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		const isDarkMode = document.body.classList.contains('dark-mode');
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	});
}

const currentPage = location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach((link) => {
	if (link.getAttribute('href') === currentPage) {
		link.classList.add('active');
	}
});
