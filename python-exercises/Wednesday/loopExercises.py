# 1 Using a for loop and the range function, print out the numbers between 1 and 10 inclusive, one on a line. 

for i in range(1, 11):
    print(i)

# 2 prompt the user for the number to start on and the number to end on. 

start = int(input("Start at: "))
stop = int(input("Stop at: "))

for i in range(start, stop + 1):
    print(i)

# 3 Print each odd number between 1 and 10 inclusive. 

for i in range(1, 10, 2):
    print(i)

# 4 Print a 5x5 square of * characters. Example output:

for i in range(0, 5):
    print('*' * 5)

# 5 Print a NxN square of * characters. Prompt the user for N.

n = int(input("How big is the square? "))

for i in range(0, n):
    print("*" * n)

# 6 Given a height and width, input by the user, print a box consisting of * characters as its border.

height = int(input("height: "))
width = int(input("width: "))

for i in range(0, height):
    if i == 0 or i == height - 1:
        print("*" * width)
    else:
        print("*" + " " * (width - 2) + "*")

# 7 Print a triangle consisting of * characters

for i in range(0, 4):
    print('*' + '*' * (i * 2))

# 8 Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.

triHeight = int(input("How high is the triangle?"))

for i in range(0, triHeight):
    print('*' + '*' * (i *2))

# 9 Print the multiplication table for numbers from 1 up to 10. Example output:

for i in range(0, 11):
    for j in range(0, 11):
        print("{} X {} = {}".format(i, j, i * j))