// function to return weight per value

function valuePerWeight(obj) {
    var mostToLeast = [];
    for (let item in obj) {
        mostToLeast.push([obj[item].weight, obj[item].value / obj[item].weight]);
    }
    return mostToLeast.sort((a, b) => b[1] - a[1])

}

function maxDuffelBagValue(cakeTypes, capacity) {
    let cakeVal = valuePerWeight(cakeTypes);
    let packValue = 0;
    while (capacity >= 0) {
        for (let i = 0; i < cakeVal.length; i++) {
            if (capacity - cakeVal[i][0] >= 0) {
                capacity -= cakeVal[i][0];
                packValue += (cakeVal[i][1] * cakeVal[i][0]);
                i--;
            }
        }
        break;
    }
    return packValue;
}

var cakeTypes = [{
        weight: 7,
        value: 160
    },
    {
        weight: 3,
        value: 90
    },
    {
        weight: 2,
        value: 15
    },
];

var capacity = 20;


console.log(maxDuffelBagValue(cakeTypes, capacity));