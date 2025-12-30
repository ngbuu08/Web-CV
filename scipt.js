window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('div[id]'); 
    const navItems = document.querySelectorAll('#nav li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) { 
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active'); 
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});