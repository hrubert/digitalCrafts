day = int(input("What day is it (0-6) ?"))
if (day == 0 or day == 6) :
    print("{}, sleep in".format(day))
else:
    print("{}, go to work".format(day))
    