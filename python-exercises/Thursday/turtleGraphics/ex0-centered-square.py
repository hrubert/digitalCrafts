import turtle
import tkinter as tk

t = turtle.Turtle()
# move into position
t.up()
t.forward(50)
t.left(90)
t.forward(50)
t.left(90)

t.down()

# draw the square
t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
t.forward(100)
t.right(90)
t.forward(100)

tk.mainloop()
