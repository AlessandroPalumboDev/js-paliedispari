Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma   

- creazione variabile con prompt per inserimento della parola (.split(' ').join('') per rimuovere gli spazi e .toLowerCase()per trasformare tutto in minuscolo)

- creazione funzione per ribaltare una stringa
    function ribaltata(variabilePrompt) {
    return variabilePrompt
    - per dividerla in un array momentaneo
        .split("")
    - per ribaltarla all'interno dell'array momentaneo
        .reverse()
    - per ritrasformarla in stringa
        .join("");
    }

- dichiaro una variabile della funzione invocandola

- se il prompt e la variabile ribaltata sono identici: il testo inserito è palindromo altrimenti non lo è