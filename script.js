
// Fonction pour mettre à jour les lignes
function updateLines() {
    const svg = document.getElementById('svg-connect');
    const container = document.querySelector('ul');
    svg.innerHTML = ''; // Efface les anciennes lignes
    const circles = document.querySelectorAll('.circle');
    let prevCircle = circles[0];
  
    for (let i = 1; i < circles.length; i++) {
      const circle = circles[i];
      console.log(circle);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      
      // Calculer le centre du cercle précédent
      const x1 = prevCircle.offsetLeft + prevCircle.offsetWidth / 2;
      const y1 = prevCircle.offsetTop + prevCircle.offsetHeight / 2;
      console.log(container.offsetTop);
      console.log(container);
      
      // Calculer le centre du cercle actuel
      const x2 = circle.offsetLeft + circle.offsetWidth / 2;
      const y2 = circle.offsetTop + circle.offsetHeight / 2;
      
      // Définir les attributs de la ligne
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('class', 'ma-ligne'); // Ajouter une classe à la ligne
  
      
      // Ajouter la ligne au SVG
      svg.appendChild(line);
      
      // Préparer pour le prochain cercle
      prevCircle = circle;
    }
  }

  // Mettre à jour les lignes au chargement de la page
  window.onload = updateLines;
  // Mettre à jour les lignes lorsque la fenêtre est redimensionnée
  window.onresize = updateLines;