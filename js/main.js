// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dammi una parola:");
parolaPalindroma(parola);

// function
function parolaPalindroma(string){
  // per splittare la parola
  var splitParola = string.split("");
  // per invertire l'ordine delle lettere
  var reverseParola = splitParola.reverse();
  // per riunire di nuovo le lettere
  var joinParola = reverseParola.join("");

  if (joinParola == parola){
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// verifico se l'utente scegli pari o dispari
var condizione = true;
while (condizione) {
  var sceltaUtente = prompt("pari o dispari?");
  switch (sceltaUtente) {
    case "pari":
      condizione = false;
      break;
    case "dispari":
      condizione = false;
      break;
  }
}

// verifico che l'utente inserisca numero da 1 a 5
do {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (!(numeroUtente >= 1 && numeroUtente <= 5));

var numeroComputer = randomNum(1,5);
console.log("numero random computer: " + numeroComputer);
console.log("numero utente: " + numeroUtente);

sommaNumeri(numeroUtente, numeroUtente);
console.log(numeroUtente + numeroComputer);


// function
function randomNum(min, max){
  return parseInt(Math.random() * (max - min) + min);
}

function sommaNumeri(num1, num2){
  var somma = num1 + num2;

  if (somma%2 == 0) {
    console.log("La somma è pari");
  } else {
    console.log("La somma è dispari");
  }

  if (sceltaUtente == "pari" && somma%2 == 0) {
    console.log("Vince l'utente");
  } else {
    console.log("Vince il computer");
  }
}
