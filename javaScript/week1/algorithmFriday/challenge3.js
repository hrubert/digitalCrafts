function smallest(){
    var num = 2000;
    while (!isDivisible(num)){
        num++;
    }
    console.log(num);
}

function isDivisible(num) {
    for (var i = 1; i < 21; i++) {
        if (num % i != 0) {
            return false;
        }
    }
    return true;
}

smallest();

// 232792560