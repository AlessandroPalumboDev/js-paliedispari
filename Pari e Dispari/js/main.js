'use strict'

// definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispar
const sceltaUtente = prompt('pari o dispari?').toLowerCase();

// definisco una variabile con un valore di prompt 1-5 - numerico numero dell'utente (1/5)
const numeroUtente = Number(prompt('Scegli un numero da 1 a 5'));

// controllo che l' utente scriva solo pari o dispari
if (sceltaUtente === "pari" || sceltaUtente === "dispari"){
    
    // controllo che utente può inserire solo numeri interi da 1 e 5
    if (!isNaN(numeroUtente) && Number.isInteger(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5){
    
    
    
    
    
    }else{
    alert('Puoi scegliere solo numeri interi da 1 a 5 compresi');
    };
    
} else{
    alert('Puoi digitare solo pari o dispari !');
};