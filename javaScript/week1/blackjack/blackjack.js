var playerMoney = 200;
var playerBet = 5;
const backs = ["images/blue_back.jpg", "images/Gray_back.jpg", "images/Green_back.jpg", "images/purple_back.jpg", "images/Red_back.jpg", "images/Yellow_back.jpg"];
var dealerBack;
const cardSound = new Audio("sounds/card.wav");
const suits = ["S", "D", "C", "H"];
const points = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


class Card {
    constructor (point, suit, value) {
    this.point = point;
    this.suit = suit;
    this.value = value;
    }
}

Card.prototype.getImageUrl = function() {
    return `images/${this.value +this.suit}.jpg`;
}

class Hand {
    constructor() {
    this.hand = [];
    }
}

Hand.prototype.addCard = function(card) {
    this.hand.push(card);
}

Hand.prototype.getPoints = function() {
    let sum = 0;
    this.hand.forEach(x => sum += x.point);
    return sum;
}

Hand.prototype.hasAce = function() {
    let acePresent = false;
    for (let i = 0; i < this.hand.length; i++) {
        if (this.hand[i].value == "A") {
            this.hand[i].point = 1;
            acePresent = true;
    }
    return acePresent;
    }
}


class Deck{
    constructor() {
    this.deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < points.length; j++) {
            this.deck.push(new Card(points[j], suits[i], values[j]));
        }
    }
    }
}

Deck.prototype.draw = function() {
    return this.deck.pop();
}
    
Deck.prototype.shuffle = function(){
    let array = this.deck;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    this.deck = array;
    dealerBack = backs[Math.floor(Math.random() * backs.length)];
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
}
    
Deck.prototype.checkCards = function() {
    if (this.deck.length < 5) {
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < points.length; j++) {
                this.deck.push(new Card(points[j], suits[i], values[j]));
            }
        }
        this.shuffle();
        dealerBack = backs[Math.floor(Math.random() * backs.length)];
    }
    
}

dhand = new Hand();
phand = new Hand();
var playDeck = new Deck();
playDeck.shuffle();

document.querySelector("#red").addEventListener("click", function () {
    playerBet = 5;
    document.querySelector("#red").style.border = "3px solid white";
    document.querySelector("#blue").style.border = "";
    document.querySelector("#green").style.border = "";
}, false);

document.querySelector("#blue").addEventListener("click", function () {
    playerBet = 10;
    document.querySelector("#blue").style.border = "3px solid white";
    document.querySelector("#red").style.border = "";
    document.querySelector("#green").style.border = "";
}, false);

document.querySelector("#green").addEventListener("click", function () {
    playerBet = 20;
    document.querySelector("#green").style.border = "3px solid white";
    document.querySelector("#blue").style.border = "";
    document.querySelector("#red").style.border = "";
}, false);


document.getElementById("deal-button").addEventListener("click", function () {
    var chips = document.querySelectorAll("#money div");
    for (let i = 0; i < chips.length; i++) {
        chips[i].style.visibility = "hidden";
    }
    playDeck.checkCards();
    var dealerCards = document.querySelectorAll("#dealer-hand div img");
    for (var i = 0; i < dealerCards.length; i++) {
        let nextCard = playDeck.draw();
        dhand.addCard(nextCard);
        if (i == 0) {
            dealerCards[i].setAttribute("src", dealerBack);
            cardSound.play();
        } else {
            dealerCards[i].setAttribute("src", nextCard.getImageUrl());
            cardSound.play();            
        }
    }
    var playerCards = document.querySelectorAll("#player-hand div img");
    for (var i = 0; i < 2; i++) {
        let nextCard = playDeck.draw();
        phand.addCard(nextCard);
        playerCards[i].setAttribute("src", nextCard.getImageUrl());
        cardSound.play();        
    }
    document.getElementById("player-points").textContent = phand.getPoints();
    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;
}, false);


document.getElementById("hit-button").addEventListener("click", function () {
    playDeck.checkCards();
    let playerDiv = document.querySelector("#player-hand");
    let newDiv = document.createElement("div");
    newDiv.classList = "col-1";
    playerDiv.appendChild(newDiv);
    let newImg = document.createElement("img");
    let nextCard = playDeck.draw();
    phand.addCard(nextCard);
    cardSound.play();    
    newImg.setAttribute("src", nextCard.getImageUrl());
    newDiv.appendChild(newImg);
    document.getElementById("player-points").textContent = phand.getPoints();
    if (phand.getPoints() > 21 && phand.hasAce()) {
        phand.getPoints();
        document.getElementById("player-points").textContent = phand.getPoints();   
    }
    if (phand.getPoints() > 21) {
            determineWinner(phand.getPoints(), dhand.getPoints());
     }
       
}, false);


document.getElementById("stand-button").addEventListener("click", function () {
    playDeck.checkCards();
    document.getElementById("hit-button").disabled = true;
    while (true){
        let dealerDiv = document.querySelector("#dealer-hand");
        let newDiv = document.createElement("div");
        newDiv.classList = "col-1";
        dealerDiv.appendChild(newDiv);
        let newImg = document.createElement("img");
        let nextCard = playDeck.draw();
        dhand.addCard(nextCard);
        cardSound.play();        
        newImg.setAttribute("src", nextCard.getImageUrl());
        newDiv.appendChild(newImg);
        if (dhand.getPoints() > 21 && dhand.hasAce()) {
            dhand.getPoints();
        }
        else if (dhand.getPoints() > 17) {
            break;
        }
    }
    determineWinner(phand.getPoints(), dhand.getPoints());
}, false);

function determineWinner(player, dealer) {
    document.getElementById("hiddenCard").setAttribute("src", dhand.hand[0].getImageUrl());
    cardSound.play();    
    document.getElementById("dealer-points").textContent = dealer;
    if (dealer > 21) {
        document.querySelector("#bust").textContent = "YOU WIN";
        playerMoney += playerBet;
    } else if (player > 21) {
        document.querySelector("#bust").textContent = "BUST!";
        playerMoney -= playerBet;
    } else if (player > dealer) {
        document.querySelector("#bust").textContent = "YOU WIN!";
        playerMoney += playerBet;
    } else {
        document.querySelector("#dbust").textContent = "DEALER WINS!";
        playerMoney -= playerBet;
    }
    playerBet = 5;
    document.getElementById("playerMoney").innerText = playerMoney;
    document.getElementById("deal-button").disabled = false;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    setTimeout(function () {
        var playerCards = document.querySelectorAll("#player-hand div img");
        var dealerCards = document.querySelectorAll("#dealer-hand div img");
        dhand.hand = [];
        phand.hand = [];
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
        var chips = document.querySelectorAll("#money");
        document.querySelector("#green").style.border = "";
        document.querySelector("#blue").style.border = "";
        document.querySelector("#red").style.border = "";
        var chips = document.querySelectorAll("#money div");
        for (let i = 0; i < chips.length; i++) {
            chips[i].style.visibility = "visible";
        }
    }, 5000);
}