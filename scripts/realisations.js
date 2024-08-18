// Initilisation des données
let stands = [];

async function initializeStands() {
  try {
    const response = await fetch('/scripts/stands.json');
    stands = await response.json();
    console.log('Données récupérées:', stands);
    updateUI();
    showStands();
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
}

// Mise à jour de l'interface utilisateur
function updateUI() {
  console.log("Mise à jour de l'UI avec", stands.length, 'stands');
}

// Affichage des stands 
function showStands () {
    for (i = 0; i < stands.length; i++) {
        // Création des éléments
        const aStandElement = document.createElement('a');
        const imgStandElement = document.createElement('img');
        imgStandElement.src = stands[i].photos.présentation;
        const h3StandElement = document.createElement('h3');
        h3StandElement.innerHTML = `${stands[i].stand} - ${stands[i].surface}m²`;
        const pStandElement = document.createElement('p');
        const iStandElement = document.createElement('i');
        iStandElement.classList.add("fa-solid", "fa-location-dot");
        const textStandElement = document.createTextNode(` ${stands[i].salon} - ${stands[i].localisation}`);
        
        // Ajout dans le DOM
        const divGallerie = document.querySelector('.gallerie');
        divGallerie.appendChild(aStandElement);
        aStandElement.appendChild(imgStandElement);
        aStandElement.appendChild(h3StandElement);
        aStandElement.appendChild(pStandElement);
        pStandElement.appendChild(iStandElement);
        pStandElement.appendChild(textStandElement);
        
    }
}

// Appel initializeStands au chargement de la page
document.addEventListener('DOMContentLoaded', initializeStands);