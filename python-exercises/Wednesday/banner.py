# Given a string, input by the user, print that string with a box around it. 
# The box should stretch to the length of the string. 

s = input("What would you like a banner around? ")

for i in range(0, 3):
    if i != 1:
        print('*' * (len(s) + 2))
    else:
        print("*" + s + "*")