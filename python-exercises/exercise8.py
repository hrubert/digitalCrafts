totalBill = int(input("Total bill amount? "))
service = input("Was the service 'good', 'fair', or 'bad'? ")
split = int(input("Split how many ways? "))
tip = 0

if service == "good":
    tip = totalBill * 0.2
elif service == "fair":
    tip = totalBill * 0.15  
else:
    tip = totalBill * 0.1
print("Tip amount: {:.2f}".format(tip))    
print("Total amount: {:.2f}".format(tip + totalBill))
print("Amount per person: {:.2f}".format((tip + totalBill) / split))    
    
