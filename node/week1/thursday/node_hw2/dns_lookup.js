var dns = require('dns');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name:", function(answer) {
    dns.lookup(answer, (err, address, family) => {
        if (err) throw err;
        console.log('IP Address: ' + address);
    })
    rl.close();
})
