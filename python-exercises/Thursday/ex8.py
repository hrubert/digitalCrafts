def playAgain():
    choice = input("Do you want to play again (Y or N)?")
    if choice == 'Y':
        return True
    else:
        return False

playAgain()