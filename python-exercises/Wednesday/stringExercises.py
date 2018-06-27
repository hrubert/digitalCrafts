
# 1. given a string, uppercase it
upperString = input("Type a string to uppercase it: ")
print(upperString.upper())

# 2. given a string, capitalize it
capString = input("Type a string to capitalize it: ")
print(capString.capitalize())

# 3. given a string, reverse it
revString = input("Type a string to reverse it: ")
revString = list(revString)
revString.reverse()
print("".join(revString))

# 4. given a paragraph of text, print it in leetspeak
toLeet = list(input("What do you want in leetspeak?: "))
for character in toLeet:
    if character.upper() == 'A':
        toLeet[toLeet.index(character)] = '4'
    elif character.upper() == 'E':
        toLeet[toLeet.index(character)] = '3'
    elif character.upper() == 'G':
        toLeet[toLeet.index(character)] = '6'
    elif character.upper() == 'I':
        toLeet[toLeet.index(character)] = '1'
    elif character.upper() == 'O':
        toLeet[toLeet.index(character)] = '0'
    elif character.upper() == 'S':
        toLeet[toLeet.index(character)] = '5'
    elif character.upper() == 'T':
        toLeet[toLeet.index(character)] = '7'
print(''.join(toLeet))

# 5 give a string, extend a double vowel to five ex Good => Gooood
dblvwl = input("Give me a word to double its long vowels: ")
result = dblvwl
for i in range(0, len(dblvwl) - 1):
    if dblvwl[i] == dblvwl[i+1]:
        result = dblvwl[0:i] + dblvwl[i]*3 + dblvwl[i:]
        break

print(result)

# 6 print the caesar's cypher of a string
cypher = list(input("What would you like to decode?").lower())
for i in range(0, len(cypher)):
    letter = ord(cypher[i])
    if letter > 96 and letter < 110:
        letter += 13
    elif letter > 109 and letter < 123:
        letter -= 13
    letter = chr(letter)
    cypher[i] = letter
print("".join(cypher))