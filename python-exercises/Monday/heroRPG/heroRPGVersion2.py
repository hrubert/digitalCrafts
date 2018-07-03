#!/usr/bin/env python

# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee

from random import randint

# basic character class

class Character:
    def __init__(self, health, power, name, player):
        self.health = health
        self.power = power
        self.name = name
        self.player = player
        self.money = 50
        self.itemList = []
        self.armor = 0
        self.evade = 0
        self.shotgun = False
        self.swap = False
    
    # checks if the character is alive
    def alive(self):
        return self.health > 0

    # basic attack function. Depending on if the character is a "player" character
    # chooses who to attack
    def attack(self, enemy):
        # gives shadow class a chance to evade enemy hits
        if enemy.name == "shadow" and randint(1, 10) > 1:
                print("Blending into the shadows, you avoid all damage")
        else:
            # player attack
            if self.player == True:
                enemy.health -= self.power
                print("You do {} damage to the {}.".format(self.power, enemy.name))
                if enemy.health <= 0 and (enemy.name != "zombie" or self.shotgun == True):
                    print("The {} is dead.".format(enemy.name))
                    hero.money += enemy.bounty
                    print(f"You have {hero.money} coins.")
                    enemy1.health = 10
                    enemy2.health = 6
                    purchase_item()                                       
            # enemy attack
            else:
                if hero.armor >= self.power:
                    print("armor blocked the damage")
                else:
                    enemy.health -= (self.power - hero.armor)
                    print("The {} does {} damage to you.".format(self.name, self.power))
                if hero.evade > 0:
                    num = randint(0, (10 + hero.evade))
                    if hero.evade >= num :
                        print("you evaded the hit")
                    else:
                        enemy.health -= self.power
                else:
                    enemy.health -= self.power
                if enemy.health <= 0:
                    print("You are dead.")
    
    # logs the status between each combat
    def print_status(self):
        if self.player == True:
            print("You have {} health and {} power.".format(self.health, self.power))
        else:
            print("The {} has {} health and {} power.".format(self.name,self.health, self.power))
    
    # enables the player to use items during a combat turn
    def use_item(self):
        print("Here is what's in your backpack: {}".format(hero.itemList))
        item_to_use = input("What item would you like to use?")
        if item_to_use == "super tonic":
            self.health += 10
            self.itemList.remove(item_to_use)
            print("You heal to {} hp".format(self.health))
        if item_to_use == "swap":
            self.itemList.remove(item_to_use)
            print("You use swap")
            self.swap = True
        else:
            pass

    # implements the swap. Swap persists during enemies attack, hero's next attack
    # then reverts
    def swapIt(self, enemy):
        i = self.power
        self.power = enemy.power
        enemy.power = i

# basic hero class with a chance to crit 
class Hero(Character):
    def attack(self, enemy):
        crit = False
        if randint(1, 5) == 1:
            self.power *= 2
            crit = True
            print("You CRIT for double damage!")
            super().attack(enemy)
        else:
            super().attack(enemy)
        if crit == True:
            self.power /= 2
            crit = False

# medic class with a chance to heal after attacked
class Medic(Character):
    def print_status(self):
        if randint(1, 5) == 1:
            print("You heal for 2 hp.")
            self.health += 2
        print("You have {} health and {} power.".format(self.health, self.power))

# shadow class. Pass 1 as it's hp. Will dodge 9 out of 10 attacks
class Shadow(Character):
    pass

# princess class. Can charm/instakill enemies
class Princess(Character):
    def attack(self, enemy):
        if randint(1, 3) == 1:
            print("You charm the enemy with your cuteness! The battle is over.")
            hero.money += enemy.bounty
            print(f"You have {hero.money} coins.")
            raw_input = input()                        
            purchase_item()
        else:
            super().attack(enemy)

# Mercenary class. Does more damage, but will run away a low health
class Mercenary(Character):
    def print_status(self):
        if self.health < 5:
            print("You lose your nerve and run away screaming.")
            exit(0)
        else:
            print("You have {} health and {} power.".format(self.health, self.power))

# enemy one -- goblin
class Goblin(Character):
    def __init__(self, health, power, name, player):
        self.health = health
        self.power = power
        self.name = name
        self.player = player
        self.money = 20 
        self.bounty = 5

# enemy 2, zombie. Can only be killed by Princess's charm ability or, with shotgun
class Zombie(Character):
    def __init__(self, health, power, name, player):
        self.health = health
        self.power = power
        self.name = name
        self.player = player
        self.money = 20
        self.bounty = 10
    def alive(self):
        return True


# define characters below. If additional enemy types are created, add them to the enemy list.
# hero is defined as:
# hero = ClassName(hp, power, 'classname', Player(T or F))

enemy1 = Zombie(10, 1, "zombie", False)
enemy2 = Goblin(6, 2, 'goblin', False)
enemylist = [enemy1, enemy2]
hero = Hero(40, 5, 'hero', True)

# super tonic - heal for 10 hp
# armor - adds 2 damage reduction to the hero
# evasive potion - adds evasion. Stacks, but never reaches 100%
# chainsaw - increases hero damage by 3
# shotgun - makes zombies killable
# swap - changes attack values between hero and enemy for one turn

shop = {
    'super tonic': 5,
    'armor': 30,
    'evasive potion': 25,
    'chainsaw': 40,
    'shotgun': 40,
    'swap': 15
}
counter = 0
# game engine. After 3 sucessful combats, player has the chance to exit game with a win.
def main(enemy):
    global counter
    while (hero.alive()):
        counter += 1
        hero.print_status()
        enemy.print_status()
        print()
        print("What do you want to do?")
        print("1. fight {}".format(enemy.name))
        print("2. do nothing")
        print("3. flee")
        print("4. use an item")
        if counter > 3:
            print("5. return to town")
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            # Hero attacks enemy
            hero.attack(enemy)
            if hero.swap == True:
                hero.swapIt(enemy)
                hero.swap = False
        elif raw_input == "2":
            pass
        elif raw_input == "3":
            print("Goodbye.")
            exit(0)
        elif raw_input == "4":
            hero.use_item()
            if hero.swap == True:
                hero.swapIt(enemy)
        elif raw_input == "5":
            print("You escape the dungeon with your loot.")
            print("You win!")
            exit(0)
        else:
            print("Invalid input {}".format(raw_input))
        if enemy.alive():
            # enemy attacks hero
            enemy.attack(hero)

# Item shop functionality. To give the player the opportunity to buy something each
# turn, the item shop is called first, then invokes the game loop.

# armor, shotgun, and chainsaw are one time use items. The potions can be purchased
# as many times as the hero can afford it. Only one item can be purchased between each
# combat.

def purchase_item():
    choice = input(("Would you like to buy some equipment before heading out? (y/n)"))
    if choice == 'y':
        print("Here are the available items. You have {} coins".format(hero.money))
        for key in shop:
            print("{}, {} coins".format(key.capitalize(), shop[key]))
        itemToBuy = input("What would you like to buy? ").lower()
        if shop[itemToBuy] < hero.money and itemToBuy in shop.keys():
            hero.money -= shop[itemToBuy]
            hero.itemList.append(itemToBuy)
            if itemToBuy == "armor":
                hero.armor = 2
                del shop[itemToBuy]
            elif itemToBuy == "evasive potion":
                hero.evade += 2
            elif itemToBuy == "chainsaw":
                del shop[itemToBuy]
                hero.power += 3
            elif itemToBuy == "shotgun":
                hero.shotgun = True
                del shop[itemToBuy]
            print("You bought {}! You have {} coins left".format(itemToBuy, hero.money))
            print("Armor is automatically equipped. Remember to use consumables!")
            input("Press enter to continue")
            main(enemylist[randint(0, 1)])
        else:
            print("Sorry, you were unable to purchase the item.")
            main(enemylist[randint(0, 1)])
    else:
        main(enemylist[randint(0, 1)])

purchase_item()