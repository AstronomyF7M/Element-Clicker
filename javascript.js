
// script.js
let fireCount = 0;
let waterCount = 0;
let earthCount = 0;
let airCount = 0;

function clickElement(element) {
    switch (element) {
        case 'fire':
            fireCount+1;
            document.getElementById('fireCount').innerText = fireCount;
            break;
        case 'water':
            waterCount++;
            document.getElementById('waterCount').innerText = waterCount;
            break;
        case 'earth':
            earthCount++;
            document.getElementById('earthCount').innerText = earthCount;
            break;
        case 'air':
            airCount++;
            document.getElementById('airCount').innerText = airCount;
            break;
    }
}

function upgrade() {
    // Upgrade logic can be implemented here
    alert("Upgrade feature coming soon!");
}
