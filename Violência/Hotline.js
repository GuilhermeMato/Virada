const paineis = document.getElementById('paineis');
const panels = document.querySelectorAll('.panel');

function rotatePanels() {
    const firstPanel = panels[0];
    paineis.appendChild(firstPanel);
}

setInterval(() => {
    rotatePanels();
}, 3000); // Troca a cada 3 segundos