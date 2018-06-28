# note my house looks nothing like this

import turtle
import tkinter as tk

t = turtle.Turtle()

turtle.bgcolor("DeepSkyBlue")

def outline():
    t.penup()
    t.goto(100, 100)
    t.pendown()
    t.color("grey")
    t.begin_fill()
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.right(90)
    t.forward(250)
    t.end_fill()

def roof():
    t.color("brown")
    t.begin_fill()
    t.forward(30)
    t.left(145)
    t.forward(200)
    t.left(70)
    t.forward(200)
    t.goto(100, 100)
    t.end_fill()

def grass():
    t.penup()
    t.goto(-500, -150)
    t.pendown()
    t.color("green")
    t.setheading(0)
    t.begin_fill()
    t.forward(950)
    t.right(90)
    t.forward(300)
    t.right(90)
    t.forward(950)
    t.right(90)
    t.forward(300)
    t.end_fill()

def sun():
    t.penup()
    t.goto(-250, 250)
    t.color("yellow")
    t.begin_fill()
    t.circle(30)
    t.end_fill()


def door():
    t.penup()
    t.goto(20, -150)
    t.color("red")
    t.begin_fill()
    t.setheading(0)
    t.forward(50)
    t.left(90)
    t.forward(100)
    t.left(90)
    t.forward(50)
    t.left(90)
    t.forward(100)
    t.end_fill()

def window():
    t.penup()
    t.goto(-50, 0)
    t.pendown()
    t.pensize(3)
    t.color("black")
    for x in range(4):
        t.forward(30)
        t.right(90)
        t.forward(30)
        t.right(90)
        t.forward(30)
        t.right(90)
        t.forward(30)


outline()
roof()
grass()
sun()
door()
window()


tk.mainloop()

