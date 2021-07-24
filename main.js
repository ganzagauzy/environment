
window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
//bg

function changeBg() {

    const images = [
        'url("image/bg2.jpg")',
        'url("image/bg4.jpg")',
        'url("image/bg3.jpg")',
        
    ]

    const hero = document.querySelector('.hero')

    const bg = images[Math.floor(Math.random() * images.length)];

    hero.style.backgroundImage = bg ;

}

setInterval(changeBg, 2000)


// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
