function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        var SM = arr[i].avgAlt
        var orbitalP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + SM, 3)/GM));
        newArr.push({name: arr[i].name, orbitalPeriod: orbitalP});
        }
    return newArr;
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));