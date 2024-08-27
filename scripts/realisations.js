// Initilisation des données
let stands = [];

async function initializeStands() {
  try {
    const response = await fetch('/scripts/stands.json');
    stands = await response.json();
    console.log('Données récupérées:', stands);
    updateUI();
    showStands();
    sortBtn();
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
        aStandElement.setAttribute('surface', stands[i].surface);
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

  // Disable scrolling
  const body = document.querySelector('body');
  body.classList.add('stop-scrolling');

  const divFullscreenElement = document.createElement('div');
  divFullscreenElement.classList.add('fullscreen');

  const imgFullscreenElement = document.createElement('img');
  imgFullscreenElement.src = stands[index].photos[0];

  const btnExitElement = document.createElement('button');
  btnExitElement.classList.add('close-btn');
  const iCloseElement = document.createElement('i');
  iCloseElement.classList.add('fa-solid', 'fa-xmark');
  btnExitElement.appendChild(iCloseElement);

  const btnPrevElement = document.createElement('button');
  btnPrevElement.classList.add('prev-btn', 'nav-btn');
  const iArrowLeftElement = document.createElement('i');
  iArrowLeftElement.classList.add('fa-solid', 'fa-angle-left');
  btnPrevElement.appendChild(iArrowLeftElement);

  const btnNextElement = document.createElement('button');
  btnNextElement.classList.add('next-btn', 'nav-btn');
  const iArrowRightElement = document.createElement('i');
  iArrowRightElement.classList.add('fa-solid', 'fa-angle-right');
  btnNextElement.appendChild(iArrowRightElement);

  divFullscreenElement.appendChild(imgFullscreenElement);
  divFullscreenElement.appendChild(btnExitElement);
  divFullscreenElement.appendChild(btnPrevElement);
  divFullscreenElement.appendChild(btnNextElement);

  document.body.appendChild(divFullscreenElement);
  let indexPhoto = 0;

  // Bouton X
  btnExitElement.addEventListener('click', () => {
    divFullscreenElement.remove();
    body.classList.remove('stop-scrolling');
  });

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
    return indexPhoto;
  });
}

// Bouton Sort
function sortBtn() {
  const buttons = document.querySelectorAll('.btn button');
  const items = document.querySelectorAll('.gallerie a');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Retire la classe 'selected' de tous les boutons
          buttons.forEach(btn => btn.classList.remove('selected'));
          // Ajouter la classe 'selected' au bouton cliqué
          this.classList.add('selected');
          
          const filter = this.id;
          items.forEach(item => {
              const size = parseInt(item.getAttribute('surface'));

              if (filter === 'sortAll') {
                  item.style.display = 'block';
              } else if (filter === 'sortSmall' && size < 50) {
                  item.style.display = 'block';
              } else if (filter === 'sortMedium' && size >= 50 && size <= 100) {
                  item.style.display = 'block';
              } else if (filter === 'sortLarge' && size > 100) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
};

// Appel initializeStands au chargement de la page
document.addEventListener('DOMContentLoaded', initializeStands);