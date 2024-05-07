'use strict';

// creazione variabile con prompt per inserimento della parola (.split(' ').join('') per rimuovere gli spazi)
let input = prompt('inserisci la parola o la frase da verificare').toLocaleLowerCase().split(' ').join('');

// creazione funzione per ribaltare una stringa 
// divindendola in un array momentaneo
// ribaltando l'array momentaneo
// ritrasformare l'array momentaneo in una stringa
function operazioniRibaltamento(input) {
    return input.split('').reverse().join('');
}

// dichiaro una variabile della funzione invocandola
const ribaltato = operazioniRibaltamento(input);

// confronto l'input con il risultato ribaltato
if(input === ribaltato){
    alert('il testo è palindromo')
}else{
    alert('il testo non è palindromo')
};