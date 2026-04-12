export const categories = [
  {
    id: 'arrays-hashing',
    name: 'Arrays & Hashing',
    color: '#6366f1',
    bg: '#1e1b4b',
    icon: '{}',
    count: 9,
    tagline: 'Trade space for time',
    concept: 'Use hash maps or hash sets to store values you\'ve seen. This turns repeated O(n) lookups into O(1). The pattern: iterate once, query the map for what you need.',
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    color: '#10b981',
    bg: '#064e3b',
    icon: '←→',
    count: 5,
    tagline: 'Shrink the search space',
    concept: 'Place one pointer at each end of a sorted array (or string). Move them inward based on a condition. Eliminates the need for nested loops — O(n²) → O(n).',
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    color: '#f59e0b',
    bg: '#451a03',
    icon: '[▓▓▓]',
    count: 6,
    tagline: 'Expand and shrink a subarray',
    concept: 'Maintain a window [l, r] over an array. Expand r to add elements, shrink l to remove. Avoids recomputing the whole subarray each step — O(n²) → O(n).',
  },
  {
    id: 'stack',
    name: 'Stack',
    color: '#ef4444',
    bg: '#450a0a',
    icon: '⠿',
    count: 7,
    tagline: 'Remember the most recent state',
    concept: 'A stack (LIFO) tracks context that needs to match or be resolved later. Common for: matching brackets, monotonic sequences, and expression evaluation.',
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    color: '#8b5cf6',
    bg: '#2e1065',
    icon: '⌥',
    count: 7,
    tagline: 'Eliminate half the search space',
    concept: 'On any sorted (or monotonic) structure, you can always pick the midpoint and eliminate half the options. Works on arrays, rotated arrays, and even on "answer spaces".',
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    color: '#06b6d4',
    bg: '#083344',
    icon: '○→○→○',
    count: 11,
    tagline: 'Pointer manipulation',
    concept: 'Most linked list problems reduce to careful pointer manipulation. Key patterns: fast/slow pointers (Floyd\'s cycle), dummy head nodes, and reversing in-place.',
  },
  {
    id: 'trees',
    name: 'Trees',
    color: '#22c55e',
    bg: '#052e16',
    icon: '⊤',
    count: 11,
    tagline: 'Recursive substructure',
    concept: 'Trees have natural recursive substructure. DFS (preorder/inorder/postorder) and BFS (level-order) cover almost all cases. BST properties add sorted-order guarantees.',
  },
  {
    id: 'heap-priority-queue',
    name: 'Heap / Priority Queue',
    color: '#f97316',
    bg: '#431407',
    icon: '▲',
    count: 3,
    tagline: 'Always access the min or max',
    concept: 'A heap gives you O(log n) insert and O(1) peek at the min/max. Use it when you need "top K", streaming medians, or merging sorted structures.',
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    color: '#ec4899',
    bg: '#500724',
    icon: '↩',
    count: 2,
    tagline: 'Explore all possibilities',
    concept: 'Build a solution incrementally. At each step, try all valid options. If a path fails, undo (backtrack) and try the next. The decision tree is pruned to avoid redundant work.',
  },
  {
    id: 'graphs',
    name: 'Graphs',
    color: '#14b8a6',
    bg: '#042f2e',
    icon: '◉',
    count: 6,
    tagline: 'BFS / DFS on nodes & edges',
    concept: 'Represent problems as nodes and edges. BFS finds shortest path (unweighted). DFS explores connected components. Track visited nodes to avoid cycles.',
  },
  {
    id: 'dynamic-programming',
    name: '1-D Dynamic Programming',
    color: '#a855f7',
    bg: '#3b0764',
    icon: 'memo',
    count: 10,
    tagline: 'Cache overlapping subproblems',
    concept: 'When recursive solutions recompute the same subproblems, cache the results. Bottom-up DP fills a table; top-down DP uses memoization. Key: define the state and transition.',
  },
  {
    id: 'intervals',
    name: 'Intervals',
    color: '#84cc16',
    bg: '#1a2e05',
    icon: '[—][—]',
    count: 5,
    tagline: 'Sort then merge or insert',
    concept: 'Sort intervals by start time. Then sweep through: merge overlapping intervals (end = max(end, curr.end)) or find gaps. Greedy decisions work because sorted order eliminates ambiguity.',
  },
  {
    id: 'bit-manipulation',
    name: 'Bit Manipulation',
    color: '#64748b',
    bg: '#0f172a',
    icon: '01',
    count: 5,
    tagline: 'XOR, AND, OR tricks',
    concept: 'Bitwise ops are O(1) and constant-space. Key tricks: XOR cancels pairs (a^a=0), AND with (n-1) clears lowest bit (n & n-1), shifts multiply/divide by 2.',
  },
];

export const problems = {
  // ─── ARRAYS & HASHING ────────────────────────────────────────────────────
  'contains-duplicate': {
    id: 'contains-duplicate', title: 'Contains Duplicate', number: 217,
    difficulty: 'Easy', category: 'arrays-hashing',
    description: 'Given an integer array nums, return true if any value appears at least twice.',
    keyInsight: 'A set only stores unique values. If inserting an element that already exists → duplicate found.',
    approach: 'Iterate the array. For each number, check if it\'s already in the set. If yes → return true. If no → add to set.',
    example: { input: '[1, 2, 3, 1]', output: 'true', trace: [
      { step: 'seen={}', action: 'check 1 → not in set → add', state: 'seen={1}' },
      { step: 'seen={1}', action: 'check 2 → not in set → add', state: 'seen={1,2}' },
      { step: 'seen={1,2}', action: 'check 3 → not in set → add', state: 'seen={1,2,3}' },
      { step: 'seen={1,2,3}', action: 'check 1 → IN SET!', state: 'return true' },
    ]},
    solution: `def containsDuplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False`,
    testCode: `print(containsDuplicate([1, 2, 3, 1]))   # True
print(containsDuplicate([1, 2, 3, 4]))   # False
print(containsDuplicate([1]))            # False`,
    time: 'O(n)', space: 'O(n)',
  },
  'valid-anagram': {
    id: 'valid-anagram', title: 'Valid Anagram', number: 242,
    difficulty: 'Easy', category: 'arrays-hashing',
    description: 'Given two strings s and t, return true if t is an anagram of s.',
    keyInsight: 'Anagrams have identical character frequencies. Count chars in s, subtract chars in t — all counts must be 0.',
    approach: 'Count character frequencies with a hash map. Increment for s, decrement for t. Any non-zero count means not an anagram.',
    example: { input: 's="anagram", t="nagaram"', output: 'true', trace: [
      { step: 'Build count from s', action: 'a:3, n:1, g:1, r:1, m:1', state: '' },
      { step: 'Subtract count from t', action: 'n:0, a:2, g:0, a:1, r:0, a:0, m:0', state: '' },
      { step: 'All zeros?', action: 'Yes → true', state: '' },
    ]},
    solution: `def isAnagram(s, t):
    if len(s) != len(t): return False
    count = {}
    for c in s: count[c] = count.get(c, 0) + 1
    for c in t:
        if c not in count: return False
        count[c] -= 1
        if count[c] < 0: return False
    return True`,
    testCode: `print(isAnagram("anagram", "nagaram"))  # True
print(isAnagram("rat", "car"))          # False
print(isAnagram("a", "a"))              # True`,
    time: 'O(n)', space: 'O(1) — at most 26 chars',
  },
  'two-sum': {
    id: 'two-sum', title: 'Two Sum', number: 1,
    difficulty: 'Easy', category: 'arrays-hashing',
    description: 'Given nums and a target, return indices of the two numbers that add to target.',
    keyInsight: 'For each number x, the complement is (target - x). Store seen numbers in a map. If complement is already in map → found the pair.',
    approach: 'One pass: for each index i, compute complement = target - nums[i]. If complement is in map, return [map[complement], i]. Else store nums[i] → i.',
    example: { input: 'nums=[2,7,11,15], target=9', output: '[0,1]', trace: [
      { step: 'map={}', action: 'i=0, need 7, not in map → store {2:0}', state: 'map={2:0}' },
      { step: 'map={2:0}', action: 'i=1, need 2, IN MAP → return [0,1]', state: 'done!' },
    ]},
    solution: `def twoSum(nums, target):
    seen = {}  # value → index
    for i, n in enumerate(nums):
        complement = target - n
        if complement in seen:
            return [seen[complement], i]
        seen[n] = i`,
    testCode: `print(twoSum([2, 7, 11, 15], 9))   # [0, 1]
print(twoSum([3, 2, 4], 6))        # [1, 2]
print(twoSum([3, 3], 6))           # [0, 1]`,
    time: 'O(n)', space: 'O(n)',
  },
  'group-anagrams': {
    id: 'group-anagrams', title: 'Group Anagrams', number: 49,
    difficulty: 'Medium', category: 'arrays-hashing',
    description: 'Given an array of strings, group the anagrams together.',
    keyInsight: 'Anagrams share the same sorted characters. Use sorted(word) as the hash map key.',
    approach: 'For each word, sort its characters to get a canonical key. Group all words with the same key together.',
    example: { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]', trace: [
      { step: '"eat"', action: 'sorted → "aet" → key', state: 'aet: [eat]' },
      { step: '"tea"', action: 'sorted → "aet" → same key', state: 'aet: [eat,tea]' },
      { step: '"tan"', action: 'sorted → "ant" → new key', state: 'ant: [tan]' },
    ]},
    solution: `from collections import defaultdict

def groupAnagrams(strs):
    groups = defaultdict(list)
    for word in strs:
        key = tuple(sorted(word))
        groups[key].append(word)
    return list(groups.values())`,
    testCode: `result = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
for group in sorted(result, key=lambda x: sorted(x)[0]):
    print(sorted(group))`,
    time: 'O(n·k·log k)', space: 'O(n·k)',
  },
  'top-k-frequent': {
    id: 'top-k-frequent', title: 'Top K Frequent Elements', number: 347,
    difficulty: 'Medium', category: 'arrays-hashing',
    description: 'Given an integer array nums and an integer k, return the k most frequent elements.',
    keyInsight: 'Bucket sort by frequency. An element can appear at most n times, so create n+1 buckets indexed by count.',
    approach: 'Count frequencies. Create buckets[0..n] where bucket[freq] holds all numbers with that frequency. Scan from n down to 0 collecting results.',
    example: { input: 'nums=[1,1,1,2,2,3], k=2', output: '[1,2]', trace: [
      { step: 'Count', action: '{1:3, 2:2, 3:1}', state: '' },
      { step: 'Buckets', action: 'b[1]=[3], b[2]=[2], b[3]=[1]', state: '' },
      { step: 'Collect top k', action: 'scan from end: b[3]→1, b[2]→2', state: '[1,2]' },
    ]},
    solution: `def topKFrequent(nums, k):
    count = {}
    for n in nums:
        count[n] = count.get(n, 0) + 1

    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in count.items():
        buckets[freq].append(num)

    result = []
    for i in range(len(buckets) - 1, 0, -1):
        result.extend(buckets[i])
        if len(result) >= k:
            return result[:k]`,
    testCode: `print(sorted(topKFrequent([1,1,1,2,2,3], 2)))  # [1, 2]
print(topKFrequent([1], 1))                        # [1]`,
    time: 'O(n)', space: 'O(n)',
  },
  'product-except-self': {
    id: 'product-except-self', title: 'Product of Array Except Self', number: 238,
    difficulty: 'Medium', category: 'arrays-hashing',
    description: 'Return an array where output[i] is the product of all elements except nums[i]. No division allowed.',
    keyInsight: 'output[i] = (product of everything LEFT of i) × (product of everything RIGHT of i). Compute each in one pass.',
    approach: 'First pass left→right: prefix[i] = product of nums[0..i-1]. Second pass right→left: multiply by suffix (running product from the right).',
    example: { input: 'nums=[1,2,3,4]', output: '[24,12,8,6]', trace: [
      { step: 'Prefix pass', action: '[1,1,2,6]', state: '' },
      { step: 'Suffix pass', action: 'suffix=1: [1×24,1×12,2×4,6×1]', state: '[24,12,8,6]' },
    ]},
    solution: `def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n

    # Left prefix products
    prefix = 1
    for i in range(n):
        res[i] = prefix
        prefix *= nums[i]

    # Multiply by right suffix products
    suffix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= suffix
        suffix *= nums[i]

    return res`,
    testCode: `print(productExceptSelf([1,2,3,4]))   # [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))# [0, 0, 9, 0, 0]`,
    time: 'O(n)', space: 'O(1) output array not counted',
  },
  'longest-consecutive': {
    id: 'longest-consecutive', title: 'Longest Consecutive Sequence', number: 128,
    difficulty: 'Medium', category: 'arrays-hashing',
    description: 'Find the length of the longest consecutive elements sequence. Must be O(n).',
    keyInsight: 'Only start counting a sequence from its true start (num-1 not in set). This prevents O(n²) duplicated work.',
    approach: 'Add all numbers to a set. For each number, if num-1 is NOT in the set, it\'s a sequence start. Count upward until the sequence ends.',
    example: { input: '[100,4,200,1,3,2]', output: '4 (sequence: 1,2,3,4)', trace: [
      { step: 'set={100,4,200,1,3,2}', action: 'Check 1: is 0 in set? No → start!', state: '' },
      { step: 'Count from 1', action: '1✓ 2✓ 3✓ 4✓ 5✗', state: 'length=4' },
    ]},
    solution: `def longestConsecutive(nums):
    num_set = set(nums)
    best = 0

    for n in num_set:
        if n - 1 not in num_set:  # sequence start
            length = 1
            while n + length in num_set:
                length += 1
            best = max(best, length)

    return best`,
    testCode: `print(longestConsecutive([100,4,200,1,3,2]))  # 4  (1,2,3,4)
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))# 9`,
    time: 'O(n)', space: 'O(n)',
  },

  // ─── TWO POINTERS ─────────────────────────────────────────────────────────
  'valid-palindrome': {
    id: 'valid-palindrome', title: 'Valid Palindrome', number: 125,
    difficulty: 'Easy', category: 'two-pointers',
    description: 'A phrase is a palindrome if, after filtering non-alphanumeric and lowercasing, it reads the same forward and backward.',
    keyInsight: 'Compare characters from both ends moving inward. Skip non-alphanumeric characters.',
    approach: 'Left pointer starts at 0, right at end. Skip non-alphanumeric. Compare lowercased characters. If mismatch → false.',
    example: { input: '"A man, a plan, a canal: Panama"', output: 'true', trace: [
      { step: 'l=0,r=29', action: '"A" vs "a" → match', state: 'l++, r--' },
      { step: 'l=1,r=28', action: '" " skip, "m" vs "m" match', state: 'l++, r--' },
    ]},
    solution: `def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum():
            l += 1
        while l < r and not s[r].isalnum():
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        l += 1; r -= 1
    return True`,
    testCode: `print(isPalindrome("A man, a plan, a canal: Panama"))  # True
print(isPalindrome("race a car"))                       # False
print(isPalindrome(" "))                                # True`,
    time: 'O(n)', space: 'O(1)',
  },
  'three-sum': {
    id: 'three-sum', title: '3Sum', number: 15,
    difficulty: 'Medium', category: 'two-pointers',
    description: 'Return all unique triplets [nums[i], nums[j], nums[k]] such that i≠j≠k and sum = 0.',
    keyInsight: 'Sort first. Fix the first element, then use two pointers on the rest to find pairs summing to -nums[i].',
    approach: 'Sort the array. For each i, use l=i+1, r=end. If sum < 0 → l++. If sum > 0 → r--. If sum = 0 → add triplet, skip duplicates.',
    example: { input: '[-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]', trace: [
      { step: 'sorted: [-4,-1,-1,0,1,2]', action: '', state: '' },
      { step: 'i=0(-4)', action: 'l=1(-1),r=5(2): sum=-3 < 0 → l++', state: '' },
      { step: 'i=1(-1)', action: 'l=2(-1),r=5(2): sum=0 → add!', state: '[−1,−1,2]' },
    ]},
    solution: `def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue  # skip duplicate
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s < 0: l += 1
            elif s > 0: r -= 1
            else:
                result.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l+1]: l += 1
                while l < r and nums[r] == nums[r-1]: r -= 1
                l += 1; r -= 1
    return result`,
    testCode: `print(threeSum([-1,0,1,2,-1,-4]))  # [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))           # []
print(threeSum([0,0,0]))           # [[0,0,0]]`,
    time: 'O(n²)', space: 'O(1)',
  },
  'container-with-water': {
    id: 'container-with-water', title: 'Container With Most Water', number: 11,
    difficulty: 'Medium', category: 'two-pointers',
    description: 'Find two lines that together with the x-axis forms a container that holds the most water.',
    keyInsight: 'Width decreases as pointers converge. The only way to possibly improve is to move the shorter pointer inward.',
    approach: 'Start with widest container (l=0, r=n-1). Area = min(h[l],h[r]) × (r-l). Move the pointer with the shorter height inward.',
    example: { input: 'height=[1,8,6,2,5,4,8,3,7]', output: '49', trace: [
      { step: 'l=0(1),r=8(7)', action: 'area=min(1,7)×8=8, move l (shorter)', state: 'best=8' },
      { step: 'l=1(8),r=8(7)', action: 'area=min(8,7)×7=49, move r', state: 'best=49' },
    ]},
    solution: `def maxArea(height):
    l, r = 0, len(height) - 1
    best = 0
    while l < r:
        area = min(height[l], height[r]) * (r - l)
        best = max(best, area)
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return best`,
    testCode: `print(maxArea([1,8,6,2,5,4,8,3,7]))  # 49
print(maxArea([1,1]))                 # 1`,
    time: 'O(n)', space: 'O(1)',
  },
  'trapping-rain-water': {
    id: 'trapping-rain-water', title: 'Trapping Rain Water', number: 42,
    difficulty: 'Hard', category: 'two-pointers',
    description: 'Given an elevation map, compute how much water can be trapped after raining.',
    keyInsight: 'Water at position i = min(maxLeft, maxRight) - height[i]. Use two pointers to compute this in one pass.',
    approach: 'Track maxLeft and maxRight. Process the side with smaller max first (it\'s the bottleneck). Water at current position = max - height.',
    example: { input: 'height=[0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', trace: [
      { step: 'l=0,r=11', action: 'maxL=0,maxR=1 → process left: water=0-0=0, l++', state: '' },
      { step: 'l=1,r=11', action: 'maxL=1,maxR=1 → process left: water=1-1=0, l++', state: '' },
    ]},
    solution: `def trap(height):
    l, r = 0, len(height) - 1
    maxL, maxR = height[l], height[r]
    water = 0
    while l < r:
        if maxL <= maxR:
            l += 1
            maxL = max(maxL, height[l])
            water += maxL - height[l]
        else:
            r -= 1
            maxR = max(maxR, height[r])
            water += maxR - height[r]
    return water`,
    testCode: `print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6
print(trap([4,2,0,3,2,5]))               # 9`,
    time: 'O(n)', space: 'O(1)',
  },

  // ─── SLIDING WINDOW ───────────────────────────────────────────────────────
  'best-time-stock': {
    id: 'best-time-stock', title: 'Best Time to Buy and Sell Stock', number: 121,
    difficulty: 'Easy', category: 'sliding-window',
    description: 'Find the maximum profit from buying on one day and selling on a later day.',
    keyInsight: 'Track the minimum price seen so far. For each day, profit = price - minPrice. Update best profit.',
    approach: 'One pass: keep running minimum. At each price, compute potential profit. Update maxProfit if better.',
    example: { input: '[7,1,5,3,6,4]', output: '5 (buy at 1, sell at 6)', trace: [
      { step: 'p=7', action: 'minP=7, profit=0', state: 'best=0' },
      { step: 'p=1', action: 'minP=1, profit=0', state: 'best=0' },
      { step: 'p=5', action: 'minP=1, profit=4', state: 'best=4' },
      { step: 'p=6', action: 'minP=1, profit=5', state: 'best=5' },
    ]},
    solution: `def maxProfit(prices):
    minPrice = float('inf')
    maxProfit = 0
    for price in prices:
        minPrice = min(minPrice, price)
        maxProfit = max(maxProfit, price - minPrice)
    return maxProfit`,
    testCode: `print(maxProfit([7, 1, 5, 3, 6, 4]))   # 5  (buy at 1, sell at 6)
print(maxProfit([7, 6, 4, 3, 1]))       # 0  (prices only fall)
print(maxProfit([1, 2]))                # 1`,
    time: 'O(n)', space: 'O(1)',
  },
  'longest-substring-no-repeat': {
    id: 'longest-substring-no-repeat', title: 'Longest Substring Without Repeating Characters', number: 3,
    difficulty: 'Medium', category: 'sliding-window',
    description: 'Find the length of the longest substring without repeating characters.',
    keyInsight: 'Sliding window with a set. When a duplicate is found, shrink from the left until the duplicate is removed.',
    approach: 'Expand r one char at a time. If s[r] is in window, shrink from l until it\'s gone. Track max window size.',
    example: { input: '"abcabcbb"', output: '3 ("abc")', trace: [
      { step: 'window="abc"', action: 'r=3: "a" in window! shrink from l', state: 'l moves to 1' },
      { step: 'window="bca"', action: 'r=4: "b" in window! shrink from l', state: 'l moves to 2' },
    ]},
    solution: `def lengthOfLongestSubstring(s):
    chars = set()
    l = 0
    best = 0
    for r in range(len(s)):
        while s[r] in chars:
            chars.remove(s[l])
            l += 1
        chars.add(s[r])
        best = max(best, r - l + 1)
    return best`,
    testCode: `print(lengthOfLongestSubstring("abcabcbb"))  # 3  ("abc")
print(lengthOfLongestSubstring("bbbbb"))     # 1  ("b")
print(lengthOfLongestSubstring("pwwkew"))    # 3  ("wke")`,
    time: 'O(n)', space: 'O(min(n,alphabet))',
  },
  'longest-repeating-replacement': {
    id: 'longest-repeating-replacement', title: 'Longest Repeating Character Replacement', number: 424,
    difficulty: 'Medium', category: 'sliding-window',
    description: 'Replace at most k characters. Find the longest substring with all same characters.',
    keyInsight: 'Window is valid if (window_size - count_of_most_frequent_char) ≤ k. If invalid, slide the whole window.',
    approach: 'Track max frequency in window. If replacements needed > k, shrink from left by 1 (just slide the window, never shrink it).',
    example: { input: 's="AABABBA", k=1', output: '4', trace: [
      { step: 'window="AABA"', action: 'maxFreq=3(A), replacements=4-3=1 ≤ k=1 ✓', state: 'len=4' },
      { step: 'window="ABAB"', action: 'maxFreq=2, replacements=2 > k=1 → slide', state: '' },
    ]},
    solution: `def characterReplacement(s, k):
    count = {}
    l = 0
    maxFreq = 0
    result = 0
    for r in range(len(s)):
        count[s[r]] = count.get(s[r], 0) + 1
        maxFreq = max(maxFreq, count[s[r]])
        if (r - l + 1) - maxFreq > k:
            count[s[l]] -= 1
            l += 1
        result = max(result, r - l + 1)
    return result`,
    testCode: `print(characterReplacement("ABAB", 2))    # 4
print(characterReplacement("AABABBA", 1))  # 4`,
    time: 'O(n)', space: 'O(1)',
  },
  'minimum-window-substring': {
    id: 'minimum-window-substring', title: 'Minimum Window Substring', number: 76,
    difficulty: 'Hard', category: 'sliding-window',
    description: 'Find the minimum window in s that contains all characters of t.',
    keyInsight: 'Expand right until all t chars are covered. Then shrink left to minimize. Track "have" vs "need".',
    approach: 'Two frequency maps. "have" counts current window chars. "need" counts t chars. When have==need (all chars satisfied), try shrinking from left.',
    example: { input: 's="ADOBECODEBANC", t="ABC"', output: '"BANC"', trace: [
      { step: 'expand until "ABC" covered', action: 'window="ADOBEC"', state: 'have=3=need' },
      { step: 'shrink from left', action: 'remove A→not covered, stop', state: 'try again' },
    ]},
    solution: `def minWindow(s, t):
    if not t: return ""
    need = {}
    for c in t: need[c] = need.get(c, 0) + 1
    have, required = 0, len(need)
    window = {}
    l, result, resLen = 0, [-1,-1], float('inf')
    for r, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if (r - l + 1) < resLen:
                resLen = r - l + 1
                result = [l, r]
            window[s[l]] -= 1
            if s[l] in need and window[s[l]] < need[s[l]]:
                have -= 1
            l += 1
    l, r = result
    return s[l:r+1] if resLen != float('inf') else ""`,
    testCode: `print(minWindow("ADOBECODEBANC", "ABC"))  # "BANC"
print(minWindow("a", "a"))              # "a"
print(minWindow("a", "aa"))             # ""`,
    time: 'O(n+m)', space: 'O(m)',
  },

  // ─── STACK ────────────────────────────────────────────────────────────────
  'valid-parentheses': {
    id: 'valid-parentheses', title: 'Valid Parentheses', number: 20,
    difficulty: 'Easy', category: 'stack',
    description: 'Given a string of brackets, determine if it is valid (each open bracket has a matching close bracket).',
    keyInsight: 'A stack tracks unmatched open brackets. When a closing bracket arrives, it must match the top of the stack.',
    approach: 'For each char: if open bracket → push. If close bracket → pop from stack and check it matches. If stack empty at end → valid.',
    example: { input: '"()[]{}"', output: 'true', trace: [
      { step: '"("', action: 'push → stack=[(]', state: '' },
      { step: '")"', action: 'pop ( → match! stack=[]', state: '' },
      { step: '"["', action: 'push → stack=[[', state: '' },
    ]},
    solution: `def isValid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return len(stack) == 0`,
    testCode: `print(isValid("()"))        # True
print(isValid("()[]{}"))    # True
print(isValid("(]"))        # False
print(isValid("([)]"))      # False
print(isValid("{[]}"))      # True`,
    time: 'O(n)', space: 'O(n)',
  },
  'min-stack': {
    id: 'min-stack', title: 'Min Stack', number: 155,
    difficulty: 'Medium', category: 'stack',
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in O(1).',
    keyInsight: 'Keep a second stack that tracks the current minimum at each level. When you push, also push the new min. When you pop, both stacks pop together.',
    approach: 'Two stacks: main stack and minStack. minStack[i] = minimum of all elements at and below index i in main stack.',
    example: { input: 'push(-3), push(0), push(-2)', output: 'getMin()=-3', trace: [
      { step: 'push(-3)', action: 'stack=[-3], minStack=[-3]', state: 'min=-3' },
      { step: 'push(0)', action: 'stack=[-3,0], minStack=[-3,-3]', state: 'min=-3' },
      { step: 'push(-2)', action: 'stack=[-3,0,-2], minStack=[-3,-3,-3]', state: 'min=-3' },
    ]},
    solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        min_val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(min_val)

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]`,
    testCode: `ms = MinStack()
ms.push(-3); ms.push(0); ms.push(-2)
print(ms.getMin())  # -3
ms.pop()
print(ms.top())     # 0
print(ms.getMin())  # -3`,
    time: 'O(1) all ops', space: 'O(n)',
  },
  'daily-temperatures': {
    id: 'daily-temperatures', title: 'Daily Temperatures', number: 739,
    difficulty: 'Medium', category: 'stack',
    description: 'Return an array where answer[i] is the number of days until a warmer temperature.',
    keyInsight: 'Monotonic decreasing stack stores indices of temperatures waiting for a warmer day. When a warmer temp arrives, pop and compute the wait.',
    approach: 'Maintain a stack of (temp, index) pairs in decreasing order. When temp[i] > stack top, pop and record the wait days.',
    example: { input: '[73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]', trace: [
      { step: 'push 73@0', action: 'stack=[(73,0)]', state: '' },
      { step: '74 > 73', action: 'pop (73,0): ans[0]=1-0=1', state: 'push (74,1)' },
      { step: '75 > 74', action: 'pop (74,1): ans[1]=2-1=1', state: 'push (75,2)' },
    ]},
    solution: `def dailyTemperatures(temps):
    result = [0] * len(temps)
    stack = []  # (temp, index)
    for i, t in enumerate(temps):
        while stack and t > stack[-1][0]:
            _, idx = stack.pop()
            result[idx] = i - idx
        stack.append((t, i))
    return result`,
    testCode: `print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # [1,1,4,2,1,1,0,0]
print(dailyTemperatures([30,40,50,60]))               # [1,1,1,0]
print(dailyTemperatures([30,60,90]))                  # [1,1,0]`,
    time: 'O(n)', space: 'O(n)',
  },
  'evaluate-rpn': {
    id: 'evaluate-rpn', title: 'Evaluate Reverse Polish Notation', number: 150,
    difficulty: 'Medium', category: 'stack',
    description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
    keyInsight: 'RPN uses a stack: push numbers, when operator arrives pop two operands, compute, push result.',
    approach: 'Iterate tokens. Numbers → push. Operators (+,-,*,/) → pop b then a, compute a op b, push result.',
    example: { input: '["2","1","+","3","*"]', output: '9', trace: [
      { step: '"2","1"', action: 'push 2, push 1 → stack=[2,1]', state: '' },
      { step: '"+"', action: 'pop 1,2 → 2+1=3, push 3', state: 'stack=[3]' },
      { step: '"3","*"', action: 'push 3, pop 3,3 → 3*3=9', state: 'result=9' },
    ]},
    solution: `def evalRPN(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/':
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]`,
    testCode: `print(evalRPN(["2","1","+","3","*"]))         # 9
print(evalRPN(["4","13","5","/","+"]))         # 6
print(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))  # 22`,
    time: 'O(n)', space: 'O(n)',
  },
  'generate-parentheses': {
    id: 'generate-parentheses', title: 'Generate Parentheses', number: 22,
    difficulty: 'Medium', category: 'stack',
    description: 'Generate all combinations of n pairs of well-formed parentheses.',
    keyInsight: 'Backtracking with constraints: can add "(" if open < n, can add ")" if close < open.',
    approach: 'Recursive DFS. Track open and close counts. Add "(" when open < n. Add ")" when close < open.',
    example: { input: 'n=3', output: '["((()))","(()())","(())()","()(())","()()()"]', trace: [
      { step: 'open=0,close=0', action: 'add "("', state: '"("' },
      { step: 'open=1,close=0', action: 'add "(" or ")"', state: '"((" or "()' },
    ]},
    solution: `def generateParenthesis(n):
    result = []
    def backtrack(s, open, close):
        if len(s) == 2 * n:
            result.append(s)
            return
        if open < n:
            backtrack(s + '(', open + 1, close)
        if close < open:
            backtrack(s + ')', open, close + 1)
    backtrack('', 0, 0)
    return result`,
    testCode: `print(generateParenthesis(1))  # ['()']
print(generateParenthesis(3))  # ['((()))','(()())','(())()','()(())','()()()']
print(len(generateParenthesis(4)))  # 14`,
    time: 'O(4ⁿ/√n)', space: 'O(n)',
  },
  'largest-rectangle-histogram': {
    id: 'largest-rectangle-histogram', title: 'Largest Rectangle in Histogram', number: 84,
    difficulty: 'Hard', category: 'stack',
    description: 'Find the largest rectangle in a histogram.',
    keyInsight: 'Monotonic increasing stack. For each bar, when a shorter bar arrives, pop taller bars and compute their max rectangle width.',
    approach: 'Stack stores (index, height). When height decreases, pop and extend the "start" back to where we can still use that height.',
    example: { input: '[2,1,5,6,2,3]', output: '10', trace: [
      { step: 'push 2@0, 1@1?', action: '1 < 2: pop (2,0) → area=2×1=2', state: 'start=0' },
      { step: 'push 5,6', action: 'increasing → just push', state: 'stack=[(1,0),(5,2),(6,3)]' },
    ]},
    solution: `def largestRectangleArea(heights):
    stack = []  # (index, height)
    max_area = 0
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            idx, height = stack.pop()
            max_area = max(max_area, height * (i - idx))
            start = idx
        stack.append((start, h))
    for idx, height in stack:
        max_area = max(max_area, height * (len(heights) - idx))
    return max_area`,
    testCode: `print(largestRectangleArea([2,1,5,6,2,3]))  # 10
print(largestRectangleArea([2,4]))           # 4`,
    time: 'O(n)', space: 'O(n)',
  },

  // ─── BINARY SEARCH ────────────────────────────────────────────────────────
  'binary-search': {
    id: 'binary-search', title: 'Binary Search', number: 704,
    difficulty: 'Easy', category: 'binary-search',
    description: 'Given a sorted array and a target, return the index of target or -1.',
    keyInsight: 'Check midpoint. If target < mid → search left half. If target > mid → search right half. Eliminates half the array each step.',
    approach: 'l=0, r=n-1. While l≤r: mid=(l+r)//2. Compare nums[mid] to target and update l or r.',
    example: { input: 'nums=[-1,0,3,5,9,12], target=9', output: '4', trace: [
      { step: 'l=0,r=5,mid=2', action: 'nums[2]=3 < 9 → l=3', state: '' },
      { step: 'l=3,r=5,mid=4', action: 'nums[4]=9 = 9 → found!', state: 'return 4' },
    ]},
    solution: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1`,
    testCode: `print(search([-1,0,3,5,9,12], 9))   # 4
print(search([-1,0,3,5,9,12], 2))   # -1`,
    time: 'O(log n)', space: 'O(1)',
  },
  'find-min-rotated': {
    id: 'find-min-rotated', title: 'Find Minimum in Rotated Sorted Array', number: 153,
    difficulty: 'Medium', category: 'binary-search',
    description: 'Find the minimum in a rotated sorted array (without duplicates).',
    keyInsight: 'If nums[mid] > nums[r], the minimum is in the right half. Otherwise it\'s in the left half (including mid).',
    approach: 'Binary search. Compare mid to right boundary. The unsorted half contains the minimum.',
    example: { input: '[3,4,5,1,2]', output: '1', trace: [
      { step: 'l=0,r=4,mid=2', action: 'nums[2]=5 > nums[4]=2 → min in right half, l=3', state: '' },
      { step: 'l=3,r=4,mid=3', action: 'nums[3]=1 < nums[4]=2 → min in left, r=3', state: '' },
      { step: 'l=3,r=3', action: 'return nums[3]=1', state: '' },
    ]},
    solution: `def findMin(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[r]:
            l = mid + 1
        else:
            r = mid
    return nums[l]`,
    testCode: `print(findMin([3,4,5,1,2]))      # 1
print(findMin([4,5,6,7,0,1,2]))  # 0
print(findMin([11,13,15,17]))    # 11`,
    time: 'O(log n)', space: 'O(1)',
  },
  'search-rotated': {
    id: 'search-rotated', title: 'Search in Rotated Sorted Array', number: 33,
    difficulty: 'Medium', category: 'binary-search',
    description: 'Search for target in a rotated sorted array.',
    keyInsight: 'At least one half of the array is always sorted. Determine which half, then check if target falls in it.',
    approach: 'At each midpoint, check which side is sorted. If target is in the sorted half → search there. Otherwise search the other half.',
    example: { input: 'nums=[4,5,6,7,0,1,2], target=0', output: '4', trace: [
      { step: 'l=0,r=6,mid=3', action: 'nums[0..3]=[4,5,6,7] sorted. target=0 not in [4..7] → search right', state: '' },
      { step: 'l=4,r=6,mid=5', action: 'nums[4..5]=[0,1] sorted. target=0 in [0..1] → search left', state: '' },
    ]},
    solution: `def searchRotated(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:  # left half sorted
            if nums[l] <= target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:  # right half sorted
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1`,
    testCode: `print(searchRotated([4,5,6,7,0,1,2], 0))  # 4
print(searchRotated([4,5,6,7,0,1,2], 3))  # -1
print(searchRotated([1], 0))              # -1`,
    time: 'O(log n)', space: 'O(1)',
  },
  'koko-bananas': {
    id: 'koko-bananas', title: 'Koko Eating Bananas', number: 875,
    difficulty: 'Medium', category: 'binary-search',
    description: 'Find the minimum eating speed k so Koko finishes all piles within h hours.',
    keyInsight: 'Binary search on the ANSWER (speed). For a given speed k, check if all piles can be eaten in h hours.',
    approach: 'Search space: speed from 1 to max(piles). For each candidate speed, simulate and check feasibility.',
    example: { input: 'piles=[3,6,7,11], h=8', output: '4', trace: [
      { step: 'speed range [1,11]', action: 'try mid=6: hours=1+1+2+2=6 ≤ 8 → try smaller', state: '' },
      { step: 'range [1,5]', action: 'try mid=3: hours=1+2+3+4=10 > 8 → try larger', state: '' },
      { step: 'range [4,5]', action: 'try mid=4: hours=1+2+2+3=8 ≤ 8 → try smaller', state: '' },
    ]},
    solution: `import math
def minEatingSpeed(piles, h):
    l, r = 1, max(piles)
    while l < r:
        mid = (l + r) // 2
        hours = sum(math.ceil(p / mid) for p in piles)
        if hours <= h:
            r = mid
        else:
            l = mid + 1
    return l`,
    testCode: `print(minEatingSpeed([3,6,7,11], 8))   # 4
print(minEatingSpeed([30,11,23,4,20], 5))  # 30
print(minEatingSpeed([30,11,23,4,20], 6))  # 23`,
    time: 'O(n log m)', space: 'O(1)',
  },

  // ─── LINKED LIST ──────────────────────────────────────────────────────────
  'reverse-linked-list': {
    id: 'reverse-linked-list', title: 'Reverse Linked List', number: 206,
    difficulty: 'Easy', category: 'linked-list',
    description: 'Reverse a singly linked list.',
    keyInsight: 'Need three pointers: prev (None), curr, next. Flip curr.next to prev, then advance all three.',
    approach: 'Iteratively: prev=None, curr=head. At each step: save next, flip pointer, advance both.',
    example: { input: '1→2→3→4→5', output: '5→4→3→2→1', trace: [
      { step: 'prev=None, curr=1', action: 'save next=2, 1.next=None, prev=1, curr=2', state: 'None←1  2→3→4→5' },
      { step: 'prev=1, curr=2', action: 'save next=3, 2.next=1, prev=2, curr=3', state: 'None←1←2  3→4→5' },
    ]},
    solution: `def reverseList(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
    testCode: `class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n
def L(lst):
    d = ListNode(); c = d
    for v in lst: c.next = ListNode(v); c = c.next
    return d.next
def toL(h):
    r = []
    while h: r.append(h.val); h = h.next
    return r

print(toL(reverseList(L([1,2,3,4,5]))))  # [5,4,3,2,1]
print(toL(reverseList(L([1,2]))))         # [2,1]
print(toL(reverseList(None)))             # []`,
    time: 'O(n)', space: 'O(1)',
  },
  'merge-two-sorted-lists': {
    id: 'merge-two-sorted-lists', title: 'Merge Two Sorted Lists', number: 21,
    difficulty: 'Easy', category: 'linked-list',
    description: 'Merge two sorted linked lists into one sorted list.',
    keyInsight: 'Use a dummy node to avoid edge cases. Compare heads of both lists, attach the smaller one.',
    approach: 'Dummy head node. While both lists have nodes: compare and attach the smaller. Attach the remaining list.',
    example: { input: '1→2→4, 1→3→4', output: '1→1→2→3→4→4', trace: [
      { step: 'dummy', action: '1≤1: attach l1.1, l1=2', state: 'dummy→1' },
      { step: 'curr→1', action: '2>1: attach l2.1, l2=3', state: '→1→1' },
      { step: 'curr→1', action: '2<3: attach l1.2, l1=4', state: '→1→1→2' },
    ]},
    solution: `def mergeTwoLists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`,
    testCode: `class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n
def L(lst):
    d = ListNode(); c = d
    for v in lst: c.next = ListNode(v); c = c.next
    return d.next
def toL(h):
    r = []
    while h: r.append(h.val); h = h.next
    return r

print(toL(mergeTwoLists(L([1,2,4]), L([1,3,4]))))  # [1,1,2,3,4,4]
print(toL(mergeTwoLists(None, None)))                # []
print(toL(mergeTwoLists(None, L([0]))))              # [0]`,
    time: 'O(n+m)', space: 'O(1)',
  },
  'reorder-list': {
    id: 'reorder-list', title: 'Reorder List', number: 143,
    difficulty: 'Medium', category: 'linked-list',
    description: 'Reorder list: L0→L1→…→Ln-1→Ln to L0→Ln→L1→Ln-1→…',
    keyInsight: 'Three steps: (1) Find middle, (2) Reverse second half, (3) Merge two halves alternately.',
    approach: 'Slow/fast pointers to find mid. Reverse from mid+1. Then interleave.',
    example: { input: '1→2→3→4→5', output: '1→5→2→4→3', trace: [
      { step: 'Find mid', action: 'mid=3 (slow/fast pointers)', state: '1→2→3 | 4→5' },
      { step: 'Reverse 2nd half', action: '5→4', state: '1→2→3, 5→4' },
      { step: 'Interleave', action: '1→5→2→4→3', state: 'done' },
    ]},
    solution: `def reorderList(head):
    # Find middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next; fast = fast.next.next

    # Reverse second half
    second = slow.next
    slow.next = None
    prev = None
    while second:
        tmp = second.next
        second.next = prev
        prev = second
        second = tmp

    # Merge
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2`,
    testCode: `class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n
def L(lst):
    d = ListNode(); c = d
    for v in lst: c.next = ListNode(v); c = c.next
    return d.next
def toL(h):
    r = []
    while h: r.append(h.val); h = h.next
    return r

head = L([1,2,3,4])
reorderList(head)
print(toL(head))  # [1,4,2,3]

head2 = L([1,2,3,4,5])
reorderList(head2)
print(toL(head2))  # [1,5,2,4,3]`,
    time: 'O(n)', space: 'O(1)',
  },
  'remove-nth-from-end': {
    id: 'remove-nth-from-end', title: 'Remove Nth Node From End of List', number: 19,
    difficulty: 'Medium', category: 'linked-list',
    description: 'Remove the nth node from the end of the list in one pass.',
    keyInsight: 'Use two pointers n apart. When the fast pointer reaches the end, slow pointer is at the node to remove.',
    approach: 'Advance fast by n+1 steps. Move both until fast is None. slow.next is the node to remove.',
    example: { input: '1→2→3→4→5, n=2', output: '1→2→3→5', trace: [
      { step: 'fast moves n+1=3 steps ahead', action: 'fast=3, slow=dummy', state: '' },
      { step: 'move both until fast=None', action: 'fast reaches end, slow=3', state: '' },
      { step: 'remove', action: 'slow.next=slow.next.next → skip 4', state: '1→2→3→5' },
    ]},
    solution: `def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next`,
    testCode: `class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n
def L(lst):
    d = ListNode(); c = d
    for v in lst: c.next = ListNode(v); c = c.next
    return d.next
def toL(h):
    r = []
    while h: r.append(h.val); h = h.next
    return r

print(toL(removeNthFromEnd(L([1,2,3,4,5]), 2)))  # [1,2,3,5]
print(toL(removeNthFromEnd(L([1]), 1)))           # []
print(toL(removeNthFromEnd(L([1,2]), 1)))         # [1]`,
    time: 'O(n)', space: 'O(1)',
  },
  'linked-list-cycle': {
    id: 'linked-list-cycle', title: 'Linked List Cycle', number: 141,
    difficulty: 'Easy', category: 'linked-list',
    description: 'Determine if a linked list has a cycle.',
    keyInsight: 'Floyd\'s cycle detection: slow moves 1 step, fast moves 2 steps. If they meet → cycle.',
    approach: 'Two pointers. Fast eventually laps slow in a cycle. If fast reaches null → no cycle.',
    example: { input: '3→2→0→-4→(back to 2)', output: 'true', trace: [
      { step: 'slow=3,fast=3', action: 'slow→2, fast→0', state: '' },
      { step: 'slow=2,fast=0', action: 'slow→0, fast→2 (via cycle)', state: '' },
      { step: 'slow=0,fast=2', action: 'slow→-4, fast→0', state: '' },
      { step: 'slow=-4,fast=0', action: 'slow→2, fast→2 → MEET', state: 'cycle!' },
    ]},
    solution: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
    testCode: `class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n

# No cycle
n1 = ListNode(3); n2 = ListNode(2); n3 = ListNode(0); n4 = ListNode(-4)
n1.next = n2; n2.next = n3; n3.next = n4
print(hasCycle(n1))  # False

# With cycle: -4 points back to n2
n3.next = n2
print(hasCycle(n1))  # True`,
    time: 'O(n)', space: 'O(1)',
  },

  // ─── TREES ────────────────────────────────────────────────────────────────
  'invert-binary-tree': {
    id: 'invert-binary-tree', title: 'Invert Binary Tree', number: 226,
    difficulty: 'Easy', category: 'trees',
    description: 'Invert a binary tree (mirror it).',
    keyInsight: 'Recursively swap left and right children at every node.',
    approach: 'Base case: None → return None. Swap root.left and root.right. Recurse on both children.',
    example: { input: '[4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]', trace: [
      { step: 'root=4', action: 'swap: left=7, right=2', state: '' },
      { step: 'root=7', action: 'swap: left=9, right=6', state: '' },
      { step: 'root=2', action: 'swap: left=3, right=1', state: '' },
    ]},
    solution: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,
    testCode: `from collections import deque
class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]
def level(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        n = q.popleft()
        res.append(n.val)
        if n.left: q.append(n.left)
        if n.right: q.append(n.right)
    return res

print(level(invertTree(build([4,2,7,1,3,6,9]))))  # [4,7,2,9,6,3,1]
print(level(invertTree(build([2,1,3]))))           # [2,3,1]`,
    time: 'O(n)', space: 'O(h) recursion stack',
  },
  'max-depth-tree': {
    id: 'max-depth-tree', title: 'Maximum Depth of Binary Tree', number: 104,
    difficulty: 'Easy', category: 'trees',
    description: 'Find the maximum depth (number of nodes along the longest path from root to a leaf).',
    keyInsight: 'Depth = 1 + max(depth of left subtree, depth of right subtree).',
    approach: 'Recursive DFS. Base case: null → 0. Return 1 + max(left depth, right depth).',
    example: { input: '[3,9,20,null,null,15,7]', output: '3', trace: [
      { step: 'root=3', action: 'go left and right', state: '' },
      { step: 'node=20', action: 'go left(15) and right(7)', state: '' },
      { step: 'leaves', action: 'return 1 each', state: '1+max(1,1)=2' },
      { step: 'root=3', action: '1+max(1,2)=3', state: 'depth=3' },
    ]},
    solution: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(maxDepth(build([3,9,20,None,None,15,7])))  # 3
print(maxDepth(build([1,None,2])))               # 2
print(maxDepth(None))                            # 0`,
    time: 'O(n)', space: 'O(h)',
  },
  'same-tree': {
    id: 'same-tree', title: 'Same Tree', number: 100,
    difficulty: 'Easy', category: 'trees',
    description: 'Check if two binary trees are the same (structurally and value-wise).',
    keyInsight: 'Recursively check: same values at root AND same structure in left AND right subtrees.',
    approach: 'If both null → true. If one null or values differ → false. Else recurse on both subtrees.',
    example: { input: 'p=[1,2,3], q=[1,2,3]', output: 'true', trace: [
      { step: 'p.val=1=q.val=1', action: 'recurse on left and right', state: '' },
      { step: 'p.val=2=q.val=2', action: 'recurse deeper', state: '' },
    ]},
    solution: `def isSameTree(p, q):
    if not p and not q: return True
    if not p or not q: return False
    if p.val != q.val: return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(isSameTree(build([1,2,3]), build([1,2,3])))    # True
print(isSameTree(build([1,2]), build([1,None,2])))   # False
print(isSameTree(build([1,2,1]), build([1,1,2])))    # False`,
    time: 'O(n)', space: 'O(h)',
  },
  'level-order-traversal': {
    id: 'level-order-traversal', title: 'Binary Tree Level Order Traversal', number: 102,
    difficulty: 'Medium', category: 'trees',
    description: 'Return the level-order traversal of a binary tree (breadth-first).',
    keyInsight: 'BFS with a queue. Process all nodes at one level before moving to the next. Track queue size at start of each level.',
    approach: 'Queue starts with root. At each level: record current queue length, process exactly that many nodes, add their children.',
    example: { input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]', trace: [
      { step: 'queue=[3]', action: 'process 3, add 9,20', state: 'level=[3]' },
      { step: 'queue=[9,20]', action: 'process 9(no children), 20(add 15,7)', state: 'level=[9,20]' },
      { step: 'queue=[15,7]', action: 'process 15,7', state: 'level=[15,7]' },
    ]},
    solution: `from collections import deque
def levelOrder(root):
    if not root: return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,
    testCode: `from collections import deque
class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(levelOrder(build([3,9,20,None,None,15,7])))  # [[3],[9,20],[15,7]]
print(levelOrder(build([1])))                       # [[1]]
print(levelOrder(None))                             # []`,
    time: 'O(n)', space: 'O(n)',
  },
  'validate-bst': {
    id: 'validate-bst', title: 'Validate Binary Search Tree', number: 98,
    difficulty: 'Medium', category: 'trees',
    description: 'Determine if a binary tree is a valid BST.',
    keyInsight: 'Each node must satisfy: min < node.val < max. The valid range narrows as we go deeper.',
    approach: 'Pass min/max bounds down the recursion. Left child: max becomes parent val. Right child: min becomes parent val.',
    example: { input: '[5,1,4,null,null,3,6]', output: 'false (4 is right child of 5 but 4<5)', trace: [
      { step: 'root=5', action: 'bounds (-∞,∞)', state: '5 in range ✓' },
      { step: 'right=4', action: 'bounds (5,∞)', state: '4 NOT > 5 ✗' },
    ]},
    solution: `def isValidBST(root, min_val=float('-inf'), max_val=float('inf')):
    if not root: return True
    if root.val <= min_val or root.val >= max_val:
        return False
    return (isValidBST(root.left, min_val, root.val) and
            isValidBST(root.right, root.val, max_val))`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(isValidBST(build([2,1,3])))         # True
print(isValidBST(build([5,1,4,None,None,3,6])))  # False (4 in right but <5)`,
    time: 'O(n)', space: 'O(h)',
  },
  'kth-smallest-bst': {
    id: 'kth-smallest-bst', title: 'Kth Smallest Element in a BST', number: 230,
    difficulty: 'Medium', category: 'trees',
    description: 'Find the kth smallest element in a BST.',
    keyInsight: 'Inorder traversal of a BST gives elements in ascending order. Stop at the kth element.',
    approach: 'Iterative inorder with a stack. Push all left nodes, pop one, decrement k, if k==0 return value.',
    example: { input: 'BST=[3,1,4,null,2], k=1', output: '1', trace: [
      { step: 'push left spine: [3,1]', action: 'pop 1, k=1→0 → return 1', state: 'k=0' },
    ]},
    solution: `def kthSmallest(root, k):
    stack = []
    curr = root
    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        curr = curr.right`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(kthSmallest(build([3,1,4,None,2]), 1))  # 1
print(kthSmallest(build([5,3,6,2,4,None,None,1]), 3))  # 3`,
    time: 'O(h+k)', space: 'O(h)',
  },
  'lca-bst': {
    id: 'lca-bst', title: 'Lowest Common Ancestor of a BST', number: 235,
    difficulty: 'Medium', category: 'trees',
    description: 'Find the lowest common ancestor of two nodes in a BST.',
    keyInsight: 'Use BST property: if both p and q are smaller than current node → go left. If both larger → go right. Otherwise current is LCA.',
    approach: 'Walk down the tree. If p and q split to different sides (or one equals current), current node is the LCA.',
    example: { input: 'BST=[6,2,8,0,4,7,9], p=2, q=8', output: '6', trace: [
      { step: 'root=6', action: 'p=2<6, q=8>6 → split here', state: 'LCA=6' },
    ]},
    solution: `def lowestCommonAncestor(root, p, q):
    curr = root
    while curr:
        if p.val < curr.val and q.val < curr.val:
            curr = curr.left
        elif p.val > curr.val and q.val > curr.val:
            curr = curr.right
        else:
            return curr`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

root = build([6,2,8,0,4,7,9,None,None,3,5])
p, q = TreeNode(2), TreeNode(8)
print(lowestCommonAncestor(root, p, q).val)  # 6

p, q = TreeNode(2), TreeNode(4)
print(lowestCommonAncestor(root, p, q).val)  # 2`,
    time: 'O(h)', space: 'O(1)',
  },
  'binary-tree-max-path': {
    id: 'binary-tree-max-path', title: 'Binary Tree Maximum Path Sum', number: 124,
    difficulty: 'Hard', category: 'trees',
    description: 'Find the path in a binary tree with the maximum sum. The path can start and end at any node.',
    keyInsight: 'For each node, max contribution upward = node.val + max(0, left gain, right gain). But the path through the node = node.val + max(0,left) + max(0,right).',
    approach: 'DFS. At each node compute max "gain" we can pass to parent. Update global max with the full path through this node.',
    example: { input: '[-10,9,20,null,null,15,7]', output: '42 (15→20→7)', trace: [
      { step: 'node=15', action: 'gain=15, path=15', state: 'max=15' },
      { step: 'node=7', action: 'gain=7, path=7', state: 'max=15' },
      { step: 'node=20', action: 'gain=20+15=35, path=15+20+7=42', state: 'max=42' },
    ]},
    solution: `def maxPathSum(root):
    max_sum = [float('-inf')]
    def dfs(node):
        if not node: return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        max_sum[0] = max(max_sum[0], node.val + left + right)
        return node.val + max(left, right)
    dfs(root)
    return max_sum[0]`,
    testCode: `class TreeNode:
    def __init__(self, v=0, l=None, r=None): self.val,self.left,self.right=v,l,r
def build(vals):
    if not vals: return None
    nodes = [TreeNode(v) if v is not None else None for v in vals]
    for i in range(len(nodes)):
        if nodes[i]:
            l, r = 2*i+1, 2*i+2
            if l < len(nodes): nodes[i].left = nodes[l]
            if r < len(nodes): nodes[i].right = nodes[r]
    return nodes[0]

print(maxPathSum(build([1,2,3])))                     # 6
print(maxPathSum(build([-10,9,20,None,None,15,7])))   # 42`,
    time: 'O(n)', space: 'O(h)',
  },

  // ─── HEAP ─────────────────────────────────────────────────────────────────
  'find-median-data-stream': {
    id: 'find-median-data-stream', title: 'Find Median from Data Stream', number: 295,
    difficulty: 'Hard', category: 'heap-priority-queue',
    description: 'Design a data structure to find median from a stream of numbers.',
    keyInsight: 'Use two heaps: max-heap for lower half, min-heap for upper half. Keep them balanced (sizes differ by at most 1).',
    approach: 'small = max-heap (negate), large = min-heap. Always push to small, then move top of small to large. Rebalance if sizes differ.',
    example: { input: 'addNum(1), addNum(2), findMedian, addNum(3)', output: '1.5, 2', trace: [
      { step: 'add 1', action: 'small=[-1], large=[]', state: 'median=1' },
      { step: 'add 2', action: 'small=[-1], large=[2]', state: 'median=1.5' },
      { step: 'add 3', action: 'small=[-2,-1], large=[3]', state: 'median=2' },
    ]},
    solution: `import heapq
class MedianFinder:
    def __init__(self):
        self.small = []  # max-heap (negated)
        self.large = []  # min-heap

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,
    testCode: `import heapq
mf = MedianFinder()
mf.addNum(1); mf.addNum(2)
print(mf.findMedian())  # 1.5
mf.addNum(3)
print(mf.findMedian())  # 2.0`,
    time: 'O(log n) add, O(1) median', space: 'O(n)',
  },
  'merge-k-sorted-lists': {
    id: 'merge-k-sorted-lists', title: 'Merge K Sorted Lists', number: 23,
    difficulty: 'Hard', category: 'heap-priority-queue',
    description: 'Merge k sorted linked lists into one sorted list.',
    keyInsight: 'Use a min-heap to always extract the globally smallest current node across all k lists.',
    approach: 'Push first node of each list into heap. Pop min, add its next to heap. Repeat.',
    example: { input: '[[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]', trace: [
      { step: 'heap: [(1,L0),(1,L1),(2,L2)]', action: 'pop 1(L0) → add 4(L0)', state: '→1' },
      { step: 'heap: [(1,L1),(2,L2),(4,L0)]', action: 'pop 1(L1) → add 3(L1)', state: '→1→1' },
    ]},
    solution: `import heapq
def mergeKLists(lists):
    dummy = ListNode(0)
    curr = dummy
    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next`,
    testCode: `import heapq
class ListNode:
    def __init__(self, v=0, n=None): self.val, self.next = v, n
def L(lst):
    d = ListNode(); c = d
    for v in lst: c.next = ListNode(v); c = c.next
    return d.next
def toL(h):
    r = []
    while h: r.append(h.val); h = h.next
    return r

print(toL(mergeKLists([L([1,4,5]),L([1,3,4]),L([2,6])])))  # [1,1,2,3,4,4,5,6]
print(toL(mergeKLists([])))                                  # []
print(toL(mergeKLists([None])))                              # []`,
    time: 'O(n log k)', space: 'O(k)',
  },

  // ─── BACKTRACKING ─────────────────────────────────────────────────────────
  'combination-sum': {
    id: 'combination-sum', title: 'Combination Sum', number: 39,
    difficulty: 'Medium', category: 'backtracking',
    description: 'Find all unique combinations of candidates that sum to target. Same number may be used multiple times.',
    keyInsight: 'DFS decision tree: at each position either include or skip a candidate. Reuse allowed, so don\'t advance the index when including.',
    approach: 'Backtrack with (index, current_sum, current_combo). Include candidates[i] and recurse. If sum > target → prune. If sum == target → add.',
    example: { input: 'candidates=[2,3,6,7], target=7', output: '[[2,2,3],[7]]', trace: [
      { step: 'choose 2', action: 'sum=2, recurse', state: '[2]' },
      { step: 'choose 2 again', action: 'sum=4, recurse', state: '[2,2]' },
      { step: 'choose 3', action: 'sum=7=target!', state: '[2,2,3] ✓' },
    ]},
    solution: `def combinationSum(candidates, target):
    result = []
    def backtrack(i, current, total):
        if total == target:
            result.append(current[:])
            return
        if i >= len(candidates) or total > target:
            return
        current.append(candidates[i])
        backtrack(i, current, total + candidates[i])
        current.pop()
        backtrack(i + 1, current, total)
    backtrack(0, [], 0)
    return result`,
    testCode: `print(combinationSum([2,3,6,7], 7))   # [[2,2,3],[7]]
print(combinationSum([2,3,5], 8))      # [[2,2,2,2],[2,3,3],[3,5]]
print(combinationSum([2], 1))          # []`,
    time: 'O(2^(t/m))', space: 'O(t/m)',
  },
  'word-search': {
    id: 'word-search', title: 'Word Search', number: 79,
    difficulty: 'Medium', category: 'backtracking',
    description: 'Given a grid and a word, find if the word exists in the grid using adjacent cells.',
    keyInsight: 'DFS from every starting position. Mark cells as visited during recursion, unmark on backtrack.',
    approach: 'For each cell matching word[0], do DFS in 4 directions. Mark visited with "#". Backtrack by restoring original char.',
    example: { input: 'board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"', output: 'true', trace: [
      { step: 'start at (0,0)="A"', action: 'mark visited, try 4 dirs', state: '' },
      { step: 'go right (0,1)="B"', action: 'mark, try dirs', state: '"AB"' },
      { step: 'found path', action: 'ABCCED found!', state: 'true' },
    ]},
    solution: `def exist(board, word):
    rows, cols = len(board), len(board[0])
    def dfs(r, c, i):
        if i == len(word): return True
        if r < 0 or r >= rows or c < 0 or c >= cols: return False
        if board[r][c] != word[i]: return False
        tmp, board[r][c] = board[r][c], '#'
        found = (dfs(r+1,c,i+1) or dfs(r-1,c,i+1) or
                 dfs(r,c+1,i+1) or dfs(r,c-1,i+1))
        board[r][c] = tmp
        return found
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0): return True
    return False`,
    testCode: `b1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
print(exist(b1, "ABCCED"))  # True
print(exist(b1, "SEE"))     # True
print(exist(b1, "ABCB"))    # False`,
    time: 'O(m·n·4^L)', space: 'O(L)',
  },

  // ─── GRAPHS ───────────────────────────────────────────────────────────────
  'number-of-islands': {
    id: 'number-of-islands', title: 'Number of Islands', number: 200,
    difficulty: 'Medium', category: 'graphs',
    description: 'Given a 2D grid of "1" (land) and "0" (water), count the number of islands.',
    keyInsight: 'DFS/BFS from each unvisited "1". Sink (mark "0") all connected land. Each DFS call = one island.',
    approach: 'Iterate all cells. When finding "1", increment count and DFS to mark the whole island as visited.',
    example: { input: '11110/11010/11000/00000', output: '1 island', trace: [
      { step: '(0,0)="1"', action: 'island++, DFS sinks all connected 1s', state: 'count=1' },
    ]},
    solution: `def numIslands(grid):
    count = 0
    def dfs(r, c):
        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]):
            return
        if grid[r][c] != '1': return
        grid[r][c] = '0'
        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
    testCode: `grid1 = [["1","1","1","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]]
print(numIslands(grid1))  # 1

grid2 = [["1","1","0","0","0"],
          ["1","1","0","0","0"],
          ["0","0","1","0","0"],
          ["0","0","0","1","1"]]
print(numIslands(grid2))  # 3`,
    time: 'O(m·n)', space: 'O(m·n)',
  },
  'clone-graph': {
    id: 'clone-graph', title: 'Clone Graph', number: 133,
    difficulty: 'Medium', category: 'graphs',
    description: 'Deep copy a connected undirected graph.',
    keyInsight: 'Use a hashmap: original node → clone. BFS/DFS and build clones as you traverse. Map prevents revisiting.',
    approach: 'DFS with oldToNew map. For each node: create a clone if not exists. Recursively clone all neighbors.',
    example: { input: 'node 1 connects to [2,4], node 2 connects to [1,3]...', output: 'deep copy', trace: [
      { step: 'visit node 1', action: 'clone 1, recurse on neighbors', state: 'map={1:clone1}' },
      { step: 'visit node 2', action: 'clone 2, recurse on neighbors', state: 'map={1,2}' },
    ]},
    solution: `def cloneGraph(node):
    if not node: return None
    old_to_new = {}
    def dfs(n):
        if n in old_to_new:
            return old_to_new[n]
        clone = Node(n.val)
        old_to_new[n] = clone
        for neighbor in n.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    return dfs(node)`,
    testCode: `class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors or []

# Build: 1-2-3-4-1 (cycle)
n1,n2,n3,n4 = Node(1),Node(2),Node(3),Node(4)
n1.neighbors=[n2,n4]; n2.neighbors=[n1,n3]
n3.neighbors=[n2,n4]; n4.neighbors=[n1,n3]

clone = cloneGraph(n1)
print(clone.val)                           # 1
print([n.val for n in clone.neighbors])    # [2, 4]
print(clone is not n1)                     # True (deep copy)`,
    time: 'O(V+E)', space: 'O(V)',
  },
  'course-schedule': {
    id: 'course-schedule', title: 'Course Schedule', number: 207,
    difficulty: 'Medium', category: 'graphs',
    description: 'Given prerequisites, determine if it\'s possible to finish all courses (detect cycle in directed graph).',
    keyInsight: 'Build adjacency list. DFS to detect cycle. A node is in a cycle if we visit it again while it\'s on the current path.',
    approach: 'Three states: unvisited, visiting (on current path), visited. If we reach a "visiting" node → cycle found.',
    example: { input: 'numCourses=2, prerequisites=[[1,0],[0,1]]', output: 'false (cycle: 0→1→0)', trace: [
      { step: 'DFS from 0', action: 'mark 0 as visiting', state: 'path=[0]' },
      { step: 'visit 1', action: 'mark 1 as visiting, visit 0', state: 'path=[0,1]' },
      { step: 'visit 0', action: '0 is visiting → CYCLE!', state: 'return false' },
    ]},
    solution: `def canFinish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        adj[a].append(b)
    # 0=unvisited, 1=visiting, 2=done
    state = [0] * numCourses
    def dfs(node):
        if state[node] == 1: return False  # cycle
        if state[node] == 2: return True
        state[node] = 1
        for nei in adj[node]:
            if not dfs(nei): return False
        state[node] = 2
        return True
    return all(dfs(i) for i in range(numCourses))`,
    testCode: `print(canFinish(2, [[1,0]]))            # True  (0→1, no cycle)
print(canFinish(2, [[1,0],[0,1]]))       # False (cycle: 0↔1)
print(canFinish(5, [[1,0],[2,0],[3,1],[4,3]]))  # True`,
    time: 'O(V+E)', space: 'O(V+E)',
  },
  'pacific-atlantic': {
    id: 'pacific-atlantic', title: 'Pacific Atlantic Water Flow', number: 417,
    difficulty: 'Medium', category: 'graphs',
    description: 'Find cells where water can flow to both Pacific and Atlantic oceans.',
    keyInsight: 'Reverse BFS/DFS: start from ocean borders and find which cells CAN reach each ocean. Intersect both sets.',
    approach: 'BFS from Pacific borders (top+left) and Atlantic borders (bottom+right). A cell can flow if neighbor height ≥ current height.',
    example: { input: '5x5 matrix', output: 'cells reachable by both oceans', trace: [
      { step: 'Pacific BFS from borders', action: 'expand inward while height ≥ current', state: 'pacific_set' },
      { step: 'Atlantic BFS from borders', action: 'expand inward while height ≥ current', state: 'atlantic_set' },
      { step: 'Intersect', action: 'cells in both sets', state: 'result' },
    ]},
    solution: `from collections import deque
def pacificAtlantic(heights):
    rows, cols = len(heights), len(heights[0])
    def bfs(starts):
        visited = set(starts)
        q = deque(starts)
        while q:
            r, c = q.popleft()
            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
                nr, nc = r+dr, c+dc
                if (0<=nr<rows and 0<=nc<cols and
                    (nr,nc) not in visited and
                    heights[nr][nc] >= heights[r][c]):
                    visited.add((nr,nc))
                    q.append((nr,nc))
        return visited
    pacific = bfs([(0,c) for c in range(cols)] + [(r,0) for r in range(rows)])
    atlantic = bfs([(rows-1,c) for c in range(cols)] + [(r,cols-1) for r in range(rows)])
    return [[r,c] for r,c in pacific & atlantic]`,
    testCode: `from collections import deque
h = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
result = sorted(pacificAtlantic(h))
print(result)  # [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]`,
    time: 'O(m·n)', space: 'O(m·n)',
  },

  // ─── DYNAMIC PROGRAMMING ──────────────────────────────────────────────────
  'climbing-stairs': {
    id: 'climbing-stairs', title: 'Climbing Stairs', number: 70,
    difficulty: 'Easy', category: 'dynamic-programming',
    description: 'Climbing n stairs, 1 or 2 steps at a time. How many distinct ways?',
    keyInsight: 'To reach step n, you came from step n-1 (1 step) or step n-2 (2 steps). This is Fibonacci!',
    approach: 'dp[i] = dp[i-1] + dp[i-2]. Base: dp[1]=1, dp[2]=2. Only need last two values.',
    example: { input: 'n=5', output: '8', trace: [
      { step: 'n=1:1, n=2:2', action: '', state: '' },
      { step: 'n=3', action: '1+2=3', state: '' },
      { step: 'n=4', action: '2+3=5', state: '' },
      { step: 'n=5', action: '3+5=8', state: '8 ways' },
    ]},
    solution: `def climbStairs(n):
    if n <= 2: return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2
    return prev1`,
    testCode: `print(climbStairs(1))   # 1
print(climbStairs(2))   # 2
print(climbStairs(5))   # 8
print(climbStairs(10))  # 89`,
    time: 'O(n)', space: 'O(1)',
  },
  'house-robber': {
    id: 'house-robber', title: 'House Robber', number: 198,
    difficulty: 'Medium', category: 'dynamic-programming',
    description: 'Rob houses along a street. Cannot rob two adjacent houses. Maximize amount.',
    keyInsight: 'At each house: rob it (prev2 + curr) OR skip it (prev1). Take the max.',
    approach: 'dp[i] = max(dp[i-2] + nums[i], dp[i-1]). Only need last two values.',
    example: { input: '[2,7,9,3,1]', output: '12 (rob 2,9,1)', trace: [
      { step: 'i=0: 2', action: 'rob2=0, rob1=2', state: '2' },
      { step: 'i=1: 7', action: 'max(0+7, 2)=7', state: '7' },
      { step: 'i=2: 9', action: 'max(2+9, 7)=11', state: '11' },
      { step: 'i=3: 3', action: 'max(7+3, 11)=11', state: '11' },
      { step: 'i=4: 1', action: 'max(11+1, 11)=12', state: '12' },
    ]},
    solution: `def rob(nums):
    prev2, prev1 = 0, 0
    for n in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + n)
    return prev1`,
    testCode: `print(rob([1,2,3,1]))      # 4  (rob 1 and 3)
print(rob([2,7,9,3,1]))    # 12 (rob 2,9,1)
print(rob([2,1,1,2]))      # 4`,
    time: 'O(n)', space: 'O(1)',
  },
  'coin-change': {
    id: 'coin-change', title: 'Coin Change', number: 322,
    difficulty: 'Medium', category: 'dynamic-programming',
    description: 'Find the minimum number of coins needed to make up amount.',
    keyInsight: 'dp[i] = min coins to make amount i. For each amount, try all coins.',
    approach: 'Initialize dp[0..amount] = infinity. dp[0]=0. For each amount i, dp[i] = min(dp[i], dp[i-coin]+1) for each coin.',
    example: { input: 'coins=[1,2,5], amount=11', output: '3 (5+5+1)', trace: [
      { step: 'dp=[0,∞,...,∞]', action: '', state: '' },
      { step: 'amount=1', action: 'coin=1: dp[0]+1=1', state: 'dp[1]=1' },
      { step: 'amount=5', action: 'coin=5: dp[0]+1=1', state: 'dp[5]=1' },
      { step: 'amount=11', action: 'coin=5: dp[6]+1=3', state: 'dp[11]=3' },
    ]},
    solution: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
    testCode: `print(coinChange([1, 2, 5], 11))   # 3  (5+5+1)
print(coinChange([2], 3))           # -1 (impossible)
print(coinChange([1], 0))           # 0`,
    time: 'O(amount × coins)', space: 'O(amount)',
  },
  'longest-increasing-subsequence': {
    id: 'longest-increasing-subsequence', title: 'Longest Increasing Subsequence', number: 300,
    difficulty: 'Medium', category: 'dynamic-programming',
    description: 'Find the length of the longest strictly increasing subsequence.',
    keyInsight: 'dp[i] = length of LIS ending at index i. For each i, look at all j < i where nums[j] < nums[i].',
    approach: 'dp[i] = 1 + max(dp[j] for j < i if nums[j] < nums[i]). Answer is max(dp).',
    example: { input: '[10,9,2,5,3,7,101,18]', output: '4 (2,3,7,101)', trace: [
      { step: 'dp=[1,1,1,1,1,1,1,1]', action: '', state: '' },
      { step: 'i=3 (5)', action: 'j=2(2<5): dp[3]=dp[2]+1=2', state: 'dp[3]=2' },
      { step: 'i=5 (7)', action: 'j=4(3<7): dp[5]=dp[4]+1=3', state: 'dp[5]=3' },
      { step: 'i=6 (101)', action: 'j=5(7<101): dp[6]=dp[5]+1=4', state: 'dp[6]=4' },
    ]},
    solution: `def lengthOfLIS(nums):
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)`,
    testCode: `print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # 4  (2,3,7,101)
print(lengthOfLIS([0,1,0,3,2,3]))           # 4
print(lengthOfLIS([7,7,7,7,7]))             # 1`,
    time: 'O(n²)', space: 'O(n)',
  },
  'word-break': {
    id: 'word-break', title: 'Word Break', number: 139,
    difficulty: 'Medium', category: 'dynamic-programming',
    description: 'Determine if string s can be segmented into words from a dictionary.',
    keyInsight: 'dp[i] = can s[0..i-1] be segmented? dp[i] = true if dp[j] is true and s[j..i] is a word.',
    approach: 'dp[0] = true. For each position i, check all substrings ending at i. If dp[j] and s[j:i] in wordSet → dp[i] = true.',
    example: { input: 's="leetcode", wordDict=["leet","code"]', output: 'true', trace: [
      { step: 'dp=[T,F,F,...,F]', action: '', state: '' },
      { step: 'i=4', action: 'j=0: dp[0]=T, "leet"∈dict → dp[4]=T', state: 'dp[4]=T' },
      { step: 'i=8', action: 'j=4: dp[4]=T, "code"∈dict → dp[8]=T', state: 'dp[8]=T' },
    ]},
    solution: `def wordBreak(s, wordDict):
    word_set = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[len(s)]`,
    testCode: `print(wordBreak("leetcode", ["leet","code"]))         # True
print(wordBreak("applepenapple", ["apple","pen"]))   # True
print(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))  # False`,
    time: 'O(n²)', space: 'O(n)',
  },

  // ─── INTERVALS ────────────────────────────────────────────────────────────
  'merge-intervals': {
    id: 'merge-intervals', title: 'Merge Intervals', number: 56,
    difficulty: 'Medium', category: 'intervals',
    description: 'Given a collection of intervals, merge all overlapping intervals.',
    keyInsight: 'Sort by start time. If current start ≤ last merged end → overlapping, extend end. Else → add new interval.',
    approach: 'Sort. Iterate: if overlap (curr[0] ≤ last end) → merge (extend end). Else append new interval.',
    example: { input: '[[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', trace: [
      { step: '[1,3]', action: 'result=[[1,3]]', state: '' },
      { step: '[2,6]', action: '2≤3: overlap! extend to [1,6]', state: '[[1,6]]' },
      { step: '[8,10]', action: '8>6: no overlap, add', state: '[[1,6],[8,10]]' },
    ]},
    solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= result[-1][1]:
            result[-1][1] = max(result[-1][1], end)
        else:
            result.append([start, end])
    return result`,
    testCode: `print(merge([[1,3],[2,6],[8,10],[15,18]]))  # [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))                 # [[1,5]]
print(merge([[1,4],[0,4]]))                 # [[0,4]]`,
    time: 'O(n log n)', space: 'O(1)',
  },
  'insert-interval': {
    id: 'insert-interval', title: 'Insert Interval', number: 57,
    difficulty: 'Medium', category: 'intervals',
    description: 'Insert a new interval into a sorted non-overlapping list, merging as needed.',
    keyInsight: 'Three phases: (1) add all intervals ending before new interval starts, (2) merge all overlapping intervals, (3) add remaining.',
    approach: 'Iterate: while interval ends before new → add. While overlap → expand new interval. Add new. Add rest.',
    example: { input: '[[1,3],[6,9]], newInterval=[2,5]', output: '[[1,5],[6,9]]', trace: [
      { step: '[1,3]', action: '3 ≥ 2 (overlap!) → new=[1,5]', state: '' },
      { step: '[6,9]', action: '6 > 5 → add new=[1,5], then [6,9]', state: '[[1,5],[6,9]]' },
    ]},
    solution: `def insert(intervals, newInterval):
    result = []
    i = 0
    # Add non-overlapping before
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        result.append(intervals[i]); i += 1
    # Merge overlapping
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    result.append(newInterval)
    result.extend(intervals[i:])
    return result`,
    testCode: `print(insert([[1,3],[6,9]], [2,5]))               # [[1,5],[6,9]]
print(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))  # [[1,2],[3,10],[12,16]]`,
    time: 'O(n)', space: 'O(1)',
  },
  'non-overlapping-intervals': {
    id: 'non-overlapping-intervals', title: 'Non-overlapping Intervals', number: 435,
    difficulty: 'Medium', category: 'intervals',
    description: 'Find the minimum number of intervals to remove to make the rest non-overlapping.',
    keyInsight: 'Greedy: sort by end time. Keep intervals with earliest end time. When conflict, remove the one with later end (the one we just saw).',
    approach: 'Sort by end. Track prevEnd. If curr.start < prevEnd → overlap, remove (count++). Else update prevEnd.',
    example: { input: '[[1,2],[2,3],[3,4],[1,3]]', output: '1 (remove [1,3])', trace: [
      { step: 'sorted by end: [1,2],[1,3],[2,3],[3,4]', action: '', state: '' },
      { step: 'prevEnd=2,[1,3]', action: '1<2 overlap! count=1, keep end=2', state: '' },
      { step: 'prevEnd=2,[2,3]', action: '2≥2 no overlap, prevEnd=3', state: '' },
    ]},
    solution: `def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 0
    prev_end = float('-inf')
    for start, end in intervals:
        if start < prev_end:
            count += 1
        else:
            prev_end = end
    return count`,
    testCode: `print(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))  # 1
print(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))         # 2
print(eraseOverlapIntervals([[1,2],[2,3]]))               # 0`,
    time: 'O(n log n)', space: 'O(1)',
  },

  // ─── BIT MANIPULATION ─────────────────────────────────────────────────────
  'number-of-1-bits': {
    id: 'number-of-1-bits', title: 'Number of 1 Bits', number: 191,
    difficulty: 'Easy', category: 'bit-manipulation',
    description: 'Return the number of "1" bits in the binary representation of n (Hamming weight).',
    keyInsight: 'n & (n-1) clears the lowest set bit. Count how many times you can do this before n = 0.',
    approach: 'While n != 0: n = n & (n-1) clears the rightmost 1-bit. Count operations.',
    example: { input: 'n=11 (1011 in binary)', output: '3', trace: [
      { step: 'n=1011', action: 'n&(n-1)=1011&1010=1010, count=1', state: '' },
      { step: 'n=1010', action: 'n&(n-1)=1010&1001=1000, count=2', state: '' },
      { step: 'n=1000', action: 'n&(n-1)=1000&0111=0, count=3', state: 'done' },
    ]},
    solution: `def hammingWeight(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count`,
    testCode: `print(hammingWeight(11))          # 3  (1011 has three 1s)
print(hammingWeight(128))         # 1  (10000000)
print(hammingWeight(2147483645))  # 30`,
    time: 'O(log n)', space: 'O(1)',
  },
  'counting-bits': {
    id: 'counting-bits', title: 'Counting Bits', number: 338,
    difficulty: 'Easy', category: 'bit-manipulation',
    description: 'Return array ans where ans[i] is the number of 1 bits in i, for 0 ≤ i ≤ n.',
    keyInsight: 'dp: ans[i] = ans[i >> 1] + (i & 1). Shifting right divides by 2, and we add back the last bit.',
    approach: 'For each i: right shift by 1 (already computed) + check if i is odd (last bit).',
    example: { input: 'n=5', output: '[0,1,1,2,1,2]', trace: [
      { step: 'dp[0]=0', action: 'base case', state: '' },
      { step: 'dp[3]', action: 'dp[3>>1]+3&1 = dp[1]+1 = 1+1=2', state: '' },
      { step: 'dp[5]', action: 'dp[5>>1]+5&1 = dp[2]+1 = 1+1=2', state: '' },
    ]},
    solution: `def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp`,
    testCode: `print(countBits(2))   # [0,1,1]
print(countBits(5))   # [0,1,1,2,1,2]`,
    time: 'O(n)', space: 'O(1) excluding output',
  },
  'reverse-bits': {
    id: 'reverse-bits', title: 'Reverse Bits', number: 190,
    difficulty: 'Easy', category: 'bit-manipulation',
    description: 'Reverse the bits of a 32-bit unsigned integer.',
    keyInsight: 'Extract the last bit of n, shift result left and add it. Repeat 32 times.',
    approach: 'Loop 32 times: result = (result << 1) | (n & 1). Then n >>= 1.',
    example: { input: '00000010100101000001111010011100', output: '00111001011110000010100101000000', trace: [
      { step: 'i=0', action: 'last bit of n=0, result=0', state: '' },
      { step: 'i=1', action: 'last bit=0, result=00', state: '' },
      { step: '...extract bits...', action: 'reverse by shifting', state: '' },
    ]},
    solution: `def reverseBits(n):
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result`,
    testCode: `# 43261596 = 00000010100101000001111010011100 binary
print(reverseBits(43261596))   # 964176192
# 4294967293 = 11111111111111111111111111111101
print(reverseBits(4294967293)) # 3221225471`,
    time: 'O(1)', space: 'O(1)',
  },
  'missing-number': {
    id: 'missing-number', title: 'Missing Number', number: 268,
    difficulty: 'Easy', category: 'bit-manipulation',
    description: 'Given array containing n distinct numbers from 0 to n, find the missing number.',
    keyInsight: 'XOR of all numbers 0..n with all nums in array cancels pairs. What\'s left is the missing number.',
    approach: 'XOR everything in the array with its index AND n. All duplicates cancel out.',
    example: { input: '[3,0,1]', output: '2', trace: [
      { step: 'XOR: 3^0 ^ 0^1 ^ 1^2 ^ 3^2', action: '= 2 (all pairs cancel)', state: 'missing=2' },
    ]},
    solution: `def missingNumber(nums):
    result = len(nums)
    for i, n in enumerate(nums):
        result ^= i ^ n
    return result`,
    testCode: `print(missingNumber([3,0,1]))    # 2
print(missingNumber([0,1]))      # 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # 8`,
    time: 'O(n)', space: 'O(1)',
  },
  'sum-of-two-integers': {
    id: 'sum-of-two-integers', title: 'Sum of Two Integers', number: 371,
    difficulty: 'Medium', category: 'bit-manipulation',
    description: 'Add two integers without using + or - operators.',
    keyInsight: 'XOR gives sum without carry. AND gives carry bits (shift left by 1). Repeat until no carry.',
    approach: 'a ^ b = sum without carry. (a & b) << 1 = carry. Keep repeating until carry is 0.',
    example: { input: 'a=1(001), b=2(010)', output: '3(011)', trace: [
      { step: 'XOR: 001^010=011', action: 'AND: 001&010=000 (no carry)', state: 'result=3' },
    ]},
    solution: `def getSum(a, b):
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    return a if b == 0 else a & mask`,
    testCode: `print(getSum(1, 2))    # 3
print(getSum(2, 3))    # 5
print(getSum(-1, 1))   # 0`,
    time: 'O(1)', space: 'O(1)',
  },
};

export const categoryProblems = {
  'arrays-hashing': ['contains-duplicate','valid-anagram','two-sum','group-anagrams','top-k-frequent','product-except-self','longest-consecutive'],
  'two-pointers': ['valid-palindrome','three-sum','container-with-water','trapping-rain-water'],
  'sliding-window': ['best-time-stock','longest-substring-no-repeat','longest-repeating-replacement','minimum-window-substring'],
  'stack': ['valid-parentheses','min-stack','daily-temperatures','evaluate-rpn','generate-parentheses','largest-rectangle-histogram'],
  'binary-search': ['binary-search','find-min-rotated','search-rotated','koko-bananas'],
  'linked-list': ['reverse-linked-list','merge-two-sorted-lists','reorder-list','remove-nth-from-end','linked-list-cycle'],
  'trees': ['invert-binary-tree','max-depth-tree','same-tree','level-order-traversal','validate-bst','kth-smallest-bst','lca-bst','binary-tree-max-path'],
  'heap-priority-queue': ['find-median-data-stream','merge-k-sorted-lists'],
  'backtracking': ['combination-sum','word-search'],
  'graphs': ['number-of-islands','clone-graph','course-schedule','pacific-atlantic'],
  'dynamic-programming': ['climbing-stairs','house-robber','coin-change','longest-increasing-subsequence','word-break'],
  'intervals': ['merge-intervals','insert-interval','non-overlapping-intervals'],
  'bit-manipulation': ['number-of-1-bits','counting-bits','reverse-bits','missing-number','sum-of-two-integers'],
};
