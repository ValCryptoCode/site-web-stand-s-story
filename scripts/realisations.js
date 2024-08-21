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
    for (let i = 0; i < stands.length; i++) {
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

        // Action bouton gallerie
        aStandElement.addEventListener('click', () => showFullscreenGallerie(i));
    }
}

// Gestion de l'affichage de la gallerie
function showFullscreenGallerie(index) {
  let indexPhoto = 0;

  const divFullscreenElement = document.createElement('div');
  divFullscreenElement.classList.add('fullscreen');

  const imgFullscreenElement = document.createElement('img');
  imgFullscreenElement.src = stands[index].photos.présentation;

  const btnExitElement = document.createElement('button');
  btnExitElement.innerText = 'X';

  const btnPrevElement = document.createElement('button');
  btnPrevElement.innerText = '<';

  const btnNextElement = document.createElement('button');
  btnNextElement.innerText = '>';

  divFullscreenElement.appendChild(imgFullscreenElement);
  divFullscreenElement.appendChild(btnExitElement);
  divFullscreenElement.appendChild(btnPrevElement);
  divFullscreenElement.appendChild(btnNextElement);

  document.body.appendChild(divFullscreenElement);

  btnExitElement.addEventListener('click', () => divFullscreenElement.remove());
  //btnPrevElement.addEventListener('click', () => navigateImage(index, indexPhoto));
  btnNextElement.addEventListener('click', () => navigateNextImage(index, indexPhoto));

}

// Navigation dans la gallerie

function navigateNextImage(index, indexPhoto) {
  // if (indexPhoto < 0) indexPhoto = stands[index].photos.autre.length;
  // if (indexPhoto > stands[index].photos.autre.length) indexPhoto = 0;
  
  const fullscreenImage = document.querySelector('.fullscreen img');
  fullscreenImage.src = stands[index].photos.autre[indexPhoto];
  console.log(indexPhoto);
  indexPhoto += 1
  
  console.log(indexPhoto);
  return indexPhoto;
}


// Appel initializeStands au chargement de la page
document.addEventListener('DOMContentLoaded', initializeStands);