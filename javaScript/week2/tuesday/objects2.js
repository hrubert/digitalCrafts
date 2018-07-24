var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function() {
        console.log(`First name: ${this.firstName}, Last name: ${this.lastName}, Eye color: ${this.eyeColor}, Hair color: ${this.hairColor}.`)
    } 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;
// console.log(daughter.eyeColor);
// daughter.showInfo();

class Person {
    constructor (name) {
        this.name = name; 
        this.friends = []; 
    }

    addFriend (friend) { 
        this.friends.push(friend); 
    } 
   
    createGreeting (other) { 
        return 'Yo ' + other.name + '! from ' + this.name + '.'; 
    }
   
    greet (other) {
        console.log(this.createGreeting(other)); 
    }

    lazyGreet (other) {
        let greeting = this.createGreeting(other);
        setTimeout(function () {
            console.log(greeting); 
        }, 2000);
    }

    createGreetingsForFriends () {
        let friendsGreetings =[];
        friendsGreetings = this.friends.map(x => `Yo ${x.name}! from ${this.name}.`)
        return friendsGreetings
    } 
}

var mike = new Person('mike');
var john = new Person('john');
var levi = new Person('levi');
var grace = new Person('grace');
mike.addFriend(john);
mike.addFriend(levi);
mike.addFriend(grace);
console.log(mike.createGreetingsForFriends());
