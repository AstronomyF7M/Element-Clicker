// Element Clicker Game Logic
const gameState = {
    atoms: 0,
    currentElementIndex: 0,
    autoClickers: 0,
    elementCost: 100,
    autoClickerCost: 50,
    elements: [
        { name: "Hydrogen", symbol: "H", cost: 100 },
        { name: "Helium", symbol: "He", cost: 500 },
        { name: "Lithium", symbol: "Li", cost: 1000 },
        { name: "Beryllium", symbol: "Be", cost: 5000 },
        { name: "Boron", symbol: "B", cost: 10000 },
        { name: "Carbon", symbol: "C", cost: 50000 }
    ]
};

// DOM Update Function
function updateDisplay() {
    document.getElementById('atoms').textContent = formatNumber(gameState.atoms);
    document.getElementById('currentElement').textContent = gameState.elements[gameState.currentElementIndex].name;
    document.getElementById('currentSymbol').textContent = gameState.elements[gameState.currentElementIndex].symbol;
    document.getElementById('elementCost').textContent = formatNumber(gameState.elementCost);
    document.getElementById('nextElementCost').textContent = formatNumber(gameState.elementCost);
    document.getElementById('autoClickers').textContent = gameState.autoClickers;
    document.getElementById('autoClickerCost').textContent = formatNumber(gameState.autoClickerCost);
}

// Core Game Functions
function clickElement() {
    gameState.atoms += Math.pow(2, gameState.currentElementIndex);
    updateDisplay();
}

function buyElement() {
    if (gameState.atoms >= gameState.elementCost) {
        gameState.atoms -= gameState.elementCost;
        gameState.currentElementIndex = Math.min(gameState.currentElementIndex + 1, gameState.elements.length - 1);
        gameState.elementCost = gameState.elements[gameState.currentElementIndex].cost;
        updateDisplay();
    }
}

function buyAutoClicker() {
    if (gameState.atoms >= gameState.autoClickerCost) {
        gameState.atoms -= gameState.autoClickerCost;
        gameState.autoClickers++;
        gameState.autoClickerCost = Math.round(gameState.autoClickerCost * 1.5);
        updateDisplay();
    }
}

// Helper Function
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Game Loop
function autoClickerLoop() {
    gameState.atoms += gameState.autoClickers * Math.pow(2, gameState.currentElementIndex);
    updateDisplay();
}

// Initialize Game
document.addEventListener('DOMContentLoaded', () => {
    setInterval(autoClickerLoop, 1000);
    updateDisplay();
});
