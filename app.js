const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade ease forwards ${index / 7 + 1}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

window.addEventListener('load', () =>{
    const rock = document.querySelector('.rock');
    rock.classList.add('rock-finish')
});
