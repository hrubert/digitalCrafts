wantACoin = input("You have 0 coins. Do you want a coin? ")
coins = 0
while wantACoin == 'yes':
    coins += 1
    wantACoin = input("You have {} coins. Do you want another? ".format(coins))

print("Bye")