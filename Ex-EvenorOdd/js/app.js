// #Numero pari o dispari
// Chiedo all'utente pari o dispari ed un numero da 1 a 5

const userOddEvenChose = prompt('Scegli tra Pari o Dispari');
console.log(userOddEvenChose, typeof(userOddEvenChose));

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

const pcNumber = getRandomNumber(1,5)


// Functions
function getRandomNumber (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min );
}

console.log(pcNumber)
