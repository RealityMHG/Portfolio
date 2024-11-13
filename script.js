window.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navBar = document.querySelector('.navbar');
    const navBarLinks = document.querySelectorAll('.navbar a');

    const videos = document.querySelectorAll('video');

    window.addEventListener('resize', () => {
        updateSize();
    });

    navBarLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navBar.classList.toggle('active');
        });
    });

    videos.forEach((video) => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.pause();
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