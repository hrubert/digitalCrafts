import tkinter as tk
import shapes2
import random

# use randint to create a 90's screensaver
color = ["green", "red", "pink", "white", "black", "blue", "yellow", "orange"] 
while True:
    shapes2.circle(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.triangle(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.hexagon(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.octagon(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.pentagon(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.square(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))
    shapes2.star(random.randint(50,400), random.randint(0, 1), color[random.randint(0, 7)], random.randint(-300, 300), random.randint(-300, 300))

tk.mainloop()