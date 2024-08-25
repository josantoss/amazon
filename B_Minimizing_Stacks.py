N = int(input())
I =[int(x) for x in input().split()]
for _ in range(N):
    hashMap = {}
    for i in I:
        hashMap[i] = hashMap.get(i,0) + 1
ValueArray = [int(x) for x in hashMap.values()]
print(max(ValueArray),len(ValueArray), end= "")
    