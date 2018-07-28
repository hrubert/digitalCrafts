for (var i = 99; i > 0; i--) {
    if (i % 7 == 0 && i % 5 == 0) {
        console.log(`${i} Bottles of Miller Lite, take one down, pass it around, ${i-1} bottles of beer on the wall`);
    } else if (i % 7 == 0) {
        console.log(`${i} Bottles of Miller, take one down, pass it around, ${i-1} bottles of beer on the wall`);
    } else if (i % 5 == 0) {
        console.log(`${i} Bottles of Lite beer, take one down, pass it around, ${i-1} bottles of beer on the wall`);
    } else {
        console.log(`${i} Bottles of beer, take one down, pass it around, ${i-1} bottles of beer on the wall`);
    }
}