function positiveNums(arr) {
    return arr.filter(num => num > 0);
}

// console.log(positiveNums([5, -2, 0, 7]));

function evenNums(arr) {
    return arr.filter(num => num % 2 == 0);
}

// console.log(evenNums([5, -2, 0, 7]));

function squareNums(arr) {
    return arr.map(x => x * x);
}

// console.log(squareNums([5, -2, 0, 7]));

var cities = [{
    name: 'Los Angeles',
    temperature: 60.0
}, {
    name: 'Atlanta',
    temperature: 52.0
}, {
    name: 'Detroit',
    temperature: 48.0
}, {
    name: 'New York',
    temperature: 80.0
}];

function coolCities(arr) {
    return arr.filter(x => x.temperature < 70);
}

// console.log(coolCities(cities));

function cityNames(arr) {
    return arr.map(x => x.name);
}

// console.log(cityNames(cities));

var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];

function goodJob(arr) {
    arr.forEach(x => console.log(`Good Job, ${x}!`))
}

// goodJob(people);

function sortArr(arr) {
    return arr.sort();
}
// console.log(sortArr(people));

function sortArrLength(arr) {
    return arr.sort(((a, b) => a.length - b.length));
}

// console.log(sortArrLength(people));
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

function sum(arr) {
    return arr.reduce((x, y) => x + y);
}

function sortArr(arr) {
    return arr.sort((x, y) => sum(x) - sum(y));
}

// console.log(sortArr(arr));

function fun() {
    console.log("Hello, world!");
}

function call3Times(fun) {
    fun();
    fun();
    fun();
}

// call3Times(fun);

function callNTimes(num, fun) {
    for (var i = 0; i < num; i++) {
        fun();
    }
}

// callNTimes(5, fun);

function sum(arr) {
    return arr.reduce((x, y) => x + y);
}

// console.log(sum([1, 2, 3]));

function acronym(arr) {
    return arr.reduce(((x, y) => x + y.slice(0, 1)), '').toUpperCase();
}

// console.log(acronym(['very', 'important', 'person']));
// console.log(acronym(['national', 'aeronautics', 'space', 'administration']));

function myForEach(arr, fun) {
    for (let item of arr) {
        fun(item);
    }
}

var arr = [{
    name: 'Bob'
}, {
    name: 'Alice'
}, {
    name: 'Joe'
}];
// myForEach(arr, function (person) {
//     console.log('Hello, ' + person.name + '!');
// });

function myMap(arr, fun) {
    let newArr = [];
    for (let item of arr) {
        newArr.push(fun(item));
    }
    return newArr;
}

// var arr = [1, 2, 3, 4];
// console.log(myMap(arr, function(x) {
//     return x * x;
// }));

// bonus, ceasar cypher

function cipher(text) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var word = text.split('');
    return word.map(function adjustLetter(letter) {
        var idx = alphabet.indexOf(letter);
        var newIdx = idx + 13;
        if (newIdx >= alphabet.length) {
            newIdx -= 26;
        }
        return alphabet[newIdx];
    }).join("");
    // return word.map(word, adjustLetter);
}

// var encrypted = cipher('GENIUS'); 
// console.log(encrypted);