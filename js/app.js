// #Parole Palindrome
// Chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola e ti dirò se è palindroma");
console.log(word,typeof(word));



// Functions
// creo una funzione che inverte la parola inserita
function invertWord (string){
    const inverseString = string.split('').reverse().join('');
    return inverseString;
}

console.log(invertWord(word));