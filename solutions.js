  function getCenterCoordinates(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;
    return { x, y };
}

function connectBubbles(bubble1, bubble2) {
    const coords1 = getCenterCoordinates(bubble1);
    const coords2 = getCenterCoordinates(bubble2);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", coords1.x);
    line.setAttribute("y1", coords1.y);
    line.setAttribute("x2", coords2.x);
    line.setAttribute("y2", coords2.y);
    line.setAttribute('class', 'connection');

    svgContainer.appendChild(line);
}

function updateConnections() {
    svgContainer.innerHTML = '';
    connectBubbles(bulle1, bulle2);
    connectBubbles(bulle2, bulle3);
    connectBubbles(bulle3, bulle4);
    connectBubbles(bulle5, bulle6);
    connectBubbles(bulle6, bulle7);
    connectBubbles(bulle6, bulle8);
    connectBubbles(bulle6, bulle9);
    connectBubbles(bulle10, bulle11);
    connectBubbles(bulle11, bulle12);
    connectBubbles(bulle12, bulle13);
    connectBubbles(bulle14, bulle15);
    connectBubbles(bulle14, bulle16);
    connectBubbles(bulle16, bulle17);
    connectBubbles(bulle17, bulle18);
    connectBubbles(bulle17, bulle19);
    connectBubbles(bulle19, bulle20);
}

window.onload = function() {
    const svgContainer = document.getElementById("svgContainer");

    updateConnections();

    window.onresize = updateConnections;
};