# Given a number, print its factors.

num = int(input("Number to factor:"))
factorList = []
for i in range(2, num):
    if num % i == 0:
        factorList.append(i)

print(factorList)