function collatz(num) {
    console.log(num)
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
            console.log(num);
        } else {
            num = num * 3 + 1;
            console.log(num);
        }
    }
}

collatz(20);
collatz(40);