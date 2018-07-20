var suits = ["S", "D", "C", "H"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var scores = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
dhand = [];
phand = [];

function getDeck() {
    var deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            var card = {
                value: values[j],
                suit: suits[i],
                score: scores[j]
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

deck = shuffleDeck(getDeck());

function getCardImg(card) {
    return `images/${card.value +card.suit}.jpg`;
}

function calculatePoints(arr) {
    let score = 0;
    arr.forEach(x => score += x.score);
    return score;
}

document.getElementById("deal-button").addEventListener("click", function () {
    checkCards();
    var dealerCards = document.querySelectorAll("#dealer-hand div img");
    for (var i = 0; i < dealerCards.length; i++) {
        let nextCard = deck.pop();
        dhand.push(nextCard);
        if (i == 0) {
            dealerCards[i].setAttribute("src", "images/Red_back.jpg");
        } else {
            dealerCards[i].setAttribute("src", getCardImg(nextCard));
        }
    }
    var playerCards = document.querySelectorAll("#player-hand div img");
    for (var i = 0; i < 2; i++) {
        let nextCard = deck.pop();
        phand.push(nextCard);
        playerCards[i].setAttribute("src", getCardImg(nextCard));
    }
    document.getElementById("player-points").textContent = calculatePoints(phand);
    document.getElementById("deal-button").disabled = true;
}, false);


document.getElementById("hit-button").addEventListener("click", function () {
    checkCards();
    let playerDiv = document.querySelector("#player-hand");
    let newDiv = document.createElement("div");
    newDiv.classList = "col-1";
    playerDiv.appendChild(newDiv);
    let newImg = document.createElement("img");
    let nextCard = deck.pop();
    phand.push(nextCard);
    newImg.setAttribute("src", getCardImg(nextCard));
    newDiv.appendChild(newImg);
    document.getElementById("player-points").textContent = calculatePoints(phand);
    if (calculatePoints(phand) > 21) {
        for (let i = 0; i < phand.length; i++) {
            if (phand[i].value == "A") {
                phand[i].score = 1;
                document.getElementById("player-points").textContent = calculatePoints(phand);
            }
        }
        if (calculatePoints(phand) > 21) {
            determineWinner(calculatePoints(phand), calculatePoints(dhand));
        }
    }
}, false);


document.getElementById("stand-button").addEventListener("click", function () {
    checkCards();
    document.getElementById("hit-button").disabled = true;
    while (calculatePoints(dhand) < 17) {
        let dealerDiv = document.querySelector("#dealer-hand");
        let newDiv = document.createElement("div");
        newDiv.classList = "col-1";
        dealerDiv.appendChild(newDiv);
        let newImg = document.createElement("img");
        let nextCard = deck.pop();
        dhand.push(nextCard);
        newImg.setAttribute("src", getCardImg(nextCard));
        newDiv.appendChild(newImg);
        if (calculatePoints(dhand) > 21) {
            for (let i = 0; i < dhand.length; i++) {
                if (dhand[i].value == "A") {
                    dhand[i].score = 1;
                }
            }
        }

    }
    determineWinner(calculatePoints(phand), calculatePoints(dhand));
}, false);

function determineWinner(player, dealer) {
    document.getElementById("hiddenCard").setAttribute("src", getCardImg(dhand[0]));
    document.getElementById("dealer-points").textContent = dealer;
    if (dealer > 21) {
        document.querySelector("#bust").textContent = "YOU WIN";
    } else if (player > 21) {
        document.querySelector("#bust").textContent = "BUST!";
    } else if (player > dealer) {
        document.querySelector("#bust").textContent = "YOU WIN!";
    } else {
        document.querySelector("#dbust").textContent = "DEALER WINS!";
    }
    setTimeout(function () {
        var playerCards = document.querySelectorAll("#player-hand div img");
        var dealerCards = document.querySelectorAll("#dealer-hand div img");
        dhand = [];
        phand = [];
        for (let i = 0; i < 2; i++) {
            playerCards[i].setAttribute("src", "");
            dealerCards[i].setAttribute("src", "");
        }
        document.getElementById("player-points").textContent = "";
        document.getElementById("dealer-points").textContent = "";
        document.querySelector("#bust").textContent = "";
        document.querySelector("#dbust").textContent = "";
        var pdivs = document.querySelectorAll("#player-hand div");
        for (let i = 2; i < pdivs.length; i++) {
            pdivs[i].parentNode.removeChild(pdivs[i]);
        }
        var ddivs = document.querySelectorAll("#dealer-hand div");
        for (let i = 2; i < ddivs.length; i++) {
            ddivs[i].parentNode.removeChild(ddivs[i]);
        }
        document.getElementById("deal-button").disabled = false;
        document.getElementById("hit-button").disabled = false;
    }, 3000);


}

function checkCards() {
    if (deck.length < 5) {
        let deckCopy = deck;
        deck = deckCopy.concat(shuffleDeck(getDeck()));
    }
}