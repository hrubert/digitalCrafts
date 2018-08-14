let express = require('express');
let router = express.Router();

router.get("/breeds/?", (req, res) => {
    let dataFile = req.app.get("catData");
    let pageHTML = `<link rel="stylesheet" href="/css/styles.css">`;
    let i = 0;

    dataFile.breeds.forEach(element => {
        pageHTML += `
        <li style="list-style: none;">
        <h2><a href="/breeds/${i}">${element.name}</a></h2>
        <p>Lifespan: ${element.lifespan}</p>
        <p>Personality: ${element.personality}</p>
        <img src="/images/${element.img}" alt="picture of breed" />
        </li>
        <br>
        `
        i++;
    });

    res.send(`
    <h1>Cat Breeds</h1>
    <ul>${pageHTML}</ul>
    <a href="/"><button>Home</button></a>`   
    ); 
})

router.get("/breeds/:breedID", (req, res) => {
    let dataFile = req.app.get("catData");
    let pageHTML = `<link rel="stylesheet" href="/css/styles.css">`;

    if (req.params.breedID < dataFile.breeds.length) {
        let breed = dataFile.breeds[req.params.breedID];  
        pageHTML += (`
            <li style="list-style: none;">
            <h2>${breed.name}</h2>
            <p>Lifespan: ${breed.lifespan}</p>
            <p>Personality: ${breed.personality}</p>
            <img src="/images/${breed.img}" alt="picture of breed" >
            <br>
            </li>
        `);
    }

    res.send(`<ul>${pageHTML}</ul>
        <a href="/"><button>Home</button></a>`);

});

module.exports = router;