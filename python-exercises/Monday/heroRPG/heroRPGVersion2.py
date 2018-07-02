#!/usr/bin/env python

# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee

# shotgun enables you to kill zombies
from random import randint

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
    def alive(self):
        return self.health > 0
    def attack(self, enemy):
        if enemy.name == "shadow" and randint(1, 10) > 1:
                print("Blending into the shadows, you avoid all damage")
        else:
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
    def print_status(self):
        if self.player == True:
            print("You have {} health and {} power.".format(self.health, self.power))
        else:
            print("The {} has {} health and {} power.".format(self.name,self.health, self.power))
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
    def swapIt(self, enemy):
        i = self.power
        self.power = enemy.power
        enemy.power = i
    
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

class Medic(Character):
    def print_status(self):
        if randint(1, 5) == 1:
            print("You heal for 2 hp.")
            self.health += 2
        print("You have {} health and {} power.".format(self.health, self.power))

class Shadow(Character):
    pass

class Goblin(Character):
    def __init__(self, health, power, name, player):
        self.health = health
        self.power = power
        self.name = name
        self.player = player
        self.money = 20 
        self.bounty = 5

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

class Coward(Character):
    def print_status(self):
        if self.health < 5:
            print("You lose your nerve and run away screaming.")
            exit(0)
        else:
            print("You have {} health and {} power.".format(self.health, self.power))
# define characters below:

enemy1 = Zombie(10, 1, "zombie", False)
enemy2 = Goblin(6, 2, 'goblin', False)
enemylist = [enemy1, enemy2]
hero = Hero(40, 5, 'princess', True)

shop = {
    'super tonic': 5,
    'armor': 30,
    'evasive boots': 25,
    'chainsaw': 40,
    'shotgun': 40,
    'swap': 15
}

def main(enemy):
    while (hero.alive()):
        hero.print_status()
        enemy.print_status()
        print()
        print("What do you want to do?")
        print("1. fight {}".format(enemy.name))
        print("2. do nothing")
        print("3. flee")
        print("4. use an item")
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
        else:
            print("Invalid input {}".format(raw_input))
        if enemy.alive():
            # enemy attacks hero
            enemy.attack(hero)


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
            elif itemToBuy == "evasive boots":
                hero.evade += 2
            elif itemToBuy == "chainsaw":
                hero.power += 3
            elif itemToBuy == "shotgun":
                hero.shotgun = True
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