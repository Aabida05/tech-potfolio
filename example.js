const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
themeToggle.addEventListener('click', () => {
document.body.classList.toggle('light');
});
}


// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
}


// Contact form handler
function handleSubmit(e) {
e.preventDefault();
const data = Object.fromEntries(new FormData(e.target).entries());
alert(`Thanks, ${data.name}! I’ll reply to ${data.email} soon.`);
e.target.reset();
}


// Set year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
