// Carousel Script
// Declaración de constants i variables
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

// Situem la darrera imatge a la primera posició
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// Moviment del carrusel a la dreta
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

// Moviment del carrusel a l'esquerra
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

// Automatitzar el moviment
setInterval(moverDcha, 4000);

// Validar formulari
let camposSinValidar = document.querySelectorAll('.campo_no_validado');
let mensajeError = document.querySelectorAll('span');
let mensajeEnvio = document.querySelector('p');

const expresiones = {
    nom: /^[a-zA-ZÀ-ÿ\s]{1,120}$/,
    cognoms: /^[a-zA-ZÀ-ÿ\s]{1,120}$/,
    correu: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-,]+$/
}

const campos = {
    nom: false,
    cognoms: false,
    correu: false
}

camposSinValidar.forEach((campo) =>{
    campo.addEventListener('keyup', validarFormulario);
    campo.addEventListener('blur', validarFormulario);
});

function validarFormulario(e){
    // console.log(e.target.name);
    switch(e.target.name){
        case 'nom':
            validarCampo(expresiones.nom, e.target, 0);
            break;
        case 'cognoms':
            validarCampo(expresiones.cognoms, e.target, 1);
            break;
        case 'correu':
            validarCampo(expresiones.correu, e.target, 2);
            break;
    }
};

function validarCampo(expresion, entrada, numero){
    // console.log(entrada.value);
    if(expresion.test(entrada.value)){
        // console.log(`${entrada.value} validada`);
        mensajeError[numero].innerHTML = '';
        mensajeError[numero].removeAttribute('class', 'error');
        campos[entrada.name] = true;
    }else{
        // console.log(`${entrada.value} no validada`);
        mensajeError[numero].innerHTML = '+ Introdueix un valor correcte';
        mensajeError[numero].setAttribute('class', 'error');
    }
};

document.querySelector('input[type="submit"]').addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log(campos.nombre);
    // console.log(campos.correo);
    // console.log(campos.telefono);
    // console.log(campos.dni);
    if (campos.nom && campos.correu && campos.cognoms){
        mensajeEnvio.innerHTML = 'MENSAJE ENVIADO CON ÉXITO';
        setTimeout(() =>{
            mensajeEnvio.innerHTML = '';
            document.formulari.submit();
        }, 2000);
    }else{
        mensajeEnvio.innerHTML = 'REVISE LOS CAMPOS DE SU FORMULARIO!!!';
    }
});
