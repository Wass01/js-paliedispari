// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Dammi una parola:");
parolaPalindroma(parola);

// function
function parolaPalindroma(string){
  var splitParola = string.split("");
  var reverseParola = splitParola.reverse();
  var joinParola = reverseParola.join("");

  if (joinParola == parola){
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}
