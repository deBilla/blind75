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
    clarifyingQuestions: [
      'Can the array be empty? (return false)',
      'Any constraints on value range?',
      'Should I return true/false or the duplicate element itself?',
    ],
    approachWalkthrough: 'I\'d use a hash set to track seen values. I iterate through nums — if the current element is already in the set, I return true immediately. Otherwise I add it. This avoids O(n²) brute-force by trading a bit of space for O(1) lookups.',
    codeQuality: [
      'Name the set `seen` — makes intent self-documenting',
      'Return early on first duplicate, no need to process the rest',
      'One loop, one set, one clear responsibility',
    ],
    gettingUnstuck: [
      'Start with brute force: compare every pair — O(n²)',
      'Ask: what data structure gives O(1) membership check?',
      'Trace manually: [1,2,3,1] — when do you first see a repeat?',
    ],
    complexityBreakdown: 'Time O(n): one pass through the array; each set lookup and insert is O(1). Space O(n): worst case (no duplicates) the set holds every element.',
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
    clarifyingQuestions: [
      'Can the strings contain non-ASCII characters or just lowercase letters?',
      'Are they guaranteed the same length? (different lengths → false immediately)',
      'Is the comparison case-sensitive?',
    ],
    approachWalkthrough: 'I\'d count character frequencies using one map. Increment for each char in s, decrement for each char in t. Any non-zero count means they\'re not anagrams. Short-circuit if lengths differ.',
    codeQuality: [
      'Check `len(s) != len(t)` first — cheap early exit',
      'One dict: increment for s, decrement for t',
      'Use `count.get(c, 0)` rather than try/except for missing keys',
    ],
    gettingUnstuck: [
      'What defines an anagram? Same characters, same frequencies.',
      'Could I sort both strings and compare? O(n log n) — valid brute force.',
      'Hash map: count chars in s, subtract chars in t — O(n) time.',
    ],
    complexityBreakdown: 'Time O(n): two passes over strings of length n. Space O(1): the frequency map has at most 26 lowercase letter keys regardless of input size.',
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
    clarifyingQuestions: [
      'Will there always be exactly one valid solution?',
      'Can I use the same element twice? (problem says no)',
      'Can nums contain negatives or zeros?',
      'Should I return indices or values?',
    ],
    approachWalkthrough: 'I\'d use a hash map from value to index. For each number, I compute complement = target - current. If the complement is already in the map, I\'ve found my pair and return both indices. Otherwise I store the current number.',
    codeQuality: [
      'Name the map `seen` — value→index, self-documenting',
      'Compute `complement = target - n` as a named variable',
      'No nested loops — the map is the "search by complement" mechanism',
    ],
    gettingUnstuck: [
      'Brute force: try every pair — O(n²). Name this first.',
      'Optimization: for each n, what do I need to already know? target - n.',
      'Hash map lets me check "have I seen target-n before?" in O(1).',
    ],
    complexityBreakdown: 'Time O(n): one pass; each hash map lookup and insert is O(1). Space O(n): worst case we store n-1 values before finding the answer.',
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
    clarifyingQuestions: [
      'Can the input contain empty strings? (empty string is an anagram of itself)',
      'Are strings guaranteed lowercase letters only?',
      'Does the output order of groups matter?',
    ],
    approachWalkthrough: 'I\'d sort each word\'s characters to get a canonical key — all anagrams share the same sorted form. Use a hash map from sorted-key to list of original words. One pass, insert each word under its key.',
    codeQuality: [
      'Use `tuple(sorted(word))` as the key — tuples are hashable, lists are not',
      '`defaultdict(list)` avoids an explicit key-exists check',
      'Expressive: "group words by their sorted form" reads like the algorithm itself',
    ],
    gettingUnstuck: [
      'What property do all anagrams share? Same character frequencies.',
      'How do you canonicalize that? Sort the characters.',
      'What if sorting is too slow? A 26-count tuple is also a valid O(k) key.',
    ],
    complexityBreakdown: 'Time O(n·k·log k): for each of n words, sorting takes O(k log k) where k is word length. Space O(n·k): storing all n words grouped by key.',
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
    clarifyingQuestions: [
      'Is k guaranteed to be ≤ number of unique elements?',
      'Can there be ties in frequency? (problem guarantees a unique answer)',
      'Must results be in any particular order?',
    ],
    approachWalkthrough: 'I\'d use bucket sort by frequency. Count frequencies with a hash map, then create n+1 buckets indexed by frequency. Scan from the highest bucket down, collecting elements until I have k. This avoids a heap and runs in O(n).',
    codeQuality: [
      'Bucket array length is len(nums)+1 — index directly maps to frequency',
      'Scan buckets from the end to get highest-frequency first',
      'No heap needed — bucket sort leverages the bounded frequency range',
    ],
    gettingUnstuck: [
      'Naive: count frequencies then sort by frequency — O(n log n). Valid starting point.',
      'Can we do better? Frequency is bounded by n, so bucket sort works.',
      'Heap approach: push all (freq, num) pairs, pop k — O(n log k). Also valid.',
    ],
    complexityBreakdown: 'Time O(n): frequency counting is O(n), building n+1 buckets is O(n), scanning buckets is O(n). Space O(n): count map and bucket array both hold at most n entries.',
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
    clarifyingQuestions: [
      'Can the array contain zeros? (yes, zeros affect output)',
      'Can I use division? (problem says no)',
      'Is the output array counted toward space complexity? (typically no)',
    ],
    approachWalkthrough: 'Two passes on the output array. First pass left-to-right: fill prefix products. Second pass right-to-left: multiply each position by a running suffix product. Output[i] = prefix[i] × suffix[i] without ever dividing.',
    codeQuality: [
      'Use the output array itself for prefix — avoids an extra O(n) array',
      'Use a running `suffix` variable in the second pass — no extra array',
      'Name the running variables clearly: `prefix` and `suffix` communicate intent',
    ],
    gettingUnstuck: [
      'output[i] = (product of everything left of i) × (product of everything right of i)',
      'Can I compute left products in one pass? Yes — running product left to right.',
      'Can I compute right products without storing all of them? Yes — running product right to left.',
    ],
    complexityBreakdown: 'Time O(n): two linear passes. Space O(1) excluding the output array: only two scalar running variables (prefix and suffix), no auxiliary arrays.',
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
    clarifyingQuestions: [
      'Are there duplicates in the array? (handle by converting to set)',
      'Can the array be empty? (return 0)',
      'Must it be O(n)? (yes, the problem specifies this)',
    ],
    approachWalkthrough: 'Convert nums to a set for O(1) lookup. For each number, only start counting a sequence if num-1 is NOT in the set — that ensures I only process from the true start, preventing O(n²) redundant counting.',
    codeQuality: [
      'Convert to set first — all subsequent lookups are O(1)',
      'The `if n-1 not in num_set` guard is the key optimization — state it explicitly in an interview',
      'Use a `while` loop for counting, `best = max(best, length)` to track the answer',
    ],
    gettingUnstuck: [
      'Brute force: sort and scan — O(n log n). Valid but not O(n).',
      'Why does O(n) need a set? To check "is this a sequence start?" in O(1).',
      'Each number is visited at most twice across all sequence counts — total is O(n).',
    ],
    complexityBreakdown: 'Time O(n): building the set is O(n). Each element starts at most one sequence and the inner while loop is bounded by n total steps across all iterations. Space O(n): the set holds all elements.',
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
    clarifyingQuestions: [
      'Should I ignore case? (yes)',
      'Should I ignore non-alphanumeric characters? (yes)',
      'Is an empty string considered a palindrome? (yes)',
    ],
    approachWalkthrough: 'Two pointers starting at each end. Skip non-alphanumeric on both sides. Compare lowercased characters — if mismatch, return false. If pointers cross without mismatch, it\'s a palindrome.',
    codeQuality: [
      'Inner `while` loops skip non-alphanumeric cleanly — don\'t mix that logic into the comparison',
      'Use `.isalnum()` and `.lower()` — clear built-in methods',
      'No string cleaning step needed — skip on the fly for O(1) space',
    ],
    gettingUnstuck: [
      'Simplest: strip non-alphanumeric, lowercase, compare s == s[::-1] — O(n) space',
      'Two-pointer version avoids creating a cleaned string — O(1) space',
      'What does "valid palindrome" mean precisely? Same forward and backward after filtering.',
    ],
    complexityBreakdown: 'Time O(n): each character is visited at most once per pointer. Space O(1): no cleaned copy of the string is made — we work in-place with index variables.',
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
    clarifyingQuestions: [
      'Can the array contain duplicates? (yes — need to skip them)',
      'Must output triplets be unique? (yes)',
      'What\'s expected for fewer than 3 elements? (return [])',
      'Are the triplets required to be sorted? (any order within each triplet is fine)',
    ],
    approachWalkthrough: 'Sort first — enables two-pointer and duplicate skipping. Fix the first element at i, then use left/right pointers on the rest to find pairs summing to -nums[i]. After adding a triplet, skip duplicate values on both pointers.',
    codeQuality: [
      'Sorting is essential — enables two-pointer and clean duplicate skipping',
      'Skip duplicate i values: `if i > 0 and nums[i] == nums[i-1]: continue`',
      'After adding a triplet, advance both pointers past duplicates',
    ],
    gettingUnstuck: [
      'Think of it as: fix one number, then it becomes 2Sum on the remainder.',
      'Sorting enables two-pointer — without it you can\'t efficiently skip duplicates.',
      'Tricky part is duplicate handling — trace through [0,0,0,0] carefully.',
    ],
    complexityBreakdown: 'Time O(n²): sorting is O(n log n), then O(n) outer loop × O(n) two-pointer inner loop = O(n²) dominates. Space O(1) excluding output: sort in-place, no extra data structures.',
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
    clarifyingQuestions: [
      'Can heights be zero? (yes)',
      'Is there always at least two lines? (yes)',
      'Are we maximizing 2D cross-section area? (yes)',
    ],
    approachWalkthrough: 'Start with widest container — pointers at both ends. Area = min(height[l], height[r]) × width. Width only decreases as we converge, so the only way to improve is to find a taller height — move the shorter pointer inward.',
    codeQuality: [
      'The greedy insight must be stated: move the SHORTER pointer — it\'s the only chance to improve',
      '`area = min(height[l], height[r]) * (r - l)` reads exactly like the formula',
      'No helper functions needed — one while loop captures everything',
    ],
    gettingUnstuck: [
      'Brute force: try all pairs — O(n²). Name this first.',
      'Key insight: moving the taller pointer inward can\'t help — the shorter side still limits us AND width decreases.',
      'Therefore: always move the shorter pointer. This greedy choice is safe.',
    ],
    complexityBreakdown: 'Time O(n): each pointer moves inward at most n/2 times, meeting in the middle. Space O(1): only two pointers and a running maximum.',
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
    clarifyingQuestions: [
      'Can heights be zero? (yes)',
      'What is the water at the boundary positions? (always 0)',
      'Is the input guaranteed to have at least 2 elements?',
    ],
    approachWalkthrough: 'Water at any position i = min(maxLeft, maxRight) - height[i]. I use two pointers and process the side with the smaller maximum first — that side is the bottleneck, so I can safely compute water there without knowing the full other side.',
    codeQuality: [
      'Process the side with smaller max — eliminates the need for precomputed arrays',
      'Update maxL/maxR BEFORE computing water at the new position',
      '`maxL <= maxR` determines which side is the limiting constraint',
    ],
    gettingUnstuck: [
      'Convince yourself: water[i] = min(maxLeft[i], maxRight[i]) - height[i]',
      'Precomputed arrays: two passes then a third to compute water — O(n) space',
      'Two-pointer: process the bottleneck side — which side has the smaller max?',
    ],
    complexityBreakdown: 'Time O(n): each element is processed exactly once as a pointer moves inward. Space O(1): only maxL, maxR, and two pointer indices — no precomputed arrays.',
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
    clarifyingQuestions: [
      'Can I make multiple transactions? (no — at most one buy and one sell)',
      'What if prices always decrease? (return 0, no profit possible)',
      'Can prices be negative? (no — they represent stock prices)',
    ],
    approachWalkthrough: 'I track the minimum price seen so far. At each price, potential profit = price - minPrice. Update maxProfit if better. This is: "if I had bought at the lowest price before today, what would my profit be?"',
    codeQuality: [
      'Two variables only: `minPrice` and `maxProfit`',
      'Update min first, then check profit — order matters',
      'Initialize `minPrice = float(\'inf\')` — handles any first element cleanly',
    ],
    gettingUnstuck: [
      'At each price: what\'s the best I could have bought for before this? The running minimum.',
      'Profit today = today\'s price - running minimum.',
      'Update max profit at each step.',
    ],
    complexityBreakdown: 'Time O(n): one pass through prices. Space O(1): only two scalar variables regardless of input size.',
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
    clarifyingQuestions: [
      'Does "repeating" mean exact character match? (yes)',
      'Can the string contain spaces or special characters? (yes)',
      'Is an empty string valid? (return 0)',
    ],
    approachWalkthrough: 'Sliding window with a set. Expand right one char at a time. If s[r] is already in the window, shrink from the left until the duplicate is removed. Track maximum window size throughout.',
    codeQuality: [
      'Set tracks which characters are currently in the window',
      'Shrink by removing s[l] and advancing l — explicit and clear',
      '`best = max(best, r - l + 1)` after adding s[r] gives the current window size',
    ],
    gettingUnstuck: [
      'Brute force: check every substring — O(n² or n³). State this.',
      'Sliding window: can we avoid re-scanning? Shrink only when we must.',
      'When does the window become invalid? When s[r] is already in the window set.',
    ],
    complexityBreakdown: 'Time O(n): each character is added and removed from the set at most once. Space O(min(n, alphabet)): the set holds at most the unique chars in the window — bounded by alphabet size.',
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
    clarifyingQuestions: [
      'Can we replace any character, not just minority ones? (yes)',
      'What is k? (number of replacements allowed)',
      'Is the string uppercase only? (as per constraints, yes)',
    ],
    approachWalkthrough: 'Sliding window where the invariant is (window_size - count_of_most_frequent_char) ≤ k. If the window becomes invalid, I slide it by incrementing l by 1 — I never shrink it, just slide forward.',
    codeQuality: [
      '`maxFreq` never needs to decrease — we only care about the largest window ever seen',
      '"Slide, don\'t shrink" optimization is the non-obvious part — worth explaining aloud',
      'Count map tracks frequencies in the current window',
    ],
    gettingUnstuck: [
      'Brute force: try all substrings, check validity — O(n³)',
      'What makes a window valid? We can make all chars the same by replacing (size - most_frequent) chars.',
      'We want that replacement count ≤ k. Slide when it exceeds k.',
    ],
    complexityBreakdown: 'Time O(n): right pointer advances n times, left pointer advances at most n times total — O(2n) = O(n). Space O(1): the count map has at most 26 keys for uppercase letters.',
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
    clarifyingQuestions: [
      'Can t have repeated characters? (yes — you need that many in the window)',
      'Is there always a valid window? (not necessarily — return "" if not)',
      'Can s or t be empty? (handle edge case)',
    ],
    approachWalkthrough: 'Two frequency maps: `need` for t, `window` for current window. Track `have` (chars satisfying their count) vs `required` (total distinct chars needed). Expand right until satisfied, then shrink left to minimize.',
    codeQuality: [
      'Track `have` vs `required` as integers — avoids re-scanning the map each step',
      'Increment `have` only when `window[c] == need[c]`, not just ≥',
      'Store result as `[l, r]` indices — slice at the end',
    ],
    gettingUnstuck: [
      'Core loop: expand until all of t is covered. Then shrink from left as much as possible.',
      'How to know when all of t is covered? Track "have" and "required" as counts.',
      'Edge: t contains repeated chars — window[c] must reach need[c], not just > 0.',
    ],
    complexityBreakdown: 'Time O(n+m): building `need` is O(m); each char in s is added and removed from `window` at most once — O(2n). Space O(m): need and window maps hold at most the unique chars of t.',
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
    clarifyingQuestions: [
      'What bracket types are included? ([], {}, ())',
      'Can the string contain non-bracket characters? (no, per constraints)',
      'Is an empty string valid? (yes)',
    ],
    approachWalkthrough: 'I use a stack. For each open bracket I push it. For each close bracket I check if the top of the stack is the matching open bracket — if not, it\'s invalid. At the end, the stack must be empty.',
    codeQuality: [
      'Use a dict `{")": "(", "]": "[", "}": "{"}` to look up matching pairs',
      'Check `not stack` before popping — handles close bracket with empty stack',
      'Return `len(stack) == 0` — handles unmatched open brackets at the end',
    ],
    gettingUnstuck: [
      'What needs to be remembered? The most recent unmatched open bracket.',
      'LIFO order — that\'s a stack.',
      'Edge: `([)]` looks balanced but is invalid — the close must match the MOST RECENT open.',
    ],
    complexityBreakdown: 'Time O(n): one pass through the string; each character is pushed or popped at most once. Space O(n): worst case (all open brackets) the stack holds n elements.',
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
    clarifyingQuestions: [
      'Is getMin O(1) required? (yes, per problem statement)',
      'Can the stack be empty when getMin is called? (no, per constraints)',
      'What values can be pushed? (any integer, including negatives)',
    ],
    approachWalkthrough: 'Two synchronized stacks: main stack and minStack. minStack[i] stores the minimum of all elements at and below index i. When I push, I push to both. When I pop, I pop from both. getMin peeks the minStack top.',
    codeQuality: [
      'Two synchronized stacks — they always have the same size',
      'minStack push: `min(new_val, minStack[-1])` — push the new minimum, not the raw value',
      'All four operations are truly O(1) — direct array ops, no scanning',
    ],
    gettingUnstuck: [
      'Why can\'t a single min variable work? After a pop, the min might change.',
      'We need to know the min at EVERY stack state. What stores state history? A stack.',
      'Sync both stacks: every push and pop affects both together.',
    ],
    complexityBreakdown: 'Time O(1) for all operations: push, pop, top, and getMin are direct array operations. Space O(n): two stacks each holding at most n elements.',
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
    clarifyingQuestions: [
      'What if no future day is warmer? (answer[i] = 0)',
      'Is the array guaranteed non-empty?',
      'Are temperatures integers? (yes)',
    ],
    approachWalkthrough: 'Monotonic decreasing stack of (temperature, index) pairs. For each day, while the current temp is warmer than the stack top, pop and record the wait as current_index - popped_index. Then push the current day.',
    codeQuality: [
      'Stack stores (temp, index) tuples — index is needed to compute day difference',
      'The while loop processes all resolved "waiting" days before pushing the current one',
      'Result array initialized to 0 — no need to handle "never warmer" separately',
    ],
    gettingUnstuck: [
      'Brute force: for each day, scan forward until warmer — O(n²)',
      'What are we waiting for? A warmer day. A stack of "pending" days works.',
      'When is a pending day resolved? When a warmer temperature arrives.',
    ],
    complexityBreakdown: 'Time O(n): each index is pushed and popped at most once — amortized O(1) per element. Space O(n): worst case (decreasing temperatures) all indices are on the stack.',
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
    clarifyingQuestions: [
      'Can the result overflow a 32-bit integer? (assume 64-bit is fine)',
      'Is division truncated toward zero? (yes, per problem)',
      'Can the input be invalid? (assume always valid RPN)',
    ],
    approachWalkthrough: 'Iterate tokens. Numbers go onto the stack. When an operator arrives, pop two operands (b first, then a — order matters for subtraction and division), compute a op b, push result. Final answer is the only remaining element.',
    codeQuality: [
      'Pop in order `b, a = stack.pop(), stack.pop()` — b is right operand, a is left',
      'Use `int(a / b)` for truncation toward zero in Python (not `a // b` which floors)',
      'Simple if/elif for four operators is clearer than a lambda dict',
    ],
    gettingUnstuck: [
      'Classic stack: numbers push, operators consume two and push one result.',
      'Order of operands matters: first pop is the RIGHT operand (b), second is LEFT (a).',
      'Trace: ["2","1","+"] → push 2, push 1, "+" pops → 2+1=3, push 3.',
    ],
    complexityBreakdown: 'Time O(n): one pass through tokens, each push/pop is O(1). Space O(n): worst case (all numbers, no operators) the stack holds n elements.',
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
    clarifyingQuestions: [
      'Should the output be sorted? (any order is fine)',
      'Is n always positive? (yes, per constraints)',
      'What\'s expected for n=1? (just ["()"])',
    ],
    approachWalkthrough: 'Backtracking. At each step I can add "(" if open < n, or ")" if close < open. Recursively build the string until length equals 2n. These constraints generate only valid combinations — no filtering needed.',
    codeQuality: [
      'Track `open` and `close` counts — cleaner than tracking string length for constraints',
      'Two clear rules: add "(" when open < n, add ")" when close < open',
      '`result.append(s)` only at the base case (length == 2n)',
    ],
    gettingUnstuck: [
      'Generate all combinations of n "(" and n ")" with constraints.',
      'Constraint 1: never add ")" if there\'s no unmatched "(" (close < open)',
      'Constraint 2: never add more than n of either type',
    ],
    complexityBreakdown: 'Time O(4ⁿ/√n): the number of valid combinations is the nth Catalan number. Space O(n): recursion stack depth is at most 2n.',
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
    clarifyingQuestions: [
      'Are heights guaranteed non-negative?',
      'Can all heights be zero? (result would be 0)',
      'Is the width of each bar exactly 1?',
    ],
    approachWalkthrough: 'Monotonic increasing stack of (index, height). When a bar shorter than the stack top arrives, pop taller bars and compute their max rectangle. The popped bar\'s rectangle extends left to where it was inserted, and right to the current position.',
    codeQuality: [
      'Stack stores (start_index, height) — start_index tracks how far left the rectangle can extend',
      'When popping, the current bar\'s start can be pulled back to the popped bar\'s index',
      'After the main loop, process remaining stack bars extending to the end of the array',
    ],
    gettingUnstuck: [
      'Brute force: for each pair of bars, compute the rectangle — O(n²)',
      'For each bar as the shortest, how far can it extend left and right?',
      'Stack maintains "which bars are still potentially useful" in increasing height order.',
    ],
    complexityBreakdown: 'Time O(n): each bar is pushed and popped at most once — O(2n) total. Space O(n): the stack holds up to n bars in the worst case (monotonically increasing heights).',
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
    clarifyingQuestions: [
      'Is the array sorted? (yes, per problem)',
      'Are there duplicates? (no, per constraints)',
      'What to return if not found? (-1)',
    ],
    approachWalkthrough: 'Set l=0, r=n-1. Compute mid=(l+r)//2 and compare nums[mid] to target. If too small, search right half (l=mid+1). If too large, search left half (r=mid-1). Stop when l > r.',
    codeQuality: [
      'Loop condition `l <= r` (not `l < r`) to handle single-element arrays',
      'Three-way comparison: equal, less than, greater than — each case clear',
      'In C++/Java: use `l + (r-l)//2` to avoid overflow; fine in Python',
    ],
    gettingUnstuck: [
      'Off-by-one errors come from `l < r` vs `l <= r` and `mid` vs `mid±1`',
      'Trace through a 3-element array to check your boundaries: [1,2,3], target=3',
      'Invariant: target is always in [l, r] if it exists',
    ],
    complexityBreakdown: 'Time O(log n): search space halves each step — at most log₂(n) iterations. Space O(1): only l, r, and mid — iterative, no recursion.',
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
    clarifyingQuestions: [
      'Are there duplicates? (no for this version — with duplicates is a harder variant)',
      'How many times was it rotated? (unknown — could be 0 to n times)',
      'Is the array guaranteed non-empty?',
    ],
    approachWalkthrough: 'Binary search. If nums[mid] > nums[r], the minimum is in the right half — the left side is sorted and all values are larger. Otherwise the minimum is in the left half including mid. Converge until l == r.',
    codeQuality: [
      'Compare mid to RIGHT boundary — this is the key non-obvious choice',
      'Use `r = mid` (not `mid-1`) when going left — mid might be the minimum',
      'Loop condition `l < r`; return `nums[l]` at the end',
    ],
    gettingUnstuck: [
      'Draw a rotation: a sorted array with a "dip" somewhere. The minimum is at the dip.',
      'Which half contains the dip? If nums[mid] > nums[r], the dip is in the right half.',
      'Compare to nums[r], not nums[l] — avoids ambiguity at the midpoint.',
    ],
    complexityBreakdown: 'Time O(log n): search space halves each step. Space O(1): two pointers, no recursion.',
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
    clarifyingQuestions: [
      'Are there duplicates? (no for this version — with duplicates it\'s harder)',
      'What if target is not in the array? (return -1)',
      'Is the array guaranteed non-empty?',
    ],
    approachWalkthrough: 'At each midpoint, one half is always sorted. I check which half by comparing nums[l] to nums[mid]. If target falls in the sorted half, search there. Otherwise search the unsorted half.',
    codeQuality: [
      '`nums[l] <= nums[mid]` identifies whether the left half is sorted',
      'Then `nums[l] <= target < nums[mid]` checks if target is in that sorted range',
      'Symmetric logic for the right half — two clean if/else branches',
    ],
    gettingUnstuck: [
      'Key insight: in a rotated array, one half is ALWAYS fully sorted.',
      'If target is in the sorted half, standard binary search there.',
      'Otherwise it must be in the other half — recurse there.',
    ],
    complexityBreakdown: 'Time O(log n): search space halves each step, just like regular binary search. Space O(1): iterative with two pointers.',
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
    clarifyingQuestions: [
      'Is there always a valid speed that works? (yes — max(piles) always works)',
      'Can h be less than the number of piles? (no — need at least 1 hour per pile)',
      'What\'s the minimum possible speed? (1)',
    ],
    approachWalkthrough: 'Binary search on the answer space (speed 1 to max(piles)). For each candidate speed k, total_hours = sum of ceil(pile/k). If total ≤ h, k works — try slower. Otherwise try faster.',
    codeQuality: [
      '`math.ceil(p / k)` for each pile, `sum(...)` for total — clear and direct',
      'Search for the LEFT boundary: smallest k where total_hours ≤ h',
      'Use `r = mid` (not `mid-1`) when feasible — mid itself might be the answer',
    ],
    gettingUnstuck: [
      'This is "binary search on the answer" — recognize the pattern.',
      'Is there a monotonic relationship? Yes — faster speed = fewer hours.',
      'Find the smallest speed where total_hours ≤ h.',
    ],
    complexityBreakdown: 'Time O(n log m): binary search over m = max(piles) speeds; each feasibility check scans n piles. Space O(1): no extra data structures.',
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
    clarifyingQuestions: [
      'Is it singly or doubly linked? (singly)',
      'Should I reverse in-place or return a new list? (in-place, return new head)',
      'What\'s the result for empty list or single node?',
    ],
    approachWalkthrough: 'Three pointers: prev (starts as None), curr (starts at head). At each step: save next, flip curr.next to point to prev, advance both prev and curr. When curr is None, prev is the new head.',
    codeQuality: [
      'Three pointers with clear roles: prev (reversed chain), curr (current node), nxt (lookahead)',
      'Order matters: save nxt BEFORE overwriting curr.next',
      'Return `prev` — after the loop it\'s the last non-None node visited = new head',
    ],
    gettingUnstuck: [
      'Draw it: 1→2→3 becomes None←1←2←3',
      'You need to save curr.next before overwriting it — that\'s the key.',
      'Trace one step: prev=None, curr=1, nxt=2 → 1.next=None, prev=1, curr=2',
    ],
    complexityBreakdown: 'Time O(n): one pass through the list. Space O(1): only three pointer variables — no recursion, no auxiliary structures.',
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
    clarifyingQuestions: [
      'Can either list be empty? (yes — return the other)',
      'Are the lists guaranteed sorted? (yes)',
      'Should I create new nodes or merge in-place? (merge in-place — O(1) space)',
    ],
    approachWalkthrough: 'Use a dummy head node to avoid special-casing the first element. Compare heads of both lists and attach the smaller to result. Repeat until one list is exhausted, then attach the rest.',
    codeQuality: [
      'Dummy head pattern avoids special-casing the head of the result',
      '`curr.next = l1 or l2` at the end — elegant way to attach the remaining list',
      'No new nodes created — we reuse existing nodes by relinking pointers',
    ],
    gettingUnstuck: [
      'Without dummy: you\'d need to special-case which list\'s head to use.',
      'Dummy head unifies the first step with all subsequent steps.',
      'Trace: l1=[1,2,4], l2=[1,3,4] → pick 1(l1), pick 1(l2), pick 2(l1)...',
    ],
    complexityBreakdown: 'Time O(n+m): each node is visited exactly once. Space O(1): no new nodes created; we relink existing pointers.',
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
    clarifyingQuestions: [
      'Should I modify in-place or create a new list? (modify in-place)',
      'What\'s expected for a list of length 1 or 2?',
      'Is the list guaranteed non-empty?',
    ],
    approachWalkthrough: 'Three distinct steps: find the middle with slow/fast pointers, reverse the second half in-place, then interleave the two halves. Each step is a standalone classic linked-list technique.',
    codeQuality: [
      'Clearly separate the three steps — don\'t merge them into one tangled loop',
      'After finding mid, set `slow.next = None` to cleanly split the list in two',
      'Interleaving: save both nexts before relinking to avoid losing pointers',
    ],
    gettingUnstuck: [
      'State the three sub-problems: find middle, reverse second half, interleave.',
      'Can you solve each independently? Yes — they\'re classic problems on their own.',
      'Debug one step at a time: verify middle is correct before moving on.',
    ],
    complexityBreakdown: 'Time O(n): each of the three phases is O(n). Space O(1): all operations done in-place with pointer manipulation.',
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
    clarifyingQuestions: [
      'Is n always valid (1 ≤ n ≤ list length)? (yes, per constraints)',
      'What if n equals the list length? (remove the head)',
      'One pass required or is two passes acceptable?',
    ],
    approachWalkthrough: 'Dummy head and two pointers with a gap of n+1. Advance fast by n+1 steps first. Then move both together until fast is None — at that point slow.next is the node to remove.',
    codeQuality: [
      'Dummy head simplifies removing the actual head node (when n = list length)',
      'Advance fast by n+1 (not n) so slow ends at the PREDECESSOR of the target',
      'One pass — no need to count the list length first',
    ],
    gettingUnstuck: [
      'Why n+1 steps? We want slow to land at the node BEFORE the one to remove.',
      'Trace: list=1→2→3→4→5, n=2. fast advances 3 steps to node 3. Both move: fast reaches end, slow at node 3. Remove node 4.',
      'Dummy head handles the edge case of removing the head node cleanly.',
    ],
    complexityBreakdown: 'Time O(n): fast traverses the whole list once. Space O(1): two pointer variables, no extra data structures.',
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
    clarifyingQuestions: [
      'Should I just detect a cycle or also find where it starts? (just detect)',
      'Can the list be empty? (return false)',
      'Could the head itself be the cycle entry?',
    ],
    approachWalkthrough: 'Floyd\'s cycle detection: slow moves 1 step, fast moves 2 steps. If no cycle, fast reaches None. If there is a cycle, fast eventually laps slow and they meet inside the cycle.',
    codeQuality: [
      'Both start at head — clean initialization',
      'Check `fast and fast.next` before advancing fast — avoids null pointer errors',
      'Return True when `slow == fast` (same node object, not just same value)',
    ],
    gettingUnstuck: [
      'Why does fast lap slow in a cycle? Each iteration the gap decreases by 1.',
      'O(1) space: no visited set needed — Floyd\'s algorithm handles it.',
      'Simpler alternative: visited set — O(n) space. State this as brute force.',
    ],
    complexityBreakdown: 'Time O(n): fast catches slow in at most the cycle length steps. Space O(1): two pointers only — the whole point of Floyd\'s is avoiding a visited set.',
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
    clarifyingQuestions: [
      'What does "invert" mean? (mirror — swap left and right at every node)',
      'Should I modify in-place or return a new tree? (in-place, return root)',
      'What\'s the result for a single node or empty tree?',
    ],
    approachWalkthrough: 'Recursive DFS. Base case: null → return None. Swap root.left and root.right using Python tuple swap. Then recursively invert both children.',
    codeQuality: [
      'Tuple swap: `root.left, root.right = root.right, root.left` — atomic and readable',
      'Recursion handles the rest — no need to track depth or use an explicit stack',
      'Return root at the end — caller needs the unchanged root reference',
    ],
    gettingUnstuck: [
      'Think: invert tree = swap children at root, then invert each subtree.',
      'Trust the recursion — if inverting subtrees works, swapping and delegating is the full solution.',
      'Can also do iteratively with a queue (BFS) — swap children as you visit each node.',
    ],
    complexityBreakdown: 'Time O(n): every node is visited exactly once. Space O(h): recursion stack depth equals tree height — O(log n) balanced, O(n) skewed.',
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
    clarifyingQuestions: [
      'What does "depth" mean — nodes or edges? (nodes: a single-node tree has depth 1)',
      'What\'s the depth of an empty tree? (0)',
      'Is it a binary tree? (yes)',
    ],
    approachWalkthrough: 'Recursive: depth = 1 + max(depth of left subtree, depth of right subtree). Base case: null node returns 0. This single recursion captures everything.',
    codeQuality: [
      'Base case at the top: `if not root: return 0`',
      'One-liner: `return 1 + max(maxDepth(root.left), maxDepth(root.right))`',
      'Alternatively: BFS counting levels — same O(n) complexity, O(n) space',
    ],
    gettingUnstuck: [
      'Think recursively: depth(tree) = 1 + max(depth(left), depth(right))',
      'What\'s the depth of a leaf? 1 — both subtrees return 0.',
      'Can I do it iteratively? Yes — BFS with level counting, or DFS with an explicit stack.',
    ],
    complexityBreakdown: 'Time O(n): every node is visited exactly once. Space O(h): recursion call stack — O(log n) balanced, O(n) completely skewed.',
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
    clarifyingQuestions: [
      'Does "same" mean structurally identical AND same values? (yes, both)',
      'What if both trees are null? (true)',
      'What if one is null and the other isn\'t? (false)',
    ],
    approachWalkthrough: 'Recursive. Handle base cases first: both null → true; one null → false; values differ → false. Then AND together the recursive results for left and right subtrees.',
    codeQuality: [
      'Handle all null cases before recursing — null checks first, value check second',
      'Short-circuit `and` — if left subtrees differ, don\'t bother checking right',
      'Clean one-liner return after base cases',
    ],
    gettingUnstuck: [
      'Four cases at each node: both null, only one null, different values, same value.',
      'The recursive structure mirrors the tree structure exactly.',
      'Can also do iterative BFS/DFS with a stack of (p, q) pairs.',
    ],
    complexityBreakdown: 'Time O(n): visit every node in both trees — at most min(|p|, |q|) before a mismatch. Space O(h): recursion stack depth equals height of the shorter tree.',
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
    clarifyingQuestions: [
      'Should each level be its own sublist? (yes)',
      'What if the tree is null? (return [])',
      'Is it a binary tree? (yes)',
    ],
    approachWalkthrough: 'BFS with a deque. I record the current queue length at the start of each outer iteration, then process exactly that many nodes — adding their children. This creates a clean level boundary.',
    codeQuality: [
      '`for _ in range(len(queue))` captures level size BEFORE processing — don\'t call len(queue) dynamically inside',
      'Append to `level` per node, then append `level` to `result` after the inner loop',
      '`deque` for O(1) popleft — `list.pop(0)` is O(n)',
    ],
    gettingUnstuck: [
      'Key insight: how do you know when one level ends? Queue length at the start of each outer loop.',
      'Add children to queue AFTER recording the current node — they\'re for the next level.',
      'Alternative: track level with a counter or use two queues.',
    ],
    complexityBreakdown: 'Time O(n): each node is enqueued and dequeued exactly once. Space O(n): the queue holds at most the widest level — up to n/2 nodes in a complete binary tree.',
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
    clarifyingQuestions: [
      'Is the BST strict? (yes — strictly less/greater, no equal values)',
      'What counts as invalid? Node value equal to a bound also fails.',
      'What if the tree is null? (valid by definition)',
    ],
    approachWalkthrough: 'Pass valid min and max bounds recursively. Left child: max becomes parent val. Right child: min becomes parent val. Any node outside its bounds returns false immediately.',
    codeQuality: [
      'Defaults `-inf` and `+inf` for root — no special case at the top',
      'Check `root.val <= min_val or root.val >= max_val` — strict inequality',
      'Recurse with tightened bounds: left gets max_val=root.val, right gets min_val=root.val',
    ],
    gettingUnstuck: [
      'Common mistake: only check against immediate parent. A right-subtree node must be greater than ALL ancestors.',
      'Passing bounds down the recursion enforces the global constraint.',
      'Alternative: inorder traversal should produce strictly increasing values.',
    ],
    complexityBreakdown: 'Time O(n): every node visited once. Space O(h): recursion stack — O(log n) balanced, O(n) skewed.',
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
    clarifyingQuestions: [
      'Is k guaranteed valid (1 ≤ k ≤ node count)? (yes)',
      'Is it 1-indexed or 0-indexed? (1-indexed)',
      'Are there duplicate values? (no, BST values are unique)',
    ],
    approachWalkthrough: 'Iterative inorder traversal with a stack. Push all left children first (leftmost = smallest). Pop a node, decrement k — when k reaches 0, that\'s the answer. Then move to curr.right to continue inorder.',
    codeQuality: [
      'Iterative avoids O(n) recursion stack for a skewed tree',
      'Inner `while curr` loop pushes the entire left spine',
      'After popping, set `curr = curr.right` to continue inorder from there',
    ],
    gettingUnstuck: [
      'Inorder traversal of a BST yields elements in sorted ascending order.',
      'So: find the kth element of the inorder sequence.',
      'Recursive version: pass k by reference using a list `[k]`',
    ],
    complexityBreakdown: 'Time O(h+k): traverse down to leftmost O(h), then visit k nodes. Space O(h): the explicit stack holds at most h nodes at any time.',
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
    clarifyingQuestions: [
      'Are p and q guaranteed to exist in the BST? (yes)',
      'Can a node be its own ancestor? (yes — a node is an ancestor of itself)',
      'Is it a valid BST? (yes — use the BST property)',
    ],
    approachWalkthrough: 'Walk down from root using BST property. If both p and q are less than current, go left. If both greater, go right. Otherwise (they split, or one equals current) the current node is the LCA.',
    codeQuality: [
      'No recursion needed — iterative walk is cleaner here',
      'BST property makes this O(h) vs O(n) for a general binary tree',
      'Three cases map directly to three if/elif/else branches',
    ],
    gettingUnstuck: [
      'In a BST: if both nodes are in the same subtree, the LCA is also in that subtree.',
      'When they "split" to different sides (or one equals current), current is the LCA.',
      'This only works because it\'s a BST — general LCA is a harder problem.',
    ],
    complexityBreakdown: 'Time O(h): O(log n) balanced, O(n) skewed. Space O(1): iterative, no recursion stack.',
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
    clarifyingQuestions: [
      'Can the path contain negative values? (yes — clamp with max(0, gain))',
      'Does the path have to pass through root? (no)',
      'Can the tree have a single node? (yes — that node\'s value is the answer)',
    ],
    approachWalkthrough: 'DFS post-order. At each node: max gain upward = node.val + max(0, left_gain, right_gain). Max path THROUGH this node = node.val + max(0,left) + max(0,right). Update global max with the through-path.',
    codeQuality: [
      'Use `max_sum = [float(\'-inf\')]` list to update across recursive calls',
      'Clamp gains with `max(0, dfs(child))` — never extend through negative paths',
      'Gain returned upward is single-branch; the full path (both branches) goes to global max',
    ],
    gettingUnstuck: [
      'Separate two concerns: (1) best path THROUGH this node, (2) best gain passing UPWARD.',
      'A path can "turn" at one node — can\'t go both left and right AND continue upward.',
      'max(0, gain) prevents negative subtrees from dragging the sum down.',
    ],
    complexityBreakdown: 'Time O(n): every node visited exactly once in the DFS. Space O(h): recursion stack depth — O(log n) balanced, O(n) skewed.',
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
    clarifyingQuestions: [
      'Can findMedian be called before any addNum? (no, per constraints)',
      'Can numbers be negative? (yes)',
      'What if there\'s only one number? (return that number)',
    ],
    approachWalkthrough: 'Two heaps: max-heap `small` for lower half, min-heap `large` for upper half. Always push to small first, then move small\'s max to large. Rebalance if sizes differ by more than 1. Median is at the boundary.',
    codeQuality: [
      'Python only has min-heap: negate values for max-heap behavior in `small`',
      'After each insertion, ensure sizes differ by at most 1 and small.max ≤ large.min',
      'findMedian: equal sizes → average both tops; unequal → top of larger heap',
    ],
    gettingUnstuck: [
      'Two sorted halves: lower (max-heap) and upper (min-heap). Median is at the boundary.',
      'After each insertion, rebalance so sizes differ by at most 1.',
      'Also check ordering: top of small ≤ top of large — cross-push if violated.',
    ],
    complexityBreakdown: 'Time O(log n) per addNum: each heap operation is O(log n). O(1) for findMedian: just peek at heap tops. Space O(n): both heaps together hold all n elements.',
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
    clarifyingQuestions: [
      'Can k be 0 or any list be empty? (yes — handle gracefully)',
      'Are lists guaranteed sorted? (yes)',
      'Should I create a new list or merge in-place? (reuse existing nodes)',
    ],
    approachWalkthrough: 'Min-heap initialized with the first node of each non-null list. Each entry is (node.val, list_index, node) — list_index breaks ties. Repeatedly pop the minimum, attach to result, push its next node if it exists.',
    codeQuality: [
      'Include `list_index` in the tuple to avoid comparing ListNode objects on tie',
      'Dummy head for clean result list construction',
      'Only push `node.next` if it exists — no null pushes into the heap',
    ],
    gettingUnstuck: [
      'Brute force: collect all values, sort, rebuild — O(n log n). Valid.',
      'Optimization: we don\'t need to sort everything at once. We need the current global minimum.',
      'Heap of k current heads gives O(log k) per extraction — O(n log k) total.',
    ],
    complexityBreakdown: 'Time O(n log k): n total nodes each pushed and popped once from a heap of size ≤ k. Space O(k): heap holds at most one node per list.',
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
    clarifyingQuestions: [
      'Can candidates contain duplicates? (no, per constraints)',
      'Can I use the same candidate multiple times? (yes)',
      'Are all candidates positive? (yes)',
      'Is output order important? (any valid order per combination)',
    ],
    approachWalkthrough: 'Backtracking with index tracking. At each position: include candidates[i] and recurse at the same i (allowing reuse), or skip to i+1. Prune when total > target. Append a copy when total == target.',
    codeQuality: [
      'Pass index `i` — prevents revisiting earlier candidates and duplicate combos',
      '`result.append(current[:])` — append a COPY, not the list reference',
      '`current.pop()` to undo the last addition — classic backtrack undo step',
    ],
    gettingUnstuck: [
      'Decision tree: at each position, include (stay at i, allowing reuse) or skip (advance to i+1).',
      'Pruning: if total > target, stop — no need to go deeper.',
      'Trace: [2,3,6,7], target=7 → 2,2,2 (sum=6), +2=8 prune, +3=7 ✓',
    ],
    complexityBreakdown: 'Time O(2^(t/m)): t=target, m=smallest candidate. Recursion depth is at most t/m and branches 2 ways. Space O(t/m): recursion stack depth.',
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
    clarifyingQuestions: [
      'Can a cell be reused in one path? (no — must track visited)',
      'Can the word start anywhere in the grid? (yes)',
      'Is an empty word valid? (return true by convention)',
    ],
    approachWalkthrough: 'For each cell matching word[0], run DFS. Mark current cell as "#" to flag visited, explore 4 directions, then restore the original char (backtrack). Return true as soon as the full word is matched.',
    codeQuality: [
      'In-place visited marking with "#" — avoids a separate visited matrix',
      'Restore cell after recursion: `board[r][c] = tmp` — the backtrack step',
      'Base case `if i == len(word): return True` at the top — clean early return',
    ],
    gettingUnstuck: [
      'Brute force: DFS from every cell. That\'s the right approach — just needs backtracking.',
      'Why mark visited? Prevent using the same cell twice in one path.',
      'Why restore? Other starting cells need the original grid values.',
    ],
    complexityBreakdown: 'Time O(m·n·4^L): m×n cells as starting points, DFS explores up to 4^L paths per start (L=word length). Space O(L): recursion stack depth equals word length.',
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
    clarifyingQuestions: [
      'What counts as connected? (horizontal/vertical only — 4-directional)',
      'Is modifying the grid allowed? (yes — we "sink" land to mark visited)',
      'Can the grid be empty?',
    ],
    approachWalkthrough: 'Iterate every cell. When I find "1", increment count and DFS to sink all connected land by setting cells to "0". Each trigger of DFS from the outer loop represents one distinct island.',
    codeQuality: [
      'Sink cells to "0" in-place — avoids a separate visited set',
      'DFS handles boundary checks and "already visited" at the start',
      'Four directions as four separate recursive calls — simple and clear',
    ],
    gettingUnstuck: [
      'This is connected component counting — DFS/BFS to mark each component.',
      'Can also use Union-Find — slightly more complex but also O(m·n).',
      'If modifying the grid is not allowed, use a separate `visited` set.',
    ],
    complexityBreakdown: 'Time O(m·n): each cell is visited at most twice — once in the outer loop, once during DFS. Space O(m·n): the recursive DFS stack can be m×n deep in the worst case (one big island).',
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
    clarifyingQuestions: [
      'Is the graph guaranteed connected? (yes — reachable from the given node)',
      'Can there be self-loops or parallel edges? (no, per constraints)',
      'What if the input node is null? (return null)',
    ],
    approachWalkthrough: 'DFS with a hash map (original → clone). When I visit a node, I create its clone and store it immediately, then recursively clone all neighbors. The map prevents infinite loops on cycles.',
    codeQuality: [
      'Check `if n in old_to_new` first — handles cycles and prevents re-cloning',
      'Create clone and add to map BEFORE recursing on neighbors — avoids infinite recursion',
      'The map is both the visited set and the clone registry',
    ],
    gettingUnstuck: [
      'Main challenge: cycles. Without the map you\'d recurse infinitely.',
      'Create the clone immediately, add to map, THEN recurse neighbors.',
      'Neighbors of the clone = clones of the original\'s neighbors.',
    ],
    complexityBreakdown: 'Time O(V+E): each node and edge visited exactly once. Space O(V): the hash map stores all V node clones.',
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
    clarifyingQuestions: [
      'Are there self-loops in prerequisites? (no, per constraints)',
      'Do we need to produce a valid ordering or just check feasibility? (just check)',
      'What if numCourses=1 with no prerequisites? (return true)',
    ],
    approachWalkthrough: 'Build adjacency list. DFS on each course using three states: 0 (unvisited), 1 (currently on path), 2 (fully done). If we reach a state-1 node, we found a cycle → false.',
    codeQuality: [
      'Three-state coloring is cleaner than a "visiting" set + "visited" set',
      'Set state=1 before recursing, state=2 after all neighbors processed',
      '`all(dfs(i) for ...)` handles disconnected components',
    ],
    gettingUnstuck: [
      'This is cycle detection in a directed graph — course completion iff no cycle.',
      'Why three states? "Visited" alone can\'t distinguish "on current path" from "already done".',
      'Alternative: Kahn\'s BFS with in-degree counts — no three-state complexity.',
    ],
    complexityBreakdown: 'Time O(V+E): each course and prerequisite visited once. Space O(V+E): adjacency list plus recursion stack.',
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
    clarifyingQuestions: [
      'Can water flow diagonally? (no — 4 directions only)',
      'What does "can flow to both oceans" mean? (height decreases or stays equal along the path)',
      'Can the grid be 1×1? (yes — flows to both oceans)',
    ],
    approachWalkthrough: 'Reverse BFS: start from ocean borders and expand inward where height is ≥ current (reverse of downhill flow). Two BFS passes — one per ocean. Cells in both reachable sets are the answer.',
    codeQuality: [
      'Multi-source BFS starting from all border cells simultaneously',
      '`heights[nr][nc] >= heights[r][c]` is the reverse condition — water flows downhill TO the ocean',
      'Set intersection `pacific & atlantic` is concise',
    ],
    gettingUnstuck: [
      'Forward direction (from each cell) is O((mn)²) — too slow.',
      'Reverse: start from ocean borders and work inward. Single BFS per ocean = O(mn).',
      'Key reversal: "can flow TO ocean" → "can be REACHED from ocean border going uphill".',
    ],
    complexityBreakdown: 'Time O(m·n): two BFS passes, each visiting every cell at most once. Space O(m·n): two visited sets, each holding at most m×n entries.',
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
    clarifyingQuestions: [
      'Can I take more than 2 steps at once? (no — only 1 or 2)',
      'Is n ≥ 1? (yes, per constraints)',
      'What\'s expected for n=1? (1 way)',
    ],
    approachWalkthrough: 'dp[i] = dp[i-1] + dp[i-2] — this is Fibonacci! To reach step i I came from step i-1 (1 step) or step i-2 (2 steps). I only need the last two values, so I use two variables.',
    codeQuality: [
      'Space-optimize: tuple swap `prev2, prev1 = prev1, prev1 + prev2` — no temp variable',
      'Handle n≤2 as a base case before the loop',
      'Naming: `prev2` (two steps back) and `prev1` (one step back) over abstract a/b',
    ],
    gettingUnstuck: [
      'Define subproblem: ways(n) = ways(n-1) + ways(n-2)',
      'Base cases: ways(1)=1, ways(2)=2',
      'This is Fibonacci — recognize and name the pattern in the interview.',
    ],
    complexityBreakdown: 'Time O(n): one loop from 3 to n. Space O(1): only two scalar variables — no DP array.',
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
    clarifyingQuestions: [
      'Can I rob the first AND last house? (yes — they\'re not adjacent unless n=2)',
      'Can the array be empty? (return 0)',
      'Are all values non-negative? (yes)',
    ],
    approachWalkthrough: 'At each house: either rob it (prev2 + nums[i]) or skip it (prev1). Take the max. I only need two running variables — no full array.',
    codeQuality: [
      'Space-optimize: `prev2, prev1 = prev1, max(prev1, prev2 + n)` — one-liner update',
      'Initialize both to 0 — no houses = 0 profit',
      'Reasoning is clear: rob = skip one before; skip = keep running max',
    ],
    gettingUnstuck: [
      'Subproblem: max_rob(i) = max amount robbing houses 0..i',
      'Recurrence: max_rob(i) = max(nums[i] + max_rob(i-2), max_rob(i-1))',
      'Can\'t rob adjacent houses — this constraint directly drives the recurrence.',
    ],
    complexityBreakdown: 'Time O(n): one pass through nums. Space O(1): two scalar variables.',
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
    clarifyingQuestions: [
      'Can coins be reused? (yes — unlimited supply)',
      'Can amount be 0? (return 0)',
      'Can the amount be unreachable? (return -1)',
      'Are coin values always positive? (yes)',
    ],
    approachWalkthrough: 'Bottom-up DP. dp[0]=0, dp[1..amount]=infinity. For each amount from 1 to amount, try every coin: dp[i] = min(dp[i], dp[i-coin]+1). Return dp[amount] or -1 if infinity.',
    codeQuality: [
      'Initialize with `float(\'inf\')` — any real answer will be smaller; signals unreachable',
      'Only try coin if `coin <= i` — can\'t use a coin larger than the current amount',
      'Final check: `dp[amount] if dp[amount] != float(\'inf\') else -1`',
    ],
    gettingUnstuck: [
      'Subproblem: what\'s the fewest coins to make amount i?',
      'For each coin: if it fits, dp[i] = min(dp[i], dp[i-coin] + 1)',
      'Build up from small amounts to the target — each solution reuses smaller solutions.',
    ],
    complexityBreakdown: 'Time O(amount × coins): outer loop over amount, inner loop over all coins. Space O(amount): the DP array.',
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
    clarifyingQuestions: [
      'Strictly increasing or non-decreasing? (strictly increasing)',
      'Does the subsequence have to be contiguous? (no — it\'s a subsequence, not a subarray)',
      'Can the array be empty? (return 0)',
    ],
    approachWalkthrough: 'dp[i] = length of LIS ending at index i. Start all dp[i]=1 (each element alone is a length-1 subsequence). For each i, look back at all j<i where nums[j]<nums[i]: dp[i] = max(dp[i], dp[j]+1). Answer is max(dp).',
    codeQuality: [
      'Initialize all dp to 1 — base case: every element is an LIS of length 1',
      'Double loop is O(n²) — fine for Blind 75 constraints',
      'Mention O(n log n) patience sorting as a follow-up optimization',
    ],
    gettingUnstuck: [
      'Define the subproblem clearly: LIS ENDING AT i (not starting at i).',
      'Transition: for each j<i where nums[j]<nums[i], we can extend j\'s subsequence.',
      'Answer is max over all dp[i] — the LIS might end at any position.',
    ],
    complexityBreakdown: 'Time O(n²): nested loops — for each of n positions, look back at all previous ones. Space O(n): the dp array.',
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
    clarifyingQuestions: [
      'Can words in the dictionary be reused? (yes)',
      'Can s be empty? (return true — empty string is trivially segmentable)',
      'Can the dictionary be empty? (return false unless s is empty)',
    ],
    approachWalkthrough: 'dp[i] = true if s[0..i-1] can be segmented. dp[0]=true. For each position i, check all j<i: if dp[j] is true and s[j:i] is in the word set, set dp[i]=true. Convert wordDict to a set first for O(1) lookups.',
    codeQuality: [
      'Convert to set first: `word_set = set(wordDict)` — O(1) lookups in the inner loop',
      '`break` after finding dp[i]=True — no need to check other splits',
      'dp[0]=True is the base case: empty prefix is always segmentable',
    ],
    gettingUnstuck: [
      'Subproblem: can I segment the first i characters?',
      'dp[i] = true if there\'s a split point j where dp[j]=true AND s[j:i] is a word.',
      'Think backwards: "what word could end at position i?"',
    ],
    complexityBreakdown: 'Time O(n²): outer loop over n positions, inner loop over n split points; each substring check is O(n) but break early. Space O(n): dp array plus the word set.',
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
    clarifyingQuestions: [
      'Are intervals guaranteed sorted? (no — must sort first)',
      'Can intervals be a single point [a,a]? (yes)',
      'What if there\'s only one interval? (return it unchanged)',
    ],
    approachWalkthrough: 'Sort by start time. Initialize result with the first interval. For each subsequent interval: if it overlaps the last in result (curr.start ≤ result[-1].end), extend the end. Otherwise append a new interval.',
    codeQuality: [
      'Sort in-place: `intervals.sort(key=lambda x: x[0])`',
      '`result[-1][1] = max(result[-1][1], end)` — extend the end if the new interval goes further',
      'Overlap condition: `start <= result[-1][1]` — not `<`, handles touching intervals',
    ],
    gettingUnstuck: [
      'Without sorting: you\'d need to check every pair — O(n²).',
      'Sorted by start: the only possible overlap is with the LAST merged interval.',
      'Two cases: overlap → extend end; no overlap → append new interval.',
    ],
    complexityBreakdown: 'Time O(n log n): dominated by sorting; the merge scan is O(n). Space O(1) excluding output: sort is in-place.',
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
    clarifyingQuestions: [
      'Is the list already sorted and non-overlapping? (yes, per problem)',
      'Can newInterval overlap multiple existing intervals? (yes)',
      'Can newInterval come before all existing intervals? (yes)',
    ],
    approachWalkthrough: 'Three phases: (1) collect intervals ending before newInterval starts, (2) merge all overlapping intervals into newInterval by expanding its bounds, (3) append newInterval, then remaining intervals. No sorting needed.',
    codeQuality: [
      'Phase separation is the key: before, overlap, after — clear linear scan',
      'Merge by expanding: `min(new[0], curr[0])` and `max(new[1], curr[1])`',
      '`result.extend(intervals[i:])` appends remaining tail efficiently',
    ],
    gettingUnstuck: [
      'Draw the three regions: [before newInterval] [overlapping region] [after newInterval]',
      'Overlap condition: `intervals[i][0] <= newInterval[1]` — current starts before new ends',
      'Merge: expand newInterval to cover all overlapping intervals, then insert once.',
    ],
    complexityBreakdown: 'Time O(n): one linear scan — each interval processed once. Space O(1) excluding output.',
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
    clarifyingQuestions: [
      'Can I keep just one of overlapping intervals? (yes — that\'s the goal)',
      'What should I minimize? (the number of intervals removed)',
      'Are intervals sorted? (no — must sort first)',
    ],
    approachWalkthrough: 'Sort by end time. Track prevEnd. For each interval: if it overlaps (start < prevEnd), remove it (count++). Otherwise keep it and update prevEnd. Greedy: keep the interval ending earliest to leave maximum room.',
    codeQuality: [
      'Sort by END time (not start) — greedy: keep the interval ending earliest',
      'When overlapping: count++ and keep prevEnd unchanged (removing the later-ending current)',
      'When no overlap: update prevEnd to current end',
    ],
    gettingUnstuck: [
      'Equivalent: find MAX non-overlapping intervals, subtract from total.',
      'Greedy: always keep the interval with smallest end time — leaves the most room.',
      'This is the classic "Activity Selection" problem.',
    ],
    complexityBreakdown: 'Time O(n log n): sorting dominates; the scan is O(n). Space O(1): only prevEnd and count variables.',
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
    clarifyingQuestions: [
      'Is n treated as a 32-bit unsigned integer? (yes, per problem)',
      'What\'s the range of n? (0 to 2³² - 1)',
      'Should I handle n=0? (yes — return 0)',
    ],
    approachWalkthrough: 'Use the bit trick n & (n-1) which clears the lowest set bit. Count how many times I can apply this before n becomes 0. Each operation removes exactly one "1" bit.',
    codeQuality: [
      '`n &= n - 1` is the canonical "clear lowest set bit" idiom — name it in the interview',
      'Count increments once per operation = once per set bit',
      'Alternative: `bin(n).count("1")` in Python — mention but explain the bit trick',
    ],
    gettingUnstuck: [
      'What does n & (n-1) do? It clears the rightmost 1-bit. Why? n-1 flips all bits from the rightmost 1 downward.',
      'Alternative: right-shift n by 1 each time, check if LSB is 1 — O(32).',
      'This approach only iterates as many times as there are 1-bits — faster for sparse values.',
    ],
    complexityBreakdown: 'Time O(log n): at most 32 iterations for a 32-bit integer. More precisely O(k) where k is the number of set bits. Space O(1): just the count variable.',
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
    clarifyingQuestions: [
      'Is the output 0-indexed? (yes — ans[i] for i from 0 to n)',
      'Can n be 0? (yes — return [0])',
      'Is O(n) required? (naive per-number approach is O(n log n)',
    ],
    approachWalkthrough: 'DP: dp[i] = dp[i >> 1] + (i & 1). Right-shifting i by 1 gives a smaller number whose bit count we already computed. We add 1 if the last bit of i is set.',
    codeQuality: [
      '`dp[i >> 1]` is dp[i//2] — bit count of i without its last bit',
      '`(i & 1)` is 1 if i is odd, 0 if even — the last bit',
      'The recurrence mirrors the bit structure — compact and expressive',
    ],
    gettingUnstuck: [
      'Naive: count bits for each number separately — O(n log n).',
      'Notice: every number i = i>>1 (already computed) plus its last bit.',
      'This is "reuse previous DP results" — a classic insight.',
    ],
    complexityBreakdown: 'Time O(n): one pass from 1 to n, each step O(1). Space O(1) excluding the output array.',
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
    clarifyingQuestions: [
      'Is it exactly 32 bits? (yes — always reverse all 32 positions)',
      'Is n treated as unsigned? (yes)',
      'Does Python\'s arbitrary precision need handling? (mask with 0xFFFFFFFF if needed)',
    ],
    approachWalkthrough: 'Loop 32 times. Each iteration: shift result left by 1 (making room), OR with the last bit of n, then right-shift n by 1 to expose the next bit. After 32 steps, result holds the bit-reversed value.',
    codeQuality: [
      '`result = (result << 1) | (n & 1)` reads as: "shift result, add current bit of n"',
      '`n >>= 1` exposes the next bit of n',
      'Loop exactly 32 times — handles leading zeros in n correctly',
    ],
    gettingUnstuck: [
      'Process n one bit at a time from LSB to MSB. Build result from LSB to MSB of the reversed number.',
      'Bit by bit: extract last bit of n, put it as the next bit of result.',
      'After 32 iterations, each bit of n has moved to its mirror position.',
    ],
    complexityBreakdown: 'Time O(1): exactly 32 iterations regardless of input. Space O(1): just result and the loop counter.',
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
    clarifyingQuestions: [
      'Is exactly one number missing? (yes)',
      'Are values in range [0, n] where n = len(nums)? (yes)',
      'Can there be duplicates? (no — exactly n distinct numbers from 0 to n with one missing)',
    ],
    approachWalkthrough: 'XOR all numbers from 0 to n with all values in the array. Each number that appears in both cancels out (x ^ x = 0). The missing number appears only once — it\'s what remains.',
    codeQuality: [
      'Start `result = len(nums)` then XOR with each index and value — one loop handles everything',
      'Alternative: math — expected sum minus actual sum. Simpler but less "bit manipulation".',
      'The XOR version is O(1) space and handles all edge cases naturally',
    ],
    gettingUnstuck: [
      'XOR property: x ^ x = 0, x ^ 0 = x. Pairs cancel, unpaired value remains.',
      'XOR all indices 0..n with all array values. Everything cancels except the missing number.',
      'Alternative: Gauss formula sum(0..n) = n*(n+1)/2. Subtract actual sum.',
    ],
    complexityBreakdown: 'Time O(n): one pass through the array, O(1) work per element. Space O(1): just the result variable.',
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
    clarifyingQuestions: [
      'Can a or b be negative? (yes)',
      'Are there any size constraints? (32-bit integers)',
      'Specifically cannot use + or -? (correct — bitwise ops only)',
    ],
    approachWalkthrough: 'XOR gives the sum without carry. AND gives carry bits — shift left by 1 to put carry in the right position. Repeat until carry is 0. In Python, mask to 32 bits to handle arbitrary precision.',
    codeQuality: [
      '`a ^ b` — bits that differ: where the sum bits land (without carry)',
      '`(a & b) << 1` — bits where both are 1 produce a carry one position higher',
      'Mask `0xFFFFFFFF` to keep within 32-bit bounds in Python',
    ],
    gettingUnstuck: [
      'Binary addition: sum bit = XOR, carry bit = AND shifted left.',
      'Each iteration propagates the carry one position higher.',
      'Terminates when carry = 0 — addition is complete.',
    ],
    complexityBreakdown: 'Time O(1): at most 32 iterations for 32-bit integers. Space O(1): just a, b, and carry variables.',
  },

  // ─── STRINGS ──────────────────────────────────────────────────────────────
  'sort-sentence': {
    id: 'sort-sentence', title: 'Sort the Sentence', number: 1859,
    difficulty: 'Easy', category: 'arrays-hashing',
    description: 'A shuffled sentence is given where each word has a trailing digit indicating its 1-indexed position. Reconstruct the original sentence.',
    keyInsight: 'Split on spaces. All digit characters in a token form the position number; all alpha characters form the actual word. Place directly by index — no sort needed.',
    approach: 'Split into tokens. For each token, extract all digits (joined) as the position and all letters as the word text. Place word at index pos-1 in a pre-sized result array. Join.',
    example: { input: '"i2s T10his se4ntence a3"', output: '"This is sentence a"', trace: [
      { step: 'split', action: '["i2s","T10his","se4ntence","a3"]', state: '' },
      { step: '"i2s"', action: 'digits→"2" pos=2, letters→"is"', state: 'result[1]="is"' },
      { step: '"T10his"', action: 'digits→"10" pos=10... wait n=4, pos=1, letters→"This"', state: 'result[0]="This"' },
    ]},
    solution: `def sortSentence(s):
    words = s.split()
    result = [''] * len(words)
    for word in words:
        pos = int(''.join(c for c in word if c.isdigit()))
        text = ''.join(c for c in word if c.isalpha())
        result[pos - 1] = text
    return ' '.join(result)`,
    testCode: `# digits at end (original form)
print(sortSentence("is2 sentence4 This1 a3"))     # "This is a sentence"
# digits anywhere, multi-digit positions
print(sortSentence("M2e My3self I1"))              # "I Me Myself"
print(sortSentence("w1o2rld He1l0o"))              # "Hello world"`,
    time: 'O(n)', space: 'O(n)',
    clarifyingQuestions: [
      'Can the position number be multi-digit? (yes — handle by joining all digit chars)',
      'Can digits appear anywhere in the token, not just at the end? (yes)',
      'Can there be leading/trailing spaces in the input? (no)',
      'Is position always 1-indexed? (yes)',
    ],
    approachWalkthrough: 'Split on spaces. For each token, filter characters into two groups: digits (joined → int position) and letters (joined → word text). Place the word at result[pos-1]. Pre-sizing the result array means each placement is O(1). No sorting required.',
    codeQuality: [
      '"".join(c for c in word if c.isdigit()) — collects ALL digit chars regardless of position',
      '"".join(c for c in word if c.isalpha()) — strips all digits, leaving just the word',
      'Pre-size result: [""] * len(words) so each placement is O(1) direct by index',
    ],
    gettingUnstuck: [
      'Clarify first: where can digits appear? Single vs multi-digit? This changes the approach.',
      'If digits are always trailing and single: word[-1] for position, word[:-1] for text suffice.',
      'General case: partition each char as digit or letter — join each group separately.',
    ],
    complexityBreakdown: 'Time O(n): one pass to split, then for each token one pass over its characters to partition digits and letters. Space O(n): the result array and character buffers are all proportional to input length.',
  },
  'sock-merchant': {
    id: 'sock-merchant', title: 'Sales by Match (Sock Merchant)', number: 0,
    difficulty: 'Easy', category: 'arrays-hashing',
    description: 'Given an array of integers representing sock colors, return the number of matching pairs. (HackerRank: Sales by Match)',
    keyInsight: 'Count the frequency of each color. Each color contributes count // 2 pairs.',
    approach: 'Build a frequency map. For each color, pairs += freq // 2. Sum all pairs.',
    example: { input: 'ar=[10,20,20,10,10,30,50,10,20]', output: '3', trace: [
      { step: 'count', action: '{10:4, 20:3, 30:1, 50:1}', state: '' },
      { step: 'pairs', action: '10→4//2=2, 20→3//2=1, 30→0, 50→0', state: '2+1=3 pairs' },
    ]},
    solution: `def sockMerchant(ar):
    count = {}
    for sock in ar:
        count[sock] = count.get(sock, 0) + 1
    return sum(freq // 2 for freq in count.values())`,
    testCode: `print(sockMerchant([10,20,20,10,10,30,50,10,20]))  # 3
print(sockMerchant([1,1,3,1,2,1,3,3,3,3]))          # 4
print(sockMerchant([1,2,3,4]))                       # 0  (no pairs)`,
    time: 'O(n)', space: 'O(n)',
    clarifyingQuestions: [
      'Can there be more than two of the same color? (yes — 4 socks of one color = 2 pairs)',
      'Can the array be empty? (return 0)',
      'Does order matter? (no)',
    ],
    approachWalkthrough: 'I count frequencies with a hash map in one pass. Then for each color, count // 2 gives the number of pairs. Sum those up. The key insight: odd counts just lose one sock, even counts pair perfectly.',
    codeQuality: [
      'One-liner return: `sum(freq // 2 for freq in count.values())`',
      'Use `count.get(sock, 0) + 1` — avoids a key-exists check',
      'Alternatively: use `collections.Counter(ar)` — even more concise',
    ],
    gettingUnstuck: [
      'Brute force: sort and scan for adjacent equal elements — O(n log n).',
      'Hash map: count frequencies in O(n), then tally pairs in O(k) where k = unique colors.',
      'Any count ≥ 2 contributes pairs. count // 2 handles both even and odd counts correctly.',
    ],
    complexityBreakdown: 'Time O(n): one pass to build the frequency map, one pass over unique colors to tally pairs. Space O(n): the frequency map holds at most n entries.',
  },
};

export const categoryProblems = {
  'arrays-hashing': ['contains-duplicate','valid-anagram','two-sum','group-anagrams','top-k-frequent','product-except-self','longest-consecutive','sort-sentence','sock-merchant'],
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
