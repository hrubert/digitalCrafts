# Bonus -- Given two two-dimensional lists of numbers of the size 2x2 - calculate the result of 
# multiplying the two matrices. Print the resulting matrix.

m1 = [[1, 2], [3, 4]]
m2 = [[2, 0], [1, 2]]
m3 = []
r1=[]
r2=[]

r1.append(m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0])
r1.append(m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1])
m3.append(r1)
r2.append(m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0])
r2.append(m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1])
m3.append(r2)
print(m3)
