let express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    let dataFile = req.app.get("catData");
    let catLinks = '';
    let i = 0;

    dataFile.breeds.forEach(element => {
        catLinks += `
        <li><a href ="/breeds/${i}">${element.name}</a></li>
        `
        i++;
    });

    res.send(`
    <link rel="stylesheet" href="/css/styles.css">
    <h1>Cat Breeds of the World</h1>
    <img id="frontImg" src="images/kittens.jpg" alt="kittens"/>
    <ul>
        <li><strong><a href="/breeds">View all cats</a></strong></li>    
        <li><strong><a href="/breeds/${Math.floor(Math.random() * dataFile.breeds.length)}">Get random cat</a></strong></li>
        ${catLinks}
    </ul>
    `);
});

module.exports = router;