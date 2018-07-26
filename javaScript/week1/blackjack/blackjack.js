var playerMoney = 200;
var playerBet = 5;
const backs = ["images/blue_back.jpg", "images/Gray_back.jpg", "images/Green_back.jpg", "images/purple_back.jpg", "images/Red_back.jpg", "images/Yellow_back.jpg"];
var dealerBack;
const cardSound = new Audio("sounds/card.wav");
const suits = ["S", "D", "C", "H"];
const points = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


class Card {
    constructor(point, suit, value) {
        this.point = point;
        this.suit = suit;
        this.value = value;
    }
}

Card.prototype.getImageUrl = function () {
    return `images/${this.value +this.suit}.jpg`;
}

class Hand {
    constructor() {
        this.hand = [];
    }
}

Hand.prototype.addCard = function (card) {
    this.hand.push(card);
}

Hand.prototype.getPoints = function () {
    let sum = 0;
    this.hand.forEach(x => sum += x.point);
    return sum;
}

Hand.prototype.hasAce = function () {
    let acePresent = false;
    for (let i = 0; i < this.hand.length; i++) {
        if (this.hand[i].value == "A") {
            this.hand[i].point = 1;
            acePresent = true;
        }
    }
    return acePresent;
}


class Deck {
    constructor() {
        this.deck = [];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < points.length; j++) {
                this.deck.push(new Card(points[j], suits[i], values[j]));
            }
        }
    }
}

Deck.prototype.draw = function () {
    return this.deck.pop();
}

Deck.prototype.shuffle = function () {
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

Deck.prototype.numCardsLeft = function () {
    return this.deck.length;
}

Deck.prototype.checkCards = function () {
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

$("#red").click(function () {
    playerBet = 5;
    $("#playerMoney").text(playerMoney - playerBet);
    $("#money").fadeOut("slow");
});

$("#blue").click(function () {
    playerBet = 10;
    $("#playerMoney").text(playerMoney - playerBet);
    $("#money").fadeOut("slow");
});

$("#green").click(function () {
    playerBet = 20;
    $("#playerMoney").text(playerMoney - playerBet);
    $("#money").fadeOut("slow");
});

$("#deal-button").click(function () {
    $("#money").hide();
    playDeck.checkCards();
    var $dealerCards = $("#dealer-hand div img");
    $($dealerCards).hide();
    for (var i = 0; i < $dealerCards.length; i++) {
        let nextCard = playDeck.draw();
        dhand.addCard(nextCard);
        if (i == 0) {
            $($dealerCards[i]).attr("src", dealerBack).fadeIn(1000);
            cardSound.play();
        } else {
            $($dealerCards[i]).attr("src", nextCard.getImageUrl()).fadeIn(1000);
            cardSound.play();
        }
    }
    var $playerCards = $("#player-hand div img");
    $($playerCards).hide();
    for (var i = 0; i < 2; i++) {
        let nextCard = playDeck.draw();
        phand.addCard(nextCard);
        $($playerCards[i]).attr("src", nextCard.getImageUrl()).fadeIn(1000);
        cardSound.play();
    }
    $("#player-points").text(phand.getPoints());

    $("#deal-button").attr("disabled", "disabled");
    $("#hit-button").removeAttr("disabled");
    $("#stand-button").removeAttr("disabled");
});


$("#hit-button").click(function () {
    playDeck.checkCards();
    let $playerDiv = $("#player-hand");
    let $newDiv = $("<div>", {
        "class": "col-1",
    });
    $newDiv.hide()
    $playerDiv.append($newDiv);
    let $newImg = $("<img>");
    let nextCard = playDeck.draw();
    phand.addCard(nextCard);
    cardSound.play();
    $newImg.attr("src", nextCard.getImageUrl());
    $newDiv.append($newImg).fadeIn(1000);
    $("#player-points").text(phand.getPoints());
    if (phand.getPoints() > 21 && phand.hasAce()) {
        phand.getPoints();
        $("#player-points").text(phand.getPoints());
        document.getElementById("player-points").textContent = phand.getPoints();
    }
    if (phand.getPoints() > 21) {
        determineWinner(phand.getPoints(), dhand.getPoints());
    }

});


$("#stand-button").click(function () {
    playDeck.checkCards();
    $("#hit-button").attr("disabled", "disabled");
    while (dhand.getPoints() < 17) {
        let $dealerDiv = $("#dealer-hand");
        let $newDiv = $("<div>", {
            "class": "col-1"
        });
        $newDiv.hide();
        $dealerDiv.append($newDiv);
        let $newImg = $("<img>");
        let nextCard = playDeck.draw();
        dhand.addCard(nextCard);
        cardSound.play();
        $newImg.attr("src", nextCard.getImageUrl());
        $newDiv.append($newImg);
        $newDiv.fadeIn(1000);
        if (dhand.getPoints() > 21 && dhand.hasAce()) {
            dhand.getPoints();
        }
    }
    determineWinner(phand.getPoints(), dhand.getPoints());
});


function determineWinner(player, dealer) {
    $("#hiddenCard").attr("src", dhand.hand[0].getImageUrl());
    cardSound.play();
    $("#dealer-points").text(dealer);
    if (dealer > 21) {
        $("#bust").text("YOU WIN");
        playerMoney += playerBet;
    } else if (player > 21) {
        $("#bust").text("BUST!");
        playerMoney -= playerBet;
    } else if (player > dealer) {
        $("#bust").text("YOU WIN!");
        playerMoney += playerBet;
    } else {
        $("#dbust").text("DEALER WINS!");
        playerMoney -= playerBet;
    }
    playerBet = 5;
    $("#playerMoney").text(playerMoney);
    $("#deal-button").removeAttr("disabled");
    $("#hit-button").attr("disabled", "disabled");
    $("#stand-button").attr("disabled", "disabled");
    setTimeout(function () {
        let $playerCards = $("#player-hand div img");
        let $dealerCards = $("#dealer-hand div img");
        dhand.hand = [];
        phand.hand = [];
        for (let i = 0; i < 2; i++) {
            $($playerCards[i]).hide()
            $($dealerCards[i]).hide()
        }
        $("#player-points").text("");
        $("#dealer-points").text("");
        $("#bust").text("");
        $("#dbust").text("");
        let $pdivs = $("#player-hand div");
        for (let i = 2; i < $pdivs.length; i++) {
            $pdivs[i].remove();
        }
        let $ddivs = $("#dealer-hand div");
        for (let i = 2; i < $ddivs.length; i++) {
            $ddivs[i].remove();
        }

        $("#money").fadeIn("slow");

    }, 3000);
}