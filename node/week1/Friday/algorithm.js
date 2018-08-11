// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.

// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0
function findPairs(arr) {
    let pairCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(0 - arr[i]) && arr[i] != 0) {
            pairCount++;
        }
    }
    return pairCount / 2 ;
}

console.log(findPairs([-2, 1, 0, 2]));