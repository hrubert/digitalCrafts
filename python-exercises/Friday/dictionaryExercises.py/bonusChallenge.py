import LetterSummary
import wordSummary

def top3(dict):
    topList = []
    for i in range(0, 3):
        max1 = (max(dict.values()))
        for item in dict:
            if dict[item] == max1:
                topList.append(item)
                break
        del dict[item]
    print(topList)
        

top3(LetterSummary.letter_histogram("bananas ssssss"))