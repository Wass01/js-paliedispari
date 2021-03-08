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


var condizione = true;
while (condizione) {
  var sceltaUtente = prompt("pari o dispari?");
  switch (sceltaUtente) {
    case "pari":
      condizione = false;
      sommaNumeri(numeroUtente, numeroComputer);


      break;
    case "dispari":
    condizione = false;
    sommaNumeri(numeroUtente, numeroComputer);
      break;
  }
}

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
randomNum(1,5);


// function
function randomNum(min, max){
  var numeroComputer = Math.random() * (max - min) + min;
  return numeroComputer;
}

function sommaNumeri(num1, num2){
  var somma = num1 + num2;

  if(somma%2){
    console.log("somma è dispari");
  } else {
    console.log("somma è pari");
  }

  return somma;
}
