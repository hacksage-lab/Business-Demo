// Smooth scroll for links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle contact form (no backend)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! We'll get back to you shortly.");
  e.target.reset();
});
