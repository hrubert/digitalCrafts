let nums = process.argv.slice(2,);

let sum = nums.reduce((x, y) => Number(x) + Number(y));

console.log(sum);
