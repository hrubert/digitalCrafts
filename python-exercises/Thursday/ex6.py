# Write a function f(x) that returns the sin of x. Hint: there is a sin function 
# in the math module. Plot it from -5 to 5 in increments of 1.

import matplotlib.pyplot as plot 
import math
from numpy import arange

def f(x):
    return math.sin(x)

xs = list(arange(-5, 6, 0.1))
ys = []

for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()