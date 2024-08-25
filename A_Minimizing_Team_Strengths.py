t = int(input())
for _ in range(t):
    n = int(input())
    arr = [int(x) for x in input().split()]
    
    count = {}
    for num in arr:
        count[num] = 1 + count.get(num, 0)
    
    pairs = []
    for num in count:
        pairs.append([count[num], num])
        
    pairs.sort()
    ans = [len(pairs)]
    ptr = 0
    for i in range(2, n + 1):
        if pairs[ptr][0] > 1:
            ans.append(ans[-1] + 1)
            pairs[ptr][0] -= 1
        elif pairs[ptr][0] == 1:
            ans.append(ans[-1])
            ptr += 1
    
    print(*ans)
    
        