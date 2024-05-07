'use strict'

// definisco una variabile con il valore di un prompt che chiede pari o dispari 
const sceltaUtente = prompt('pari o dispari?').toLowerCase();


// controllo che l' utente scriva solo pari o dispari
if (sceltaUtente === "pari" || sceltaUtente === "dispari") {

    // definisco una variabile con un valore di prompt 1-5 - numerico numero dell'utente (1/5)
    const numeroUtente = Number(prompt('Scegli un numero da 1 a 5'));

    // controllo che utente può inserire solo numeri interi da 1 e 5
    if (!isNaN(numeroUtente) && Number.isInteger(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5) {

        // Creo una funzione per generare un numero random (valore del computer)
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // dichiaro una variabile con il valore della funzione
        const numeroComputer = getRndInteger(1, 5);

        // calcolo la somma dichiarandone una variabile
        const somma = Number(numeroComputer) + Number(numeroUtente);
        console.log(somma);

        // creo una funzione che ci dice se il valore somma è pari o dispari
        function result() {
            if (Number(somma) % 2 == 0) {
                return ('pari')
            } else {
                return ('dispari');
            };
        };
        const risultato = result();

        // dichiaro vincitore e stampo
        if (sceltaUtente === risultato) {
            console.log('Bravo! Hai vinto!')
        } else {
            console.log('Peccato! Hai perso!')
        };

        // stampo verdetto
        console.log(`Hai scelto il numero ${numeroUtente}, io ho scelto ${numeroComputer}, la somma è ${somma} quindi il risultato è ${risultato} e la tua scelta è stata ${sceltaUtente}`);
        alert(`Hai scelto il numero ${numeroUtente}, io ho scelto ${numeroComputer}, la somma è ${somma} quindi il risultato è ${risultato} e la tua scelta è stata ${sceltaUtente}`);

    } else {
        alert('Puoi scegliere solo numeri interi da 1 a 5 compresi');
    };

} else {
    alert('Puoi digitare solo pari o dispari !');
};