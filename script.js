
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroTitle = document.querySelector('.hero h1');

    // Add hover animation for navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
            link.style.color = '#ff6600';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.color = '#fff';
        });
    });

    // Add animation to hero title on load
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 500);
});
