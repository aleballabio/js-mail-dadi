//Variables

const diceMin = 1
const diceMax = 6

const diceGiocatoreResult = Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin;
const diceBancoResult = Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin;
let diceResult = null;
let textResult = document.querySelector('.result')

// Bollean Dice Result Cases
if (diceGiocatoreResult == diceBancoResult) {
    diceResult = true;
}
else if (diceGiocatoreResult < diceBancoResult) {
    diceResult = false;
}

else {
    diceResult = null;
}

// What happens with the Cases
switch (diceResult) {
    case true:
        textResult.innerHTML += ('Hai Vinto!');
        break;

    case false:

        textResult.innerHTML += ('Hai Perso!');
        break;

    case null:
        textResult.innerHTML += ('Pareggio');
        break;
}