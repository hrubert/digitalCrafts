def checkTrip(a, b, c):
    if (a * a) + (b * b) == (c * c) :
        return True
    else:
        return False

a = 0
while a < 500:
    a += 1
    b = a + 1
    while b < 500:
        c = 1000 - (a + b)
        if checkTrip(a, b, c) == False :
            b += 1
        else:
            product = a*b*c
            print(product)
            break

