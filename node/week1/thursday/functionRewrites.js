// rewrite as a callback function

function add(x, y, callback) {
    setTimeout(function (){
        callback(x + y);
    }, 1000);
}
add(2, 3, function (result) {
    console.log(result);
});

function subtract(x, y, callback) {
    setTimeout(function () {
        callback(x - y);
    }, 1000);
}
subtract(10, 9, function (result) {
    console.log(result);
})

function greeting(person, callback) {
    setTimeout(function() {
        callback('Hola, ' + person + '!');
    }, 1000);
}
greeting("Levi", function (result) {
    console.log(result);
})

function product(numbers, callback) {
    setTimeout(() => {
        var result = numbers.reduce(function (a, b) {
            return a * b;
        }, 1);
        callback(result);
    }, 1000);
    
}
product([2, 3, 4, 6], function(result) {
    console.log(result);
})