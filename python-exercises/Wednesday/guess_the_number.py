import random

secret_number = random.randint(1, 10)
guess = int(input("I am thinking of a number between 1 and 10. What is the number? "))
count = 1
while (count < 5) :
    if guess == secret_number:
        print("Congrats. You win!")
        if (input("Do you want to play again (Y or N)?") == 'Y'):
            secret_number = random.randint(1,10)
            count = 1
            guess = int(input("I am thinking of a number between 1 and 10. What is the number? "))
        else:
            print("Bye")
            break
    if guess > secret_number:
        print("{} is too high.".format(guess))
    if guess < secret_number:
        print("{} is too low.".format(guess))        
    count += 1
    print("You have {} guesses left".format(6 - count))
    if count == 5:
        print("Sorry, you ran out of guesses")
        if (input("Do you want to play again (Y or N)?") == 'Y'):
            secret_number = random.randint(1,10)
            count = 1
            guess = int(input("I am thinking of a number between 1 and 10. What is the number? "))
        else:
            print("Bye")
            break
    else:
        guess = int(input("What's the number? "))

