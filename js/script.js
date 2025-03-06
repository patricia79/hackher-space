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

// ADN
const n = 19
const rots = [
  { ry: 270, a:0.5 },
  { ry: 0,   a:0.85 },
  { ry: 90,  a:0.4 },
  { ry: 180, a:0.0 }
]

gsap.set(".face", {
  z: 200,
  rotateY: i => rots[i].ry,
  transformOrigin: "50% 50% -201px"
});

for (let i=0; i<n; i++){
  let die = document.querySelector('.die')
  let cube = die.querySelector('.cube')
  
  if (i>0){    
    let clone = document.querySelector('.die').cloneNode(true);
    document.querySelector('.tray').append(clone);
    cube = clone.querySelector('.cube')
  }
  
  gsap.timeline({repeat:-1, yoyo:true, defaults:{ease:'power3.inOut', duration:1}})
  .fromTo(cube, {
    rotateY:-90
  },{
    rotateY:90,
    ease:'power1.inOut',
    duration:2
  })
  .fromTo(cube.querySelectorAll('.face'), {
    color:(j)=>'hsl('+(i/n*75+5)+', 47%,'+(100*[rots[3].a, rots[0].a, rots[1].a][j])+'%)'
  },{
    color:(j)=>'hsl('+(i/n*75+10)+', 37%,'+(100*[rots[0].a, rots[1].a, rots[2].a][j])+'%)'
  }, 0)
  .to(cube.querySelectorAll('.face'), {
    color:(j)=>'hsl('+(i/n*75+40)+', 97%,'+(100*[rots[1].a, rots[2].a, rots[3].a][j])+'%)'
  }, 1)
  .progress(i/n)
}

gsap.timeline()
  .from('.tray', {yPercent:-3, duration:2, ease:'power1.inOut', yoyo:true, repeat:-1}, 0)
  .fromTo('.tray', {rotate:-15},{rotate:15, duration:4, ease:'power1.inOut', yoyo:true, repeat:-1}, 0)
  .from('.die', {duration:0.01, opacity:0, stagger:{each:-0.05, ease:'power1.in'}}, 0)
  .to('.tray', {scale:1.2, duration:2, ease:'power3.inOut', yoyo:true, repeat:-1}, 0)

window.onload = window.onresize = ()=> {
  const h = n*56
  gsap.set('.tray', {height:h})
  gsap.set('.pov', {scale:innerHeight/h})
}