let express = require('express');
let router = express.Router();

router.get("/breeds/?", (req, res) => {
    let dataFile = req.app.get("catData");

    res.render('allCats', {
        catList: dataFile.breeds
    })
})

router.get("/breeds/:breedID", (req, res) => {
    let dataFile = req.app.get("catData");

    res.render('oneCat', {
        oneCat: dataFile.breeds[req.params.breedID]
    })
    // res.send(`<ul>${pageHTML}</ul>
    //     <a href="/"><button>Home</button></a>`);

    // if (req.params.breedID < dataFile.breeds.length) {
    //     let breed = dataFile.breeds[req.params.breedID];  
    //     pageHTML += (`
    //         <li style="list-style: none;">
    //         <h2>${breed.name}</h2>
    //         <p>Lifespan: ${breed.lifespan}</p>
    //         <p>Personality: ${breed.personality}</p>
    //         <img src="/images/${breed.img}" alt="picture of breed" >
    //         <br>
    //         </li>
    //     `);
    // }
});

module.exports = router;