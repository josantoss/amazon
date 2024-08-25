n = input()
N = int(n)
i = 0

lucky = [4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777]
almost_lucky = False
for num in lucky:
    if N % num == 0:
        almost_lucky = True
        break

if almost_lucky:
    print("YES")
else:
    print("NO")
            

    
    
    