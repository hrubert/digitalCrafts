def playAgain():
    choice = input("Do you want to play again (Y or N)?")
    if choice == 'Y':
        return True
    elif choice == 'N':
        return False
    else:
        print("Invalid input")
        playAgain()

playAgain()