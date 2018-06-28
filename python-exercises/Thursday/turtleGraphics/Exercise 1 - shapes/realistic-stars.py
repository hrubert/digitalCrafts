
import tkinter as tk
import shapes2
import random
from turtle import bgcolor

bgcolor("black")

for num in range(0, 500):
    shapes2.circle(random.randint(1,3), True, "white", random.randint(-300, 300), random.randint(-300, 300))

tk.mainloop()