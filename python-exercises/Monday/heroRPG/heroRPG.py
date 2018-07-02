#!/usr/bin/env python

# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee
class Character:
    def __init__(self, health, power, name):
        self.health = health
        self.power = power
        self.name = name
    def alive(self):
        return self.health > 0
    def attack(self, enemy):
        if enemy.name == 'zombie':
            self.power = 0
            print("Your attacks are useless against the undead!")
        enemy.health -= self.power
        if (self.name == 'hero'):
            print("You do {} damage to the {}.".format(self.power, enemy.name))
            if enemy.health <= 0:
                print("The {} is dead.".format(enemy.name))
        else:
            print("The {} does {} damage to you.".format(self.name, self.power))
            if enemy.health <= 0:
                print("You are dead.")
    def print_status(self):
        if self.name == 'hero':
            print("You have {} health and {} power.".format(self.health, self.power))
        else:
            print("The goblin has {} health and {} power.".format(self.health, self.power))

hero = Character(10, 5, "hero")
goblin = Character(6, 2, "goblin")
zombie = Character(10, 1, "zombie")

def main(enemy):
    while enemy.alive() and hero.alive():
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
            break
        else:
            print("Invalid input {}".format(raw_input))
        if enemy.health > 0:
            # enemy attacks hero
            enemy.attack(hero)

main(zombie)