// 0 is closed 1 is opened

function getFinalOpenedDoors() {
    let doorArr = [];
    let finalDoorArr = [];
    for (let i = 0; i < 101; i++) {
        doorArr.push(0);
    } 
    let counter = 1;
    while (counter < 101) {
        let j = counter;
        while (j < 101) {
            let door = doorArr[j];
            if (door == 0) {
                doorArr[j] = 1;
            }
            else {
                doorArr[j] = 0;
            }
            j += counter;
        }
        counter ++;
    }
    for (let door in doorArr) {
        if (doorArr[door] == 1) {
            finalDoorArr.push(Number(door));
        }
    }
    return finalDoorArr;
}

console.log(getFinalOpenedDoors());