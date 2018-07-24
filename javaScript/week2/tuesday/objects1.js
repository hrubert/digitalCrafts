// function Person(name, email, phone) { 
//     this.name = name; 
//     this.email = email; 
//     this.phone = phone; 
// } 

// Person.prototype.greet = function(other) { 
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
// };

// var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// sonny.greet(jordan);
// jordan.greet(sonny);

// Person.prototype.print = function() {
//     console.log(this.email, this.phone);
// }

// sonny.print();
// jordan.print();

function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function() {
    return `images/${this.point +this.suit}.jpg`;
}

function Hand() {
    this.hand = [];
}


    
Hand.prototype.addCard = function(card) {
    this.hand.push(card);
}

Hand.prototype.getPoints = function(){
    let sum = 0;
    this.hand.forEach(function(x) {
        if (x.point > 9) {
            sum += 10;
        } else if (x.point > 1) {
            sum += x.point;
        } else {
            sum += 11;
        }
    });
    return sum;
}

// var myHand = new Hand();
// myHand.addCard(new Card(5, 'diamonds')); 
// myHand.addCard(new Card(13, 'spades')); 
// console.log(myHand.getPoints());

function Deck() {
    let suits = ["S", "D", "C", "H"];
    let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    this.deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < points.length; j++) {
            this.deck.push(new Card(points[j], suits[i]));
        }
    }

    this.draw = function() {
        return this.deck.pop();
    };
    this.shuffle = function(){
        let array = this.deck;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.deck = array;
    };
    this.numCardsLeft = function() {
        return this.deck.length;
    };
};
 