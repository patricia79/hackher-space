// Carousel Script
// Declaración de constantes y variables
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

// Situamos la última imagen en la primera posición
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// Movimiento del carrusel a la dcha
const moverDcha = ()=>{
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = '-200%'; /* Desplazo el visor a un margen del -200% ...*/
    slider.style.transition = 'all 0.5s'; /* ... con una transición de 0.5s*/
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%'
    }, 500);
}

btnRight.addEventListener('click', moverDcha);

// Movimiento del carrusel a la izqda
const moverIzqda = ()=>{
    let sliderSection = document.querySelectorAll('.slider-section');
    let.sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s'; /* ... con una transición de 0.5s*/
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%'
    }, 500);
}

btnLeft.addEventListener('click', moverIzqda);

// Automatizar el movimiento
setInterval(moverDcha, 4000);

// Termes i Condicions
