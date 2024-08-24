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

// Fonction d'Affichage des stands 
function showStands () {
    for (let i = 0; i < stands.length; i++) {
        // Création des éléments
        const aStandElement = document.createElement('a');
        const imgStandElement = document.createElement('img');
        imgStandElement.src = stands[i].photos[0];
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

  const divFullscreenElement = document.createElement('div');
  divFullscreenElement.classList.add('fullscreen');

  const imgFullscreenElement = document.createElement('img');
  imgFullscreenElement.src = stands[index].photos[0];

  const btnExitElement = document.createElement('button');
  btnExitElement.innerText = 'X';
  btnExitElement.classList.add('close-btn');


  const btnPrevElement = document.createElement('button');
  btnPrevElement.innerText = '<';
  btnPrevElement.classList.add('prev-btn', 'nav-btn');

  const btnNextElement = document.createElement('button');
  btnNextElement.innerText = '>';
  btnNextElement.classList.add('next-btn', 'nav-btn');

  divFullscreenElement.appendChild(imgFullscreenElement);
  divFullscreenElement.appendChild(btnExitElement);
  divFullscreenElement.appendChild(btnPrevElement);
  divFullscreenElement.appendChild(btnNextElement);

  document.body.appendChild(divFullscreenElement);
  let indexPhoto = 0;

  // Bouton X
  btnExitElement.addEventListener('click', () => divFullscreenElement.remove());

  // Bouton <
  btnPrevElement.addEventListener('click', () => {
    const fullscreenImage = document.querySelector('.fullscreen img');
    indexPhoto -= 1;
    if (indexPhoto < 0) indexPhoto = stands[index].photos.length - 1;
    if (indexPhoto > stands[index].photos.length - 1) indexPhoto = 0;
    fullscreenImage.src = stands[index].photos[indexPhoto];
    console.log(indexPhoto);
    return indexPhoto;
  });

  // Bouton >
  btnNextElement.addEventListener('click', () => {
    const fullscreenImage = document.querySelector('.fullscreen img');
    indexPhoto += 1;
    if (indexPhoto < 0) indexPhoto = stands[index].photos.length - 1;
    if (indexPhoto > stands[index].photos.length - 1) indexPhoto = 0;
    fullscreenImage.src = stands[index].photos[indexPhoto];
    console.log(indexPhoto);
    return indexPhoto;
  });
}

// Appel initializeStands au chargement de la page
document.addEventListener('DOMContentLoaded', initializeStands);