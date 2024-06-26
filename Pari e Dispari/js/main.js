'use strict'

// definisco una variabile con il valore di un prompt che chiede pari o dispari 
const sceltaUtente = prompt('pari o dispari?').toLowerCase();

// definisco varibili del numero minimo e il numero massimo per futuro cambio più semplice del calcolo del numero random
const minimo = 1;
const massimo = 5;

// controllo che l' utente scriva solo pari o dispari
if (sceltaUtente === "pari" || sceltaUtente === "dispari") {

    // definisco una variabile con un valore di prompt 1-5 - numerico numero dell'utente (1/5)
    const numeroUtente = Number(prompt('Scegli un numero da 1 a 5'));

    // controllo che utente può inserire solo numeri interi da 1 e 5
    if (!isNaN(numeroUtente) && Number.isInteger(numeroUtente) && numeroUtente >= minimo && numeroUtente <= massimo) {

        // Creo una funzione per generare un numero random (valore del computer)
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // dichiaro una variabile con il valore della funzione
        const numeroComputer = getRndInteger(minimo, massimo);

        // calcolo la somma dichiarandone una variabile
        const somma = Number(numeroComputer) + Number(numeroUtente);

        // creo una funzione che ci dice se il valore somma è pari o dispari
        function pariDispari() {
            if (somma % 2 == 0) {
                return ('pari')
            } else {
                return ('dispari');
            };
        };
        const risultato = pariDispari();

        // dichiaro vincitore con una funzione
        function result() {
            if (sceltaUtente === risultato) {
                return ('Bravo! Hai vinto!')
            }
            return ('Peccato! Hai perso!');
        };

        // stampo verdetto
        console.log(`${result()} Hai scelto il numero ${numeroUtente}, io ho scelto ${numeroComputer}, la somma è ${somma} quindi il risultato è ${risultato} e la tua scelta è stata ${sceltaUtente}`);
        alert(`${result()} Hai scelto il numero ${numeroUtente}, io ho scelto ${numeroComputer}, la somma è ${somma} quindi il risultato è ${risultato} e la tua scelta è stata ${sceltaUtente}`);

    } else {
        alert('Puoi scegliere solo numeri interi da 1 a 5 compresi');
    };

} else {
    alert('Puoi digitare solo pari o dispari !');
};