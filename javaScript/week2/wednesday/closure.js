// counter 1

function counter() {
    let i = 0;
    return function () {
        i++;
        console.log(i);
    };
}

// var count1 = counter();
// var count2 = counter();
// count1();
// count1();
// count2();
// count2();
// count1();

// counter 2

function counter(count) {
    let i = count;
    return function () {
        i++;
        console.log(i);
    };
}

// var count1 = counter(4);
// count1()
// count1()

function counter(count) {
    let i = count;
    return {
        increment: function () {
            i++;
            console.log(i);
        },
        decrement: function () {
            i--;
            console.log(i);
        }
    }
}

var count = counter(4);
count.increment();
count.increment();
count.decrement();
count.decrement();