window.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navBar = document.querySelector('.navbar');
    const navBarLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('resize', () => {
        updateSize();
    });

    navBarLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navBar.classList.toggle('active');
        });
    });

    sizeCheck();

    menuIcon.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    function updateSize(){
        sizeCheck();
    }

    function sizeCheck(){
        if(window.innerWidth >= 995){
            menuIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'block';
        }
    }

});