// #Numero pari o dispari

// Functions
// Funzione per un numero random tra 1 e 5
function getRandomNumber (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min );
}

// Funzione per sommare i numeri del pc e dell'utente e definire se sia pari o dispari
function numberSumOddEven (num1,num2) {
    sum = num1 + num2;
    console.log(sum);
    const even = sum % 2 === 0;
    return even;
}

// Chiedo all'utente pari o dispari ed un numero da 1 a 5
const userOddEvenChose = prompt('Scegli tra Pari o Dispari').trim().toLowerCase();
console.log(userOddEvenChose, typeof(userOddEvenChose));

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

const pcNumber = getRandomNumber(1,5);
console.log(pcNumber);


// Scrivo la condizione per cui il giocatore vince o perde
    if((userOddEvenChose === 'pari') && (numberSumOddEven(userNumber,pcNumber) === true)){
        console.log('Hai vinto, il numero è Pari');
    } else if ((userOddEvenChose === 'dispari') && (numberSumOddEven(userNumber,pcNumber) === false)) {
        console.log('Hai vinto, il numero è Dispari');
    } else {
        console.log('Hai perso, riprova');
    }

    console.log(numberSumOddEven(userNumber,pcNumber));