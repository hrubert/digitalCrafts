// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`
}
// console.log(madlib("Tracy", "computer science"));
// console.log(madlib("Levi", "lunch"));


// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
function tipCalculatior1(bill, service) {
    var tipAmount;
    switch (service) {
        case 'good':
            tipAmount = 0.2;
            break;
        case 'fair':
            tipAmount = 0.15;
            break;
        case 'bad':
            tipAmount = 0.1;
            break;
        default:
            tipAmount = 0;
    }
    return bill * tipAmount;
}

// console.log(tipCalculatior1(100, 'good'));
// console.log(tipCalculatior1(40, 'fair'));


// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function tipCalculatior2(bill, service) {
    var tipAmount;
    switch (service) {
        case 'good':
            tipAmount = 0.2;
            break;
        case 'fair':
            tipAmount = 0.15;
            break;
        case 'bad':
            tipAmount = 0.1;
            break;
        default:
            tipAmount = 0;
    }
    return bill + bill * tipAmount;
}

// console.log(tipCalculatior2(100, 'good'));
// console.log(tipCalculatior2(40, 'fair'));


// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:


// Using a while loop

function printNumbers(start, stop) {
    var i = start;
    while (i <= stop) {
        console.log(i);
        i++;
    }
}

// printNumbers(10, 20);

// Using a for loop.

function printNumbers2(start, stop) {
    for (let i = start; i <= stop; i++) {
        console.log(i);
    }
}

// printNumbers2(1, 10);

// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(size) {
    var i = 0;
    while (i < size) {
        console.log("*".repeat(size));
        i++;
    }
}

// printSquare(3);
// printSquare(5);

// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(width, height) {
    var i = 0;
    while (i < height) {
        if (i == 0 || i == (height - 1)) {
            console.log("*".repeat(width));
        } else {
            console.log("*" + " ".repeat(width - 2) + "*")
        }
        i++;
    }
}

// printBox(6, 4);
// printBox(8, 3);

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(str) {
    console.log("*".repeat(str.length + 4));
    console.log(`* ${str} *`);
    console.log("*".repeat(str.length + 4));

}

// printBanner("I love cheese!")


// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

function leetSpeak(str) {
    let leetDict = {
        "a": 4,
        "e": 3,
        "g": 6,
        "l": 1,
        "o": 0,
        "s": 5,
        "t": 7
    }

    let leet = str.toLowerCase().split("");
    for (var letter in leet) {
        if (leet[letter] in leetDict) {
            leet[letter] = leetDict[leet[letter]];
        }
    }
    console.log(leet.join(""));
}

// leetSpeak("Tracy is the most leet dark souls player");

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

function longLongVowels(word) {
    var previousLetter;
    var vowelList = ["a", "e", "i", "o", "u"];
    for (let letter of word) {
        if (letter == previousLetter && vowelList.includes(letter)) {
            var cutHere = word.indexOf(letter);
            return word.slice(0, cutHere) + letter.repeat(3) + word.slice(cutHere, );
        } else {
            previousLetter = letter;
        }
    }
    return word;
}

// console.log(longLongVowels("Good"));
// console.log(longLongVowels("Man"));


// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

function positiveNumbers(arr) {
    var resultsArr = arr.filter(num => num > 0);
    console.log(resultsArr);
}


// positiveNumbers([1, -3, 5, -3, 0]); 
// [1, 5, 0] 
// positiveNumbers([1, 2, 3]); 
// [1, 2, 3] 
// positiveNumbers([-1, -2, -3]);

// Bonus: Caesar Cipher
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

function cipher(str) {
    let encoded = "";
    for (var letter in str) {
        let char = str.charCodeAt(letter);
        if ((char > 64 && char < 78) || (char > 97 && char < 110)) {
            char += 13;
        } else if ((char > 77 && char < 91) || (char > 109 && char < 123)) {
            char -= 13;
        }
        encoded += String.fromCharCode(char);
    }
    return encoded;
}

console.log(cipher('Genius without education is like silver in the mine'));

// Bonus: Caesar Cipher 2
// Write a function decipher which is given a string, an offset, and returns the original message.

function decipher(str, offset) {
    let str2 = str.toLowerCase()
    let decoded = "";
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    for (var letter of str2) {
        if (alphabet.includes(letter)) {
            var idx = alphabet.indexOf(letter) - offset;
            if (idx > -1) {
                decoded += alphabet[idx];
            } else {
                decoded += alphabet[26 + idx];
            }
        } else {
            decoded += letter;
        }
    }
    return decoded;
}

console.log(decipher('pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.', 7));