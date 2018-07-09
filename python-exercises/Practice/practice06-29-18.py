my_dictionary = {
    "Matt" : "Fisher",
    "Travis" : "Ramos",
    "Eric" : "Ridenour",
    0 : [0, 1, 2, 3, 4] 
}

print(my_dictionary["Matt"])
print(my_dictionary.get("Tracy"))

for key, value in my_dictionary.items():
    print(key)
    print(my_dictionary[key])
