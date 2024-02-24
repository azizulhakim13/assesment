window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar_top');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

