function largestPalendrome() {
    for (var i = 999; i > 899; i--) {
        for (var j = i; j > 899; j--) {
            let num = i * j;
            if (isPal(num)){
                return(num);
            }
        }
    }
}

console.log(largestPalendrome());

function isPal(num) {
    palStr = num.toString().split("");
    for (var i = 0; i < palStr.length / 2; i++) {
        if (palStr[i] != palStr[palStr.length - (1 + i)]) {
            return false;
        }
    }
    return true;
}

// 906609