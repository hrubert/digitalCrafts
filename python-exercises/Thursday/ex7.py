# Write a function that takes a temperature in Celcius and converts it Fahrenheit.
# X = C
# Y = F

import matplotlib.pyplot as plot

def fToC(x):
    return x * (9/5) + 32

xs = list(range(0, 101))
ys = []

for x in xs:
    ys.append(fToC(x))

plot.plot(xs, ys)
plot.xlabel("Degrees Celcius")
plot.ylabel("Degrees Fahrenheit")
plot.show()