#!/usr/bin/env python

# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee

# warrior 50 percent chance to block
# chance to charm attack
from random import randint

class Character:
    def __init__(self, health, power, name, player):
        self.health = health
        self.power = power
        self.name = name
        self.player = player
        self.money = 50
    def alive(self):
        return self.health > 0
    def attack(self, enemy):
        if enemy.name == "shadow" and randint(1, 10) > 1:
                print("Blending into the shadows, you avoid all damage")
        else:
            enemy.health -= self.power
            if self.player == True:
                print("You do {} damage to the {}.".format(self.power, enemy.name))
                if enemy.health <= 0 and enemy.name != "zombie":
                    print("The {} is dead.".format(enemy.name))
                    hero.money += enemy.bounty
                    print(f"You have {hero.money} coins.")
                    raw_input = input()
                    main(enemylist[randint(0, 1)])                                        
            else:
                print("The {} does {} damage to you.".format(self.name, self.power))
                if enemy.health <= 0:
                    print("You are dead.")
    def print_status(self):
        if self.player == True:
            print("You have {} health and {} power.".format(self.health, self.power))
        else:
            print("The {} has {} health and {} power.".format(self.name,self.health, self.power))
    
class Hero(Character):
    def attack(self, enemy):
        if randint(1, 5) == 1:
            self.power *= 2
            print("You CRIT for double damage!")
            super().attack(enemy)
            self.power /= 2
        else:
            super().attack(enemy)            

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
            main(enemylist[randint(0, 1)])
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
hero = Princess(12, 5, 'princess', True)

shop = {
    'SuperTonic' = 5,
    'Armor' = 30,
    'Evasive Boots' = 25,
    'Chainsaw' = 40,
    'Shotgun' = 40
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
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            # Hero attacks enemy
            hero.attack(enemy)
        elif raw_input == "2":
            pass
        elif raw_input == "3":
            print("Goodbye.")
            exit(0)
        else:
            print("Invalid input {}".format(raw_input))
        if enemy.alive():
            # enemy attacks hero
            enemy.attack(hero)

main(enemylist[randint(0, 1)])