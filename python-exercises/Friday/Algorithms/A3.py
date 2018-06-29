fibs = [1, 2]
newFib = 0
i = 0
sum = 0

while newFib < 4000000 :
    newFib = fibs[i] + fibs[i + 1]
    if newFib < 4000000:
        fibs.append(newFib)
    i += 1

for i in fibs:
    if i % 2 == 0 :
        sum += i

print(sum)