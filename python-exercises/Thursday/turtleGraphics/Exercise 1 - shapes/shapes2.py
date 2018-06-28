import turtle

t = turtle.Turtle()
t.shape("circle")
t.pensize(2)
t.speed(0)


def circle(size, fill, color, x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.circle(size)
    t.end_fill()
    t.penup()
    

def triangle(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.left(120)
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.end_fill()
    t.penup()


def hexagon(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.right(60)
    t.forward(size)
    t.right(60)
    t.forward(size)
    t.right(60)
    t.forward(size)
    t.right(60)
    t.forward(size)
    t.right(60)
    t.forward(size)
    t.right(60)
    t.forward(size)
    t.end_fill()
    t.penup()


def octagon(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.right(45)
    t.forward(size)
    t.end_fill()
    t.penup()


def pentagon(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.right(72)
    t.forward(size)
    t.right(72)
    t.forward(size)
    t.right(72)
    t.forward(size)
    t.right(72)
    t.forward(size)
    t.right(72)
    t.forward(size)
    t.end_fill()
    t.penup()


def square(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.right(90)
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.right(90)
    t.forward(size)
    t.end_fill()
    t.penup()


def star(size, fill, color, x, y):
    t.goto(x, y)
    t.pendown()
    t.color(color)
    if fill:
        t.begin_fill()
    t.right(144)
    t.forward(size)
    t.right(144)
    t.forward(size)
    t.right(144)
    t.forward(size)
    t.right(144)
    t.forward(size)
    t.right(144)
    t.forward(size)
    t.end_fill()
    t.penup()
