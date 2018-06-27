# 1 Given an list of numbers, print their sum.
numList = [1, 2, 3, 4, 5]
sum = 0

for num in numList:
    sum += num

print(sum)

# 2 Given an list of numbers, print the largest of the numbers.
numList2 = [3, 8, 10, 13, 2]
bigNum = 0

for num in numList2:
    if num > bigNum:
        bigNum = num
print(bigNum)


# 3 Given an list of numbers, print the smallest of the numbers.
numList3 = [3, 8, 10, 13, 2]
smallNum = numList3[0]

for num in numList3:
    if num < smallNum:
        smallNum = num

print(smallNum)

# 4 Given an list of numbers, print each number in the list that is even.
numList4 = [3, 8, 10, 13, 2]

for num in numList4:
    if num % 2 == 0:
        print(num)

# 5 Given an list of numbers, print each number in the list that is greater than zero.
numList5 = [0, 2, -4, 78, -9]

for num in numList5:
    if num > 0:
        print(num) 

# 6 Positive Numbers II
numList6 = [0, 2, -4, 78, -9]
newNumList6 = []
for num in numList6:
    if num > 0:
        newNumList6.append(num)

print(newNumList6)

# 7 Given an list of numbers, and a single factor (also a number), create a new 
# list consisting of each of the numbers in the first list multiplied by the factor. Print this list.

numList7 = [0, 2, -4, 78, -9]
factor = int(input("choose a number (1-9) to multiply the list by: "))
newNumList7 = []
for num in numList7:
    newNumList7.append(num * factor)

print(newNumList7)

# 8 Given two lists of numbers of the same length, create a new list by multiplying 
# the pairs of numbers in corresponding positions in the two lists.

nL1 = [2, 4, 5]
nL2 = [2, 3, 6]
nL3 = []
for i in range (0, len(nL1)):
    nL3.append(nL1[i] * nL2[i])

print(nL3)

# 9 Given two two-dimensional lists of numbers of the size 2x2 two dimensional
# list is represented as an list of lists: Calculate the result of adding the two matrices. 

matrix1 = [[1, 3], [2, 4]]
matrix2 = [[5, 2], [1, 0]]
mResults = []
for i in range(0, len(matrix1)):
    for j in range(0, len(matrix1[0])):
        mResults.append(matrix1[i][j] + matrix2[i][j])

print(mResults)

# 10 Use your solution in Matrix Addition, and extend it to work for a pair of matrices of 
# any size, as long as they have the same size.

matrix3 = [[1, 3, 5], [2, 4, 2], [0, 1, 0]]
matrix4 = [[5, 2, 5], [1, 0, 3], [9, 0, 0]]
mResults2 = []
for i in range(0, len(matrix3)):
    for j in range(0, len(matrix3[0])):
        mResults2.append(matrix3[i][j] + matrix4[i][j])

print(mResults2)

# 11 Given an list of numbers or strings, create a new list containing the same elements as 
# the first list, except with any duplicate values removed. Print the list.

dups = [9, 2, 5, 5, 2, 0, 9, 37]
dupsSorted = []
for item in dups:
    if item in dupsSorted:
        pass
    else:
        dupsSorted.append(item)
print(dupsSorted)