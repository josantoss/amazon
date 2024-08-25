def max_burles(test_cases):  
    results = []  
    
    for n, k, s in test_cases:  
        lower_count = [0] * 26  
        upper_count = [0] * 26  
        
        # Count occurrences of each letter  
        for char in s:  
            if char.islower():  
                lower_count[ord(char) - ord('a')] += 1  
            else:  
                upper_count[ord(char) - ord('A')] += 1  
        
        # Count pairs and remaining characters  
        pairs = 0  
        remaining_lower = 0  
        remaining_upper = 0  

        for i in range(26):  
            pairs += min(lower_count[i], upper_count[i])  
            remaining_lower += max(0, lower_count[i] - upper_count[i])  
            remaining_upper += max(0, upper_count[i] - lower_count[i])  
        
        # The maximum additional pairs we can form from remaining letters  
        additional_pairs = min(k, remaining_lower + remaining_upper)  
        
        # Maximum pairs is original pairs + additional pairs we can form  
        results.append(pairs + additional_pairs)  

    return results  

# Read input  
import sys  

def main():  
    input = sys.stdin.read  
    data = input().splitlines()  
    
    t = int(data[0])  
    test_cases = []  

    line_index = 1  
    for _ in range(t):  
        n, k = map(int, data[line_index].split())  
        s = data[line_index + 1]  
        test_cases.append((n, k, s))  
        line_index += 2  

    results = max_burles(test_cases)  
    
    # Print output  
    for result in results:  
        print(result)  

if __name__ == "__main__":  
    main()