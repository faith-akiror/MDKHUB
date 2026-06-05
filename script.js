document.addEventListener('DOMContentLoaded', () => {
    // Reveal sections on scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(windowReveal => {
            const windowHeight = window.innerHeight;
            const elementTop = windowReveal.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                windowReveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Navbar color change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)';
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
});