ScrollReveal().reveal('.navbar', {
    delay: 200,
    distance: '400px',
    origin: 'left',
    duration: 1300,
});

ScrollReveal().reveal('.carousel', {
    delay: 300,
    origin: 'right',
    distance: '400px',    
    duration: 2000
});

let header = document.getElementsByTagName('header');
ScrollReveal().reveal(header, {
    delay: 200,
    origin: 'left',
    distance: '400px',    
    duration: 1000
});

ScrollReveal().reveal('.info-one', {
    delay: 200,
    origin: 'right',
    distance: '500px',
    viewFactor: 0.3,    
    duration: 1000
});

ScrollReveal().reveal('.info-two', {
    delay: 200,
    viewFactor: 0.5,    
    duration: 1200
});

ScrollReveal().reveal('.info-about', {
    delay: 400,
    distance: '500px',
    origin: 'right',
    viewFactor: 0.5,    
    duration: 1200
});

ScrollReveal().reveal('.card--tittle', {
    duration: 2000
});

ScrollReveal().reveal('.card', {
    delay: 550,
    duration: 1000
});

let formElement = document.getElementsByTagName('form');
ScrollReveal().reveal(formElement, {
    delay: 550,
    duration: 1000
});