'use strict';

// creazione variabile con prompt per inserimento della parola (.trim() per rimuovere gli spazi)
let input = prompt('inserisci la parola o la frase da verificare').trim().toLowerCase();

// creazione funzione per ribaltare una stringa
function operazioniRibaltamento(input) {
    return input.split("").reverse().join("");
}

// dichiaro una variabile della funzione invocandola
const ribaltato = operazioniRibaltamento(input);