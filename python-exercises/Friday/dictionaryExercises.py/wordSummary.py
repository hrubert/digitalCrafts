def word_histogram(paragraph):
    dictOfWords = {}
    paragraph = paragraph.lower().split()
    for word in paragraph:
        if word in dictOfWords:
            dictOfWords[word] += 1
        else:
            dictOfWords[word] = 1
    return dictOfWords

print(word_histogram("To be or not to be"))