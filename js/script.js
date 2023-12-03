// Funzioni

// Creare numeri casuali unici
function numeriCasualiUnici(){
    let numeriGenerati = []
    for (i=0; numeriGenerati.length <= 4; i++ ){
        let numeroCasuale = Math.floor(Math.random() * 100 +1)
        if (!numeriGenerati.includes(numeroCasuale)) {
            numeriGenerati.push(numeroCasuale);
        }
    }
    return numeriGenerati
}

// Dichiarazioni

// Numneri unici
let numeri = numeriCasualiUnici()
console.log(numeri)

// Numeri inseriti dall'utente giusti e sbagliati
let numeriUtenteGiusti = []
let numeriUtenteSbagliati = []

// Contenitore numeri html
let contenitore_numeri = document.getElementById("contenitore-numeri")

// Scrivere i numeri unici sul contenitore
contenitore_numeri.textContent = numeri

// cancellarli dopo 30 secondi
setTimeout(function(){
    contenitore_numeri.textContent = ""
    let numeriUtente = []
}, 5000)

// chiedere di nuovo i numeri dopo 30 secondi
setTimeout(function(){


    // Richiesta
    for (i=0 ; i < 5 ; i++){
    let numeroUtente = prompt("Inserisci uno dei numeri precedentemente visti")
        numeroUtente = parseInt(numeroUtente)
        console.log(numeroUtente)
        
        // numero non inserito
        while (isNaN(numeroUtente)) {
            numeroUtente = prompt("Tenta la fortuna");
            numeroUtente = parseInt(numeroUtente);
        }


        // numero già inserito
        while(numeriUtenteGiusti.includes(numeroUtente) || numeriUtenteSbagliati.includes(numeroUtente)){
            numeroUtente = prompt("Numero già inserito, prova con un'altro")
            numeroUtente = parseInt(numeroUtente)
        }



        // Numero Giusto
        if(numeri.includes(numeroUtente)){
            numeriUtenteGiusti.push(numeroUtente)
            console.log(numeriUtenteGiusti)
        }

        // Numero sbagliato
        else{
            numeriUtenteSbagliati.push(numeroUtente)
            console.log(numeriUtenteSbagliati)
        }
    }
    
    // Risultato
    if(numeriUtenteGiusti.length == 5){
        contenitore_numeri.textContent = "HAI VINTO!"
    }
    else{
        contenitore_numeri.textContent = ("Mi dispiace hai perso ne hai indovinate " + numeriUtenteGiusti.length + "(" + numeriUtenteGiusti + ")" + ", e " + numeriUtenteSbagliati + " sono sbagliati")
    }
}, 5050)


