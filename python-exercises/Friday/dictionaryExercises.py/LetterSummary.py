def letter_histogram(word):
    dictOfLetters = {}
    for letter in word:
        if letter in dictOfLetters:
            dictOfLetters[letter] += 1
        else:
            dictOfLetters[letter] = 1

    return dictOfLetters

print(letter_histogram("bananas"))