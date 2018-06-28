# Write a function f(x) that returns that square of x. Plot it for x values of -100 to 100 in increments of 1

import matplotlib.pyplot as plot

def f(x):
    return x * x

xs = list(range(-100, 101))
ys = []

for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()

