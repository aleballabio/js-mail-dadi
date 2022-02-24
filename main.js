let arrMail = [
    'giussepina98@gmail.com',
    'marianastasi@gmail.com',
    'popopopop@gmail.com',
    'peperoni98@gmail.com',
    'lovetta99@gmail.com'];

let Mail = false;

let laTuaMail = document.querySelector('.la-tua-mail');

let textMailTrue = "Benvenuto";
let textMailFalse = "Accesso Negato";
let searchEmail = prompt("Qual'è la tua email?");

if (!searchEmail.toLowerCase().includes('@')) {
    alert('Inserisci una Email');
    Mail = null;
}

//In the System
for (let value = 0; value < arrMail.length; value++) {
    if (arrMail[value].toLowerCase() == searchEmail.toLowerCase()) {
        Mail = true;
        laTuaMail.innerHTML = textMailTrue;
    }
}

//Missing on the System
if (Mail === false) {
    laTuaMail.innerHTML = textMailFalse;
}
