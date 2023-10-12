// #Parole Palindrome
// Chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola e ti dirò se è palindroma");
console.log(word,typeof(word));

const inverseWord = invertWord(word);

// Confronto le parole e stamperò se sono palindrome o meno
if(word === inverseWord){
    console.log(`La parola "${word}" è palindroma`)
} else {
    console.log(`La parola "${word}" non è palindroma`)
}


// Functions
// creo una funzione che inverte la parola inserita
function invertWord (string){
    const inverseString = string.split('').reverse().join('');
    return inverseString;
}

console.log(invertWord(word));