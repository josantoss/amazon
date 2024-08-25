n = int(input())
count = {}
for _ in range(n):
    team = input()
    count[team] = 1 + count.get(team, 0)

ans = ""
maxx = 0
for team in count:
    if count[team] > maxx:
        maxx = count[team]
        ans = team

print(ans)