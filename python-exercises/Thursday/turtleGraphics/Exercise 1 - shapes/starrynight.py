
import tkinter as tk
import shapes2
import random
from turtle import bgcolor

bgcolor("black")

for num in range(0, 200):
    shapes2.stars(random.randint(1,20), True, "white", random.randint(-300, 300), random.randint(-300, 300))

tk.mainloop()