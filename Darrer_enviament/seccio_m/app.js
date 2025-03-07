function loadContent(language) {
    fetch('./traduccions.json')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("content");
            const selectedLangData = data[language].info;
            const selectedLangTitle = data[language].title;

            // Limpiar contenido previo
            content.innerHTML = "";
            const title_main  = selectedLangTitle;
            const title_h1 = document.createElement("h1");
            title_h1.textContent = title_main;
            content.appendChild(title_h1);

            for (const orgName in selectedLangData) {
                const org = selectedLangData[orgName];
               
                const orgDiv = document.createElement("div");
                orgDiv.classList.add("organization");  

                const title = document.createElement("h2");
                title.textContent = orgName;
                orgDiv.appendChild(title);
            
                const mission = document.createElement("p");
                mission.textContent = org.Mission || org.Missió;
                orgDiv.appendChild(mission);
            
                const activitiesTitle = document.createElement("h3");
                activitiesTitle.textContent = language === 'ca' ? "Activitats i recursos" : "Activities and Resources";
                orgDiv.appendChild(activitiesTitle);
            
                const activitiesKey = language === 'ca' ? "Activitats i recursos" : "Activities and Resources";
                const activities = org[activitiesKey];
            
                if (Array.isArray(activities)) {
                    const activitiesList = document.createElement("ul");
                    activities.forEach(activity => {
                        const listItem = document.createElement("li");
                        listItem.textContent = activity;
                        activitiesList.appendChild(listItem);
                    });
                    orgDiv.appendChild(activitiesList);
                } else {
                    const noActivities = document.createElement("p");
                    noActivities.textContent = language === 'ca' ? "No hi ha activitats disponibles" : "No activities available";
                    orgDiv.appendChild(noActivities);
                }
            
                content.appendChild(orgDiv);
            }
            
        })
        .catch(error => console.error('Error loading the JSON:', error));
}


// Función que se ejecuta al cambiar el idioma
function changeLanguage() {
    const selectedLang = document.getElementById("language-selector").value;
    loadContent(selectedLang); // Cargar contenido según el idioma seleccionado
}

// Inicializamos con el idioma por defecto (en inglés)
document.addEventListener("DOMContentLoaded", function() {
    loadContent('en'); // Cargar contenido en inglés por defecto
});
