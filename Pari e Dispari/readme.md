Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

- definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari <!-- sceltaUtente -->

- definisco una variabile con un valore di prompt 1-5 - numerico numero dell'utente (1/5) <!-- numeroUtente -->

- controllo che l' utente scriva solo pari o dispari

    <!-- utente può inserire solo numeri interi da 1 e 5 -->
    - SE (!isNaN(numeroUtente) && Number.isInteger(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5) {

        - Creo una funzione per generare un numero random (valore del computer) <!-- numeroComputer -->
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        - creo una variabile per la somma di numeroUtente + numeroComputer <!-- somma -->
        

        - creo una funzione che ci dice se il valore somma è pari o dispari <!-- risultatoPariDispari -->
        function risultatoPariDispari(){
            se numero utente % 2 = 0{
                return pari};
            oppure{return dispari}
        }

        - dichiaro chi ha vinto

    }
    ELSE stampa messaggio "solo numeri interi da 1 e 5"

ELSE stampa messaggio "solo pari dispari"