// function to check primes //
// pass in odd numbers
// if prime, skip, add to prime list
// otherwise check it

// subtract prime, divide by 2, see if that is a square 

function isPrime(num) {
    let factor = 2;
    while (factor < num) {
        if (num % factor == 0) {
            return false;
        }
        factor += 1;
    }
    return true;
}

function christianIsWrong(num) {  
    for (let i = 0; i < primeList.length; i++) {
        let tNum = num - primeList[i];
        tNum /= 2;
        if (Math.sqrt(tNum) % 1 == 0) {
            return false;
        }
    }
    return true;
}


var primeList = [];
for (let i = 3; i < 10000; i +=2) {
    if (isPrime(i)) {
        primeList.push(i);
    } else {
        if (christianIsWrong(i)) {
            console.log(i);
            break;
        }
    }
}



