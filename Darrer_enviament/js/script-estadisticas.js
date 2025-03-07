// ACCIÓN DE LOS BOTONES DE ESTADÍSTICAS

// Botón de la presentación - SHEFIGURES
const BotonesSheFigures = document.querySelectorAll('.boton-shefigures');

BotonesSheFigures.forEach(CadaBoton => {
    CadaBoton.addEventListener('click', function() {
        window.open ('https://projects.research-and-innovation.ec.europa.eu/en/knowledge-publications-tools-and-data/interactive-reports/she-figures-2024', '_blank');
    });
});


// Botón del grafico 1 y 2 - ILOSTAT
const BotonesILOSTAT = document.querySelectorAll('.boton-ilostat');

BotonesILOSTAT.forEach(CadaBoton => {
    CadaBoton.addEventListener('click', function() {
        window.open ('https://ilostat.ilo.org/es/blog/where-women-work-female-dominated-occupations-and-sectors/?utm_source=chatgpt.com', '_blank');
    });
});


// Botón del grafico 3 - High Tech Eurostat
const BotonesHighTech = document.querySelectorAll('.boton-hightech');

BotonesHighTech.forEach(CadaBoton => {
    CadaBoton.addEventListener('click', function() {
        window.open ('https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20231030-1', '_blank');
    });
});
