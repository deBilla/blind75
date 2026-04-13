export const pythonCategories = [
  {
    id: 'foundations',
    name: 'Foundations',
    color: '#6366f1',
    bg: '#1e1b4b',
    icon: 'x=1',
    level: '1 / 10',
    tagline: 'Variables, types, control flow',
    concept: 'Python is dynamically typed — variables hold references, not values. Master the built-in types and control structures before anything else.',
  },
  {
    id: 'collections',
    name: 'Collections & Comprehensions',
    color: '#10b981',
    bg: '#064e3b',
    icon: '[ ]',
    level: '2 / 10',
    tagline: 'list, dict, set, tuple + comprehensions',
    concept: 'Python\'s four core collections each have O(1) vs O(n) trade-offs. Comprehensions let you build them in one readable expression — often faster than explicit loops.',
  },
  {
    id: 'functions',
    name: 'Functions & Scope',
    color: '#f59e0b',
    bg: '#451a03',
    icon: 'def',
    level: '3 / 10',
    tagline: 'args, kwargs, closures, lambdas',
    concept: 'Functions are first-class objects. Understanding *args, **kwargs, closures, and scope lets you write flexible, reusable code and pass behavior as data.',
  },
  {
    id: 'oop',
    name: 'OOP & Classes',
    color: '#ef4444',
    bg: '#450a0a',
    icon: 'cls',
    level: '4 / 10',
    tagline: 'Classes, inheritance, dunders, properties',
    concept: 'Python OOP uses dunder (magic) methods to integrate with the language itself. __repr__, __eq__, __len__ make your objects feel native. Inheritance + composition build real systems.',
  },
  {
    id: 'error-handling',
    name: 'Error Handling',
    color: '#f97316',
    bg: '#431407',
    icon: 'try',
    level: '4 / 10',
    tagline: 'try/except, custom exceptions, context managers',
    concept: 'Exceptions are objects. Catch specifically, never broadly. Use finally for cleanup and context managers (with) to guarantee resource release.',
  },
  {
    id: 'iterators-generators',
    name: 'Iterators & Generators',
    color: '#8b5cf6',
    bg: '#2e1065',
    icon: 'yield',
    level: '5 / 10',
    tagline: 'iter, next, yield, lazy pipelines',
    concept: 'Generators produce values on demand — O(1) memory for infinite or large sequences. Any object with __iter__ and __next__ is an iterator. This pattern powers Python\'s for loop.',
  },
  {
    id: 'decorators',
    name: 'Decorators',
    color: '#06b6d4',
    bg: '#083344',
    icon: '@fn',
    level: '6 / 10',
    tagline: 'Wrap functions to add behavior',
    concept: 'A decorator is a function that takes a function and returns a new function. Use @functools.wraps to preserve metadata. Stack them: they apply bottom-up.',
  },
  {
    id: 'standard-library',
    name: 'Standard Library Power Tools',
    color: '#22c55e',
    bg: '#052e16',
    icon: 'lib',
    level: '6 / 10',
    tagline: 'collections, itertools, functools',
    concept: 'The stdlib is battle-tested and fast (many parts are C under the hood). Counter, defaultdict, deque, chain, product, partial — know these and you write half as much code.',
  },
  {
    id: 'type-hints',
    name: 'Type Hints & Protocols',
    color: '#a855f7',
    bg: '#3b0764',
    icon: ': T',
    level: '7 / 10',
    tagline: 'Annotations, generics, Protocol, TypeVar',
    concept: 'Type hints are optional but critical for large codebases. They power IDEs, mypy, and documentation. Protocols let you type-check duck typing without inheritance.',
  },
  {
    id: 'concurrency',
    name: 'Concurrency & Async',
    color: '#ec4899',
    bg: '#500724',
    icon: 'async',
    level: '8 / 10',
    tagline: 'threading, asyncio, async/await, GIL',
    concept: 'Use asyncio for I/O-bound work (network, disk) and multiprocessing for CPU-bound work. Threading exists but the GIL limits true parallelism for CPU tasks. async/await is cooperative multitasking.',
  },
  {
    id: 'descriptors-metaclasses',
    name: 'Descriptors & Metaclasses',
    color: '#f43f5e',
    bg: '#4c0519',
    icon: '__',
    level: '9 / 10',
    tagline: 'The machinery behind @property and class creation',
    concept: 'Descriptors power every attribute access in Python — @property, classmethod, staticmethod are all descriptors. Metaclasses let you intercept and customize class creation itself, enabling ORMs, plugin registries, and DSLs.',
  },
  {
    id: 'performance-internals',
    name: 'Performance & CPython Internals',
    color: '#eab308',
    bg: '#422006',
    icon: 'perf',
    level: '10 / 10',
    tagline: '__slots__, profiling, GIL deep-dive, C extensions',
    concept: 'At the top level you understand why CPython makes the tradeoffs it does. __slots__ cuts per-object memory 3–10×. cProfile + tracemalloc pin exactly where time and memory go. Knowing the C-layer lets you write extensions or call existing C libraries with ctypes.',
  },
];

export const pythonTopics = {
  // ─── FOUNDATIONS ──────────────────────────────────────────────────────────
  'variables-types': {
    id: 'variables-types',
    title: 'Variables & Data Types',
    category: 'foundations',
    level: 'Beginner',
    description: 'Python is dynamically typed — the type is attached to the object, not the variable. Variables are just names that point to objects in memory.',
    keyInsight: 'Everything in Python is an object. int, str, bool, None — all objects. Assignment just binds a name to an object; reassigning changes the binding, not the object.',
    sections: [
      {
        title: 'Core Types',
        explanation: 'Python has 5 fundamental scalar types. None is a singleton — use "is None" not "== None".',
        code: `# int — arbitrary precision, no overflow
x = 42
big = 10 ** 100        # works fine

# float — 64-bit IEEE 754
pi = 3.14159
0.1 + 0.2              # 0.30000000000000004 (floating point!)

# str — immutable, Unicode
name = "Dimuthu"
raw = r"C:\\Users\\foo"  # raw string, backslashes literal

# bool — subclass of int
True + True            # 2 (!) — bool IS an int
bool(0), bool(""), bool([])  # all False

# None — the absence of a value
result = None
result is None         # True (use 'is', not '==')`,
      },
      {
        title: 'Dynamic Typing & Type Checking',
        explanation: 'The type() and isinstance() functions let you inspect types at runtime. isinstance() is preferred because it handles subclasses.',
        code: `x = 42
type(x)                # <class 'int'>
isinstance(x, int)     # True
isinstance(x, (int, float))  # True — checks multiple types

# Variables can be rebound to any type
x = "now a string"
type(x)                # <class 'str'>

# id() returns the memory address of the object
a = 256
b = 256
a is b                 # True — CPython caches small ints (-5 to 256)

a = 1000
b = 1000
a is b                 # False — different objects in memory`,
      },
      {
        title: 'Type Conversion',
        explanation: 'Explicit is better than implicit. Python won\'t silently convert types — you do it yourself with int(), str(), float(), etc.',
        code: `int("42")          # 42
int(3.9)           # 3  (truncates, doesn't round)
float("3.14")      # 3.14
str(100)           # "100"
bool(0)            # False
bool("hello")      # True

# int() with base
int("ff", 16)      # 255
int("1010", 2)     # 10

# Be careful with edge cases
int("")            # ValueError
float("nan")       # float('nan') — valid but tricky`,
      },
    ],
    gotchas: [
      'Use "is" only for None, True, False — not for equality checks on arbitrary objects',
      '0.1 + 0.2 != 0.3 — use decimal.Decimal or round() for money math',
      'bool is a subclass of int: True == 1 and False == 0',
      'Strings are immutable — "concatenation in a loop" creates O(n²) intermediate strings; use "".join(list)',
    ],
    practiceHints: [
      'Check: what does bool([]) return vs bool([0])?',
      'Try: id(256) == id(256) vs id(1000) == id(1000) — why different?',
      'Fix: total = ""; for i in range(1000): total += str(i) — use join instead',
    ],
  },

  'control-flow': {
    id: 'control-flow',
    title: 'Control Flow',
    category: 'foundations',
    level: 'Beginner',
    description: 'if/elif/else, for loops, while, break, continue, and the walrus operator := for compact conditions.',
    keyInsight: 'Python\'s for loop iterates over any iterable — not just ranges. The else clause on loops runs only if no break was hit, which is a rarely-known but powerful pattern.',
    sections: [
      {
        title: 'if / elif / else',
        explanation: 'Truthiness: 0, "", [], {}, set(), None, and False are all falsy. Everything else is truthy.',
        code: `score = 85

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'F'

# Ternary (conditional expression)
label = "pass" if score >= 60 else "fail"

# Chained comparisons (Pythonic)
if 0 <= score <= 100:
    print("valid score")

# Walrus operator := (Python 3.8+)
# Assign and test in one expression
import re
if m := re.search(r'\\d+', "abc123"):
    print(m.group())   # "123"`,
      },
      {
        title: 'for Loops & range()',
        explanation: 'for iterates any iterable. Use enumerate() for index+value, zip() for parallel iteration.',
        code: `# Basic iteration
for item in [10, 20, 30]:
    print(item)

# range(start, stop, step)
for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(i)

# enumerate — index and value together
fruits = ['apple', 'banana', 'cherry']
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# zip — iterate two sequences in parallel
names = ['Alice', 'Bob']
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# for/else — else runs if loop completed without break
for n in [2, 3, 5, 7]:
    if n % 2 == 0 and n != 2:
        print("found composite")
        break
else:
    print("all prime")   # runs here`,
      },
      {
        title: 'while, break, continue',
        explanation: 'break exits the loop immediately. continue skips to the next iteration. Both work in for and while loops.',
        code: `# while with walrus
data = [1, 3, 5, 2, 8, 4]
i = 0
while i < len(data):
    if data[i] % 2 == 0:
        print(f"First even: {data[i]}")
        break
    i += 1

# continue skips current iteration
for n in range(10):
    if n % 2 == 0:
        continue       # skip even numbers
    print(n)           # prints 1, 3, 5, 7, 9

# Nested break only exits inner loop
for i in range(3):
    for j in range(3):
        if j == 1:
            break      # only exits inner loop
    print(i)           # still runs`,
      },
    ],
    gotchas: [
      'Modifying a list while iterating over it causes skipped elements — iterate over a copy: for x in lst[:]',
      'for/else is confusing to readers — add a comment explaining it',
      'range() is lazy in Python 3 — range(10**9) uses O(1) memory',
      'The walrus := operator has lower precedence than most operators — use parentheses',
    ],
    practiceHints: [
      'Write a loop that finds the first prime number > 100 using for/else',
      'Flatten [[1,2],[3,4],[5,6]] into [1,2,3,4,5,6] using a for loop',
      'Use zip() to find positions where two lists differ',
    ],
  },

  // ─── COLLECTIONS ──────────────────────────────────────────────────────────
  'lists-dicts-sets': {
    id: 'lists-dicts-sets',
    title: 'Lists, Dicts & Sets',
    category: 'collections',
    level: 'Beginner',
    description: 'Python\'s four core collections. List: ordered, mutable, O(1) append. Dict: key→value, O(1) lookup (Python 3.7+ insertion-ordered). Set: unique elements, O(1) membership.',
    keyInsight: 'Pick the right collection first. Dict lookup is O(1) not O(n). Set membership is O(1) not O(n). Most "slow list" problems disappear when you use a dict or set.',
    sections: [
      {
        title: 'Lists — Ordered, Mutable',
        explanation: 'Lists are dynamic arrays. append is O(1) amortized. insert(0, x) is O(n) — use collections.deque if you need fast prepend.',
        code: `lst = [3, 1, 4, 1, 5, 9]

# Common operations and their complexity
lst.append(2)          # O(1) — add to end
lst.pop()              # O(1) — remove from end
lst.insert(0, 99)      # O(n) — shift all elements
lst.pop(0)             # O(n) — shift all elements
lst.remove(1)          # O(n) — finds first 1 and removes
len(lst)               # O(1)
lst[2]                 # O(1) — random access

# Slicing — creates a new list
lst[1:4]               # [1, 4, 1]
lst[::-1]              # reversed copy
lst[::2]               # every other element

# Sorting
lst.sort()             # in-place, O(n log n)
sorted(lst)            # returns new sorted list
lst.sort(key=abs, reverse=True)  # custom key

# Useful methods
lst.count(1)           # count occurrences
lst.index(5)           # first index of 5 (ValueError if missing)
lst2 = lst.copy()      # shallow copy (important!)`,
      },
      {
        title: 'Dicts — Key→Value, O(1) Lookup',
        explanation: 'Dict keys must be hashable (immutable). Python 3.7+ guarantees insertion order. Use .get() to avoid KeyError.',
        code: `d = {'name': 'Alice', 'age': 30, 'score': 95}

# Access
d['name']              # 'Alice' — KeyError if missing
d.get('age')           # 30 — None if missing
d.get('phone', 'N/A')  # 'N/A' — default value

# Mutation
d['email'] = 'a@b.com' # insert/update
del d['score']          # remove key
d.pop('age', None)      # remove and return; None if missing

# Iteration
for key in d:                    # iterate keys
    print(key)
for key, val in d.items():       # iterate pairs
    print(f"{key}: {val}")
for val in d.values():           # iterate values
    print(val)

# Merging (Python 3.9+)
defaults = {'timeout': 30, 'retries': 3}
config = defaults | {'timeout': 60}  # {timeout:60, retries:3}

# Setdefault and update
counts = {}
for word in ['a', 'b', 'a', 'c']:
    counts[word] = counts.get(word, 0) + 1
# {'a': 2, 'b': 1, 'c': 1}`,
      },
      {
        title: 'Sets — Unique Elements, O(1) Membership',
        explanation: 'Sets are hash tables without values. O(1) add/remove/in. Perfect for deduplication and membership tests.',
        code: `s = {1, 2, 3, 4, 5}

# Membership (O(1) — use set not list for this!)
3 in s                 # True
10 in s                # False

# Mutation
s.add(6)               # add one element
s.discard(10)          # remove if present (no error)
s.remove(1)            # remove (KeyError if missing)

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
a | b                  # union: {1,2,3,4,5,6}
a & b                  # intersection: {3,4}
a - b                  # difference: {1,2}
a ^ b                  # symmetric diff: {1,2,5,6}

# Deduplication
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5]
unique = list(set(nums))  # [1, 2, 3, 4, 5, 6, 9] — order not guaranteed

# frozenset — immutable set (can be a dict key)
fs = frozenset([1, 2, 3])`,
      },
      {
        title: 'Tuples — Ordered, Immutable',
        explanation: 'Tuples are immutable lists. Use them for fixed-size records. They can be dict keys (unlike lists). Unpacking is idiomatic Python.',
        code: `point = (3, 4)
x, y = point           # unpacking

# Named tuple — tuple with field names
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
p.x, p.y               # 3, 4

# Tuple as dict key (lists can't be dict keys)
grid = {(0,0): 'start', (1,2): 'end'}

# Single-element tuple needs trailing comma
singleton = (42,)      # NOT (42) — that's just 42
type((42,))            # tuple
type((42))             # int

# Swap without temp variable
a, b = 1, 2
a, b = b, a            # a=2, b=1`,
      },
    ],
    gotchas: [
      'list.copy() is shallow — nested objects are still shared. Use copy.deepcopy() for full independence.',
      'Set literal {} creates a dict, not a set. Use set() for empty set.',
      '[] * 3 = [[], [], []] but all inner lists are the SAME object — use [[] for _ in range(3)]',
      'Dict keys must be hashable — lists can\'t be keys, but tuples can',
    ],
    practiceHints: [
      'Find the two most common elements in a list using a dict (then verify with Counter)',
      'Given two lists, find common elements using set intersection',
      'Build a word frequency counter from a paragraph of text',
    ],
  },

  'comprehensions': {
    id: 'comprehensions',
    title: 'Comprehensions',
    category: 'collections',
    level: 'Intermediate',
    description: 'List, dict, and set comprehensions are single-expression ways to build collections. They\'re more readable and often faster than equivalent for loops.',
    keyInsight: 'Comprehensions are syntactic sugar over filter() + map(). If the logic becomes complex, use a regular loop — readability wins. Add an "if" guard to filter, a nested "for" to flatten.',
    sections: [
      {
        title: 'List Comprehensions',
        explanation: '[expression for item in iterable if condition] — condition is optional.',
        code: `# Basic: squares
squares = [x**2 for x in range(10)]

# With filter: even squares only
even_sq = [x**2 for x in range(10) if x % 2 == 0]

# Transform strings
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
lengths = [len(w) for w in words]

# Nested: flatten 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [n for row in matrix for n in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Conditional expression inside (if-else on value)
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
# ['even', 'odd', 'even', 'odd', 'even']`,
      },
      {
        title: 'Dict & Set Comprehensions',
        explanation: '{k: v for ...} builds a dict. {expr for ...} builds a set.',
        code: `# Dict comprehension
squares_map = {x: x**2 for x in range(6)}
# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}

# Invert a dict
original = {'a': 1, 'b': 2, 'c': 3}
inverted = {v: k for k, v in original.items()}
# {1:'a', 2:'b', 3:'c'}

# Filter dict entries
prices = {'apple': 1.2, 'banana': 0.5, 'cherry': 3.0}
expensive = {k: v for k, v in prices.items() if v > 1.0}
# {'apple': 1.2, 'cherry': 3.0}

# Set comprehension
unique_lengths = {len(w) for w in ["cat", "dog", "elephant", "ant"]}
# {3, 8}`,
      },
      {
        title: 'Generator Expressions',
        explanation: 'Replace [] with () to get a generator — lazy, O(1) memory. Use when you don\'t need to store all values.',
        code: `# List comprehension — builds entire list in memory
total = sum([x**2 for x in range(10**6)])  # allocates list

# Generator expression — lazy, computes on demand
total = sum(x**2 for x in range(10**6))   # O(1) memory

# Generators work with any function that accepts an iterable
import math
result = max(math.sqrt(x) for x in [4, 9, 16, 25])  # 5.0

# Pass to list() or tuple() to materialize
evens = list(x for x in range(20) if x % 2 == 0)

# Chained generators — pipeline style
data = range(100)
filtered = (x for x in data if x % 3 == 0)
squared  = (x**2 for x in filtered)
print(list(squared))  # [0, 9, 36, 81, ...]`,
      },
    ],
    gotchas: [
      'Nested comprehensions read inside-out: [x for row in matrix for x in row] — "row" comes first',
      'Don\'t put side effects (print, append) in comprehensions — use a regular loop',
      'Generator expressions are exhausted after one pass — you can\'t re-iterate them',
      'Complex comprehensions with 3+ clauses are harder to read than a loop — prefer clarity',
    ],
    practiceHints: [
      'Write a comprehension that flattens [[1,[2,3]],[4,[5,6]]] — one level only',
      'Build a dict of {word: count} from a sentence string in one line',
      'Use a generator expression to find the first square > 1000',
    ],
  },

  // ─── FUNCTIONS ────────────────────────────────────────────────────────────
  'functions-scope': {
    id: 'functions-scope',
    title: 'Functions & Scope',
    category: 'functions',
    level: 'Beginner',
    description: 'Functions are first-class objects — they can be passed as arguments, returned, and stored in data structures. Scope rules follow LEGB: Local, Enclosing, Global, Built-in.',
    keyInsight: 'Default argument values are evaluated ONCE at function definition time, not at call time. Mutable defaults (like []) are shared across all calls — a notorious gotcha.',
    sections: [
      {
        title: 'Defining Functions',
        explanation: 'def creates a function object bound to a name. return exits immediately and returns a value (None if omitted).',
        code: `def greet(name, greeting="Hello"):
    """Docstring: describes the function."""
    return f"{greeting}, {name}!"

greet("Alice")            # "Hello, Alice!"
greet("Bob", "Hi")        # "Hi, Bob!"
greet(greeting="Hey", name="Carol")  # keyword args — order irrelevant

# Functions are objects
fn = greet
fn("Dave")                # "Hello, Dave!"

# Multiple return values (actually returns a tuple)
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
# lo=1, hi=9`,
      },
      {
        title: '*args & **kwargs',
        explanation: '*args collects extra positional args into a tuple. **kwargs collects extra keyword args into a dict. They can be combined.',
        code: `# *args — variable positional arguments
def total(*args):
    return sum(args)

total(1, 2, 3)      # 6
total(10, 20)       # 30

# **kwargs — variable keyword arguments
def show(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")

show(name="Alice", age=30)  # name: Alice, age: 30

# Combined signature
def mixed(required, *args, **kwargs):
    print(required, args, kwargs)

mixed(1, 2, 3, x=4, y=5)
# 1 (2, 3) {'x': 4, 'y': 5}

# Unpacking into function calls
nums = [1, 2, 3]
print(*nums)        # print(1, 2, 3)

config = {'sep': '-', 'end': '!\\n'}
print("a", "b", **config)   # a-b!`,
      },
      {
        title: 'Scope (LEGB) & Closures',
        explanation: 'Python resolves names in this order: Local → Enclosing → Global → Built-in. Use global/nonlocal to write to outer scopes.',
        code: `x = "global"

def outer():
    x = "enclosing"

    def inner():
        # x = "local"  (if we defined it here)
        print(x)       # "enclosing" — found in Enclosing scope

    inner()

# Closure — inner function captures enclosing variable
def make_counter():
    count = 0
    def counter():
        nonlocal count     # write to enclosing scope
        count += 1
        return count
    return counter         # return the function itself

c = make_counter()
c()   # 1
c()   # 2
c()   # 3

# THE MUTABLE DEFAULT GOTCHA
def bad_append(item, lst=[]):    # lst shared across calls!
    lst.append(item)
    return lst

bad_append(1)   # [1]
bad_append(2)   # [1, 2] — not [2]!

def good_append(item, lst=None): # correct pattern
    if lst is None:
        lst = []
    lst.append(item)
    return lst`,
      },
      {
        title: 'Lambda & Higher-Order Functions',
        explanation: 'lambda creates anonymous single-expression functions. map(), filter(), sorted() all accept functions as arguments.',
        code: `# Lambda — anonymous function
square = lambda x: x ** 2
square(5)   # 25

# sorted() with key function
people = [("Alice", 30), ("Bob", 25), ("Carol", 35)]
sorted(people, key=lambda p: p[1])  # sort by age

# map — apply function to each element (lazy)
nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, nums))

# filter — keep elements where function returns True (lazy)
evens = list(filter(lambda x: x % 2 == 0, nums))

# functools.reduce — fold a sequence
from functools import reduce
product = reduce(lambda acc, x: acc * x, nums)  # 120

# Prefer comprehensions over map/filter for readability
squares = [x**2 for x in nums]         # clearer
evens   = [x for x in nums if x % 2 == 0]  # clearer`,
      },
    ],
    gotchas: [
      'Mutable default arguments are shared — always use None as default and initialize inside',
      'lambda is limited to one expression — for anything complex, use def',
      'nonlocal is required to assign to enclosing scope variables (just reading them doesn\'t need it)',
      'Functions defined in a loop that capture the loop variable all capture the FINAL value',
    ],
    practiceHints: [
      'Write a make_adder(n) function that returns a function adding n to its argument',
      'Sort a list of dicts by a specific key using sorted() with a lambda',
      'Write a function that accepts any number of args and returns their average',
    ],
  },

  // ─── OOP ──────────────────────────────────────────────────────────────────
  'oop-classes': {
    id: 'oop-classes',
    title: 'OOP & Classes',
    category: 'oop',
    level: 'Intermediate',
    description: 'Python OOP uses dunder (double-underscore) methods to integrate custom classes with language features like print(), len(), comparison operators, and iteration.',
    keyInsight: 'Always define __repr__ — it\'s used in debugging and by the REPL. Define __str__ only when you want a different human-readable format. __eq__ should also set __hash__ = None (making instances unhashable) unless you implement __hash__ too.',
    sections: [
      {
        title: 'Class Basics',
        explanation: '__init__ is the initializer (not constructor — __new__ is the constructor). self refers to the instance.',
        code: `class BankAccount:
    # Class variable — shared across all instances
    interest_rate = 0.05

    def __init__(self, owner, balance=0):
        # Instance variables — unique per instance
        self.owner = owner
        self.balance = balance
        self._transactions = []    # _ prefix = "private by convention"

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.balance += amount
        self._transactions.append(('deposit', amount))
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self._transactions.append(('withdraw', amount))
        return self

    def __repr__(self):
        return f"BankAccount(owner={self.owner!r}, balance={self.balance})"

    def __str__(self):
        return f"{self.owner}'s account: \${self.balance:.2f}"

acc = BankAccount("Alice", 1000)
acc.deposit(500).withdraw(200)   # method chaining
print(acc)                        # Alice's account: $1300.00
repr(acc)                         # BankAccount(owner='Alice', balance=1300)`,
      },
      {
        title: 'Dunder Methods',
        explanation: 'Dunder methods let your objects integrate with Python\'s operators and built-ins.',
        code: `class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):      # v1 + v2
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):      # v1 - v2
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):     # v * 3
        return Vector(self.x * scalar, self.y * scalar)

    def __abs__(self):             # abs(v) — magnitude
        return (self.x**2 + self.y**2) ** 0.5

    def __eq__(self, other):       # v1 == v2
        return self.x == other.x and self.y == other.y

    def __len__(self):             # len(v) — must return int
        return 2

    def __bool__(self):            # bool(v) — zero vector is falsy
        return self.x != 0 or self.y != 0

v1 = Vector(3, 4)
v2 = Vector(1, 2)
v1 + v2          # Vector(4, 6)
abs(v1)          # 5.0
len(v1)          # 2`,
      },
      {
        title: 'Properties, Class & Static Methods',
        explanation: '@property turns a method into an attribute. @classmethod receives the class as first arg. @staticmethod is a plain function in the class namespace.',
        code: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero")
        self._celsius = value

    @property
    def fahrenheit(self):           # computed property — no setter
        return self._celsius * 9/5 + 32

    @classmethod
    def from_fahrenheit(cls, f):    # alternative constructor
        return cls((f - 32) * 5/9)

    @staticmethod
    def is_valid(celsius):          # utility — no self or cls
        return celsius >= -273.15

t = Temperature(100)
t.celsius        # 100
t.fahrenheit     # 212.0
t.celsius = 0    # uses setter
Temperature.from_fahrenheit(212)    # Temperature(100)
Temperature.is_valid(-300)          # False`,
      },
      {
        title: 'Inheritance & super()',
        explanation: 'Python supports multiple inheritance. super() delegates to the next class in the MRO (Method Resolution Order).',
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclasses must implement speak()")

    def __repr__(self):
        return f"{type(self).__name__}({self.name!r})"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class GuideDog(Dog):
    def __init__(self, name, owner):
        super().__init__(name)     # call parent __init__
        self.owner = owner

    def speak(self):
        base = super().speak()     # call parent speak
        return f"{base} (guide dog for {self.owner})"

# isinstance checks the whole inheritance chain
d = GuideDog("Rex", "Alice")
isinstance(d, GuideDog)   # True
isinstance(d, Dog)        # True
isinstance(d, Animal)     # True`,
      },
    ],
    gotchas: [
      'Defining __eq__ without __hash__ makes instances unhashable (can\'t be dict keys or set members)',
      'Class variables are shared — if mutable (list/dict), all instances see mutations',
      '__repr__ should return a string that could recreate the object: repr(obj)',
      'super() with no arguments (Python 3) is the standard — don\'t use super(ClassName, self)',
    ],
    practiceHints: [
      'Build a Stack class with push/pop/peek and make it support len() and bool()',
      'Implement a Point class with +, -, ==, and __abs__ for distance from origin',
      'Create a Circle using @property for area and circumference (computed from radius)',
    ],
  },

  // ─── ERROR HANDLING ───────────────────────────────────────────────────────
  'error-handling': {
    id: 'error-handling',
    title: 'Error Handling',
    category: 'error-handling',
    level: 'Intermediate',
    description: 'Python uses exceptions for error handling. The try/except/else/finally block gives full control. Context managers (with) guarantee cleanup even when exceptions occur.',
    keyInsight: 'Catch the most specific exception possible — never bare "except:" or "except Exception:" unless you re-raise. The "else" clause in try runs only when no exception occurred — use it for code that should only run on success.',
    sections: [
      {
        title: 'try / except / else / finally',
        explanation: 'else runs on success. finally always runs — even after return or raise. Use both together for clean resource management.',
        code: `def parse_int(s):
    try:
        result = int(s)
    except ValueError as e:
        print(f"Invalid input: {e}")
        return None
    except TypeError:
        print("Input must be a string")
        return None
    else:
        # Only runs if no exception was raised
        print(f"Successfully parsed: {result}")
        return result
    finally:
        # Always runs — even on return or exception
        print("parse_int() finished")

# Multiple exception types in one handler
try:
    data = risky_operation()
except (KeyError, IndexError) as e:
    print(f"Data access error: {e}")

# Re-raising exceptions
try:
    connect_to_db()
except ConnectionError as e:
    log_error(e)
    raise   # re-raises the same exception with original traceback`,
      },
      {
        title: 'Custom Exceptions',
        explanation: 'Define custom exceptions by subclassing Exception. Add context with __init__ and use exception chaining (raise X from Y) to preserve cause.',
        code: `class AppError(Exception):
    """Base exception for this application."""
    pass

class ValidationError(AppError):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"Validation failed on '{field}': {message}")

class NotFoundError(AppError):
    def __init__(self, resource, id_):
        super().__init__(f"{resource} with id={id_} not found")

# Exception chaining — shows original cause
def get_user(user_id):
    try:
        return db.find(user_id)
    except DatabaseError as e:
        raise NotFoundError("User", user_id) from e  # chain!

# Usage
try:
    validate_email("not-an-email")
except ValidationError as e:
    print(e.field)    # 'email'
    print(e.message)  # 'Invalid format'`,
      },
      {
        title: 'Context Managers (with statement)',
        explanation: 'Context managers guarantee __exit__ runs even if an exception occurs — perfect for files, locks, DB connections.',
        code: `# File I/O — always use 'with'
with open("data.txt", "r") as f:
    content = f.read()
# File is automatically closed here, even on exception

# Multiple context managers
with open("src.txt") as src, open("dst.txt", "w") as dst:
    dst.write(src.read())

# Custom context manager via class
class Timer:
    def __enter__(self):
        import time
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.elapsed = time.perf_counter() - self.start
        return False   # don't suppress exceptions

with Timer() as t:
    do_work()
print(f"Took {t.elapsed:.3f}s")

# Custom context manager via contextlib (simpler)
from contextlib import contextmanager

@contextmanager
def managed_resource():
    resource = acquire()
    try:
        yield resource
    finally:
        release(resource)`,
      },
    ],
    gotchas: [
      '"except Exception:" catches almost everything — only acceptable at top-level with a re-raise or logging',
      '"except:" (bare) also catches SystemExit and KeyboardInterrupt — almost never what you want',
      'finally can swallow exceptions if it also raises — be careful with return in finally',
      'Exception chaining ("raise X from Y") preserves the original traceback — always use it when converting exceptions',
    ],
    practiceHints: [
      'Write a safe_divide(a, b) that returns None on division by zero without using if',
      'Build a retry(func, n) decorator that retries func up to n times on exception',
      'Create a contextmanager that temporarily changes os.environ variables and restores them',
    ],
  },

  // ─── ITERATORS & GENERATORS ───────────────────────────────────────────────
  'iterators-generators': {
    id: 'iterators-generators',
    title: 'Iterators & Generators',
    category: 'iterators-generators',
    level: 'Intermediate',
    description: 'Any object with __iter__ returning self and __next__ raising StopIteration is an iterator. Generators are functions that use yield to produce values lazily, one at a time.',
    keyInsight: 'Generators are memory-efficient — they produce values on demand. A generator function pauses at each yield and resumes from there on next(). Use them for large data pipelines, infinite sequences, and streaming.',
    sections: [
      {
        title: 'Iterators Protocol',
        explanation: 'The iterator protocol: __iter__ returns self, __next__ returns the next value or raises StopIteration.',
        code: `# What Python's for loop actually does:
# 1. Calls iter(obj) to get an iterator
# 2. Repeatedly calls next(iterator) until StopIteration

lst = [1, 2, 3]
it = iter(lst)
next(it)    # 1
next(it)    # 2
next(it)    # 3
next(it)    # raises StopIteration

# Custom iterator
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self      # iterator returns itself

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

for n in Countdown(5):
    print(n)   # 5, 4, 3, 2, 1`,
      },
      {
        title: 'Generator Functions',
        explanation: 'Any function with yield is a generator function. Calling it returns a generator object (lazy). yield pauses execution and sends a value out.',
        code: `def fibonacci():
    """Infinite Fibonacci generator."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Take first 10 Fibonacci numbers
fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Generator as pipeline
def read_large_file(path):
    with open(path) as f:
        for line in f:
            yield line.strip()

def filter_errors(lines):
    for line in lines:
        if 'ERROR' in line:
            yield line

def parse_error(lines):
    for line in lines:
        yield line.split(': ')[1]

# Lazy pipeline — O(1) memory regardless of file size
lines = read_large_file("app.log")
errors = filter_errors(lines)
messages = parse_error(errors)

for msg in messages:
    print(msg)`,
      },
      {
        title: 'yield from & send()',
        explanation: 'yield from delegates to a sub-generator. send() passes a value back into a generator.',
        code: `# yield from — delegate to sub-generator
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)  # recursive delegation
        else:
            yield item

list(flatten([1, [2, [3, 4]], 5]))  # [1, 2, 3, 4, 5]

# send() — bidirectional communication with generator
def accumulator():
    total = 0
    while True:
        value = yield total    # yield sends out total, receives via send()
        if value is None:
            break
        total += value

gen = accumulator()
next(gen)         # prime the generator → 0
gen.send(10)      # → 10
gen.send(20)      # → 30
gen.send(5)       # → 35

# itertools.islice — take N from any iterator
from itertools import islice
first_5_fib = list(islice(fibonacci(), 5))  # [0,1,1,2,3]`,
      },
    ],
    gotchas: [
      'Generators are exhausted after one pass — you cannot rewind them; call the generator function again',
      'A generator function with return X raises StopIteration(X) — useful with yield from',
      'next() on an exhausted generator raises StopIteration — use next(gen, default) for a fallback',
      'yield from flattens one level — use recursion for deep nesting',
    ],
    practiceHints: [
      'Write a generator that yields running averages of a stream of numbers',
      'Build a chain() function that yields from multiple iterables in sequence',
      'Create an infinite prime number generator using a sieve approach',
    ],
  },

  // ─── DECORATORS ───────────────────────────────────────────────────────────
  'decorators': {
    id: 'decorators',
    title: 'Decorators',
    category: 'decorators',
    level: 'Advanced',
    description: 'A decorator is a callable that takes a function and returns a new callable. The @syntax is syntactic sugar: @dec over def fn is equivalent to fn = dec(fn).',
    keyInsight: 'Always use @functools.wraps(fn) inside your wrapper — it copies __name__, __doc__, and other attributes from the original function to the wrapper, preserving introspection and debugging.',
    sections: [
      {
        title: 'Basic Decorator Pattern',
        explanation: 'A decorator wraps a function with extra behavior before and/or after the call.',
        code: `import functools
import time

def timer(fn):
    @functools.wraps(fn)   # preserves fn.__name__, fn.__doc__
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{fn.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.1)
    return 42

slow_function()   # prints: slow_function took 0.1001s

# Equivalent to:
# slow_function = timer(slow_function)`,
      },
      {
        title: 'Decorator with Arguments',
        explanation: 'Add a layer: a function that takes decorator args and returns a decorator.',
        code: `import functools

def retry(max_attempts=3, exceptions=(Exception,)):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            last_exc = None
            for attempt in range(1, max_attempts + 1):
                try:
                    return fn(*args, **kwargs)
                except exceptions as e:
                    last_exc = e
                    print(f"Attempt {attempt} failed: {e}")
            raise last_exc
        return wrapper
    return decorator

@retry(max_attempts=3, exceptions=(ConnectionError,))
def fetch_data(url):
    ...   # might raise ConnectionError

# Equivalent to:
# fetch_data = retry(max_attempts=3, exceptions=(ConnectionError,))(fetch_data)`,
      },
      {
        title: 'Stacking Decorators & Class-Based',
        explanation: 'Decorators stack bottom-up. A class with __call__ can also be a decorator.',
        code: `# Stacking — applied bottom-up (closest first)
@timer
@retry(max_attempts=2)
def risky():
    ...

# Equivalent to:
# risky = timer(retry(max_attempts=2)(risky))

# Class-based decorator
class Cache:
    def __init__(self, fn):
        functools.update_wrapper(self, fn)
        self.fn = fn
        self._cache = {}

    def __call__(self, *args):
        if args not in self._cache:
            self._cache[args] = self.fn(*args)
        return self._cache[args]

@Cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

# Built-in decorators from functools
from functools import lru_cache, cached_property

@lru_cache(maxsize=128)    # memoize with LRU eviction
def expensive(n):
    ...

class Circle:
    def __init__(self, r): self.r = r

    @cached_property       # computed once, then cached as attribute
    def area(self):
        import math
        return math.pi * self.r ** 2`,
      },
    ],
    gotchas: [
      'Forgetting @functools.wraps means your function loses its __name__ and __doc__ — breaks introspection',
      'Stacking order matters: @A @B def f means f = A(B(f)), so B wraps f first',
      'Class-based decorators lose the ability to use inspect.ismethod — use functools.update_wrapper',
      '@lru_cache requires hashable arguments — doesn\'t work with list or dict args',
    ],
    practiceHints: [
      'Write a @memoize decorator that caches any function\'s results',
      'Build a @validate decorator that checks function arguments against type annotations',
      'Create a @rate_limit(calls_per_second) decorator using time.sleep',
    ],
  },

  // ─── STANDARD LIBRARY ─────────────────────────────────────────────────────
  'standard-library': {
    id: 'standard-library',
    title: 'Standard Library Power Tools',
    category: 'standard-library',
    level: 'Intermediate',
    description: 'Python\'s standard library is massive. The highest-leverage modules for day-to-day engineering: collections, itertools, functools, pathlib, and dataclasses.',
    keyInsight: 'Before writing a utility function, check if it\'s in itertools or functools. Counter, defaultdict, and deque from collections eliminate entire classes of boilerplate. pathlib replaces os.path with an OOP API.',
    sections: [
      {
        title: 'collections',
        explanation: 'Counter, defaultdict, deque, OrderedDict, namedtuple, ChainMap.',
        code: `from collections import Counter, defaultdict, deque

# Counter — frequency counting
words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
c = Counter(words)
# Counter({'apple': 3, 'banana': 2, 'cherry': 1})
c.most_common(2)          # [('apple', 3), ('banana', 2)]
c['apple']                # 3
c['missing']              # 0 (no KeyError!)
c + Counter(['apple'])    # Counter({'apple': 4, ...})

# defaultdict — never get KeyError on missing key
graph = defaultdict(list)
graph['A'].append('B')    # no key check needed
graph['A'].append('C')
# defaultdict(<class 'list'>, {'A': ['B', 'C']})

word_count = defaultdict(int)
for w in words:
    word_count[w] += 1    # int default is 0

# deque — O(1) append and pop from both ends
q = deque([1, 2, 3])
q.appendleft(0)           # [0, 1, 2, 3]
q.popleft()               # 0, queue is [1, 2, 3]
q.rotate(1)               # [3, 1, 2]

# deque(maxlen=N) — fixed-size sliding window
recent = deque(maxlen=3)
for x in range(7):
    recent.append(x)
# deque([4, 5, 6], maxlen=3)`,
      },
      {
        title: 'itertools',
        explanation: 'Tools for working with iterators efficiently. All lazy — use list() to materialize.',
        code: `import itertools

# chain — concatenate iterables
list(itertools.chain([1,2], [3,4], [5]))  # [1,2,3,4,5]
list(itertools.chain.from_iterable([[1,2],[3,4]]))  # [1,2,3,4]

# islice — lazy slicing of any iterator
import itertools
first5 = list(itertools.islice(range(1000000), 5))  # [0,1,2,3,4]

# product — cartesian product
list(itertools.product([1,2], ['a','b']))
# [(1,'a'), (1,'b'), (2,'a'), (2,'b')]

# combinations and permutations
list(itertools.combinations([1,2,3], 2))   # [(1,2),(1,3),(2,3)]
list(itertools.permutations([1,2,3], 2))   # 6 items

# groupby — group consecutive elements (sort first!)
data = [('A', 1), ('A', 2), ('B', 1), ('B', 3)]
for key, group in itertools.groupby(data, key=lambda x: x[0]):
    print(key, list(group))

# accumulate — running totals
list(itertools.accumulate([1,2,3,4,5]))    # [1,3,6,10,15]
import operator
list(itertools.accumulate([1,2,3,4,5], operator.mul))  # [1,2,6,24,120]`,
      },
      {
        title: 'functools & dataclasses',
        explanation: 'functools provides partial, reduce, lru_cache, total_ordering. dataclasses auto-generates __init__, __repr__, __eq__.',
        code: `import functools
from dataclasses import dataclass, field

# partial — pre-fill arguments
base2 = functools.partial(int, base=2)
base2("1010")    # 10
base2("1111")    # 15

# total_ordering — define __eq__ + ONE of lt/le/gt/ge, get rest free
@functools.total_ordering
class Version:
    def __init__(self, major, minor):
        self.major, self.minor = major, minor

    def __eq__(self, other):
        return (self.major, self.minor) == (other.major, other.minor)

    def __lt__(self, other):
        return (self.major, self.minor) < (other.major, other.minor)

Version(1,2) < Version(2,0)   # True

# dataclasses — auto-generated boilerplate
@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0                  # default value

@dataclass(frozen=True)             # immutable (hashable)
class Config:
    host: str
    port: int = 8080
    tags: list = field(default_factory=list)   # mutable default!

p = Point(1.0, 2.0)
print(p)   # Point(x=1.0, y=2.0, z=0.0)  — free __repr__`,
      },
    ],
    gotchas: [
      'itertools.groupby only groups CONSECUTIVE equal elements — sort first if you want all same-key items together',
      'Counter arithmetic skips zero and negative counts by default — use Counter.update() to add',
      'dataclass mutable defaults need field(default_factory=list) — same mutable default gotcha as functions',
      'functools.lru_cache on a method causes memory leaks (holds reference to self) — use functools.cached_property instead',
    ],
    practiceHints: [
      'Use Counter to find the most common character in a string',
      'Build an adjacency list graph using defaultdict(set)',
      'Use itertools.product to generate all possible card combinations from a deck',
    ],
  },

  // ─── TYPE HINTS ───────────────────────────────────────────────────────────
  'type-hints': {
    id: 'type-hints',
    title: 'Type Hints & Protocols',
    category: 'type-hints',
    level: 'Advanced',
    description: 'Type hints are optional annotations that power static analysis (mypy, pyright), IDE autocompletion, and documentation. Python does NOT enforce them at runtime by default.',
    keyInsight: 'Use Protocol for duck typing — it\'s structural subtyping. If a class has the right methods, it satisfies the Protocol without inheriting from it. This is how Python\'s typing models "if it quacks like a duck".',
    sections: [
      {
        title: 'Basic Annotations',
        explanation: 'Python 3.9+ supports built-in generics (list[int] instead of List[int]). Python 3.10+ adds X | Y union syntax.',
        code: `# Variable annotations
name: str = "Alice"
count: int = 0
ratio: float = 0.5
flag: bool = True
nothing: None = None

# Function annotations
def greet(name: str, times: int = 1) -> str:
    return (name + "\\n") * times

# Built-in generics (Python 3.9+)
def first(lst: list[int]) -> int | None:
    return lst[0] if lst else None

# Old style (Python 3.8 and below)
from typing import List, Optional
def first_old(lst: List[int]) -> Optional[int]:
    return lst[0] if lst else None

# Dict, Tuple, Set
def process(data: dict[str, list[int]]) -> set[int]:
    return set(n for nums in data.values() for n in nums)

# Callable
from typing import Callable
def apply(fn: Callable[[int, int], int], a: int, b: int) -> int:
    return fn(a, b)`,
      },
      {
        title: 'TypeVar, Generic Classes & Protocol',
        explanation: 'TypeVar creates a type variable. Generic classes work with any type. Protocol defines structural interfaces.',
        code: `from typing import TypeVar, Generic, Protocol

T = TypeVar('T')

# Generic function — works with any type
def first_item(lst: list[T]) -> T | None:
    return lst[0] if lst else None

first_item([1, 2, 3])      # returns int
first_item(["a", "b"])     # returns str

# Generic class
class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

s: Stack[int] = Stack()
s.push(1)

# Protocol — structural typing (duck typing)
class Drawable(Protocol):
    def draw(self) -> None: ...
    def area(self) -> float: ...

class Circle:
    def draw(self) -> None: print("drawing circle")
    def area(self) -> float: return 3.14 * self.r ** 2

def render(shape: Drawable) -> None:   # Circle satisfies Drawable
    print(f"Area: {shape.area()}")     # without inheriting from it
    shape.draw()`,
      },
      {
        title: 'Advanced: Literal, TypedDict, overload',
        explanation: 'Literal constrains values. TypedDict types dict shapes. @overload defines multiple signatures.',
        code: `from typing import Literal, TypedDict, overload

# Literal — restrict to specific values
Direction = Literal['north', 'south', 'east', 'west']

def move(direction: Direction) -> None:
    ...

move('north')   # OK
move('up')      # mypy error!

# TypedDict — type a dict's structure
class Movie(TypedDict):
    title: str
    year: int
    rating: float

def format_movie(m: Movie) -> str:
    return f"{m['title']} ({m['year']}) ★{m['rating']}"

# @overload — different return types based on input type
@overload
def process(x: int) -> int: ...
@overload
def process(x: str) -> str: ...

def process(x: int | str) -> int | str:
    if isinstance(x, int):
        return x * 2
    return x.upper()`,
      },
    ],
    gotchas: [
      'Type hints are NOT enforced at runtime — use a type checker (mypy/pyright) separately',
      'from __future__ import annotations defers evaluation (Python 3.7+) — allows forward references',
      'Any is the escape hatch — it disables type checking for that variable, use sparingly',
      'Mutable generics: list[int] is NOT a subtype of list[object] — Python\'s type system is invariant for generics',
    ],
    practiceHints: [
      'Add type hints to a simple function and run mypy to verify',
      'Write a Protocol for a "Sortable" object that supports < comparison',
      'Create a generic Pair[T, U] dataclass with a swap() method',
    ],
  },

  // ─── CONCURRENCY ──────────────────────────────────────────────────────────
  'concurrency': {
    id: 'concurrency',
    title: 'Concurrency & Async',
    category: 'concurrency',
    level: 'Advanced',
    description: 'Python has three concurrency models: threading (I/O bound, limited by GIL), multiprocessing (CPU bound, bypasses GIL), and asyncio (I/O bound, single-threaded cooperative).',
    keyInsight: 'The GIL (Global Interpreter Lock) means only one thread runs Python bytecode at a time. For CPU-bound work, use multiprocessing. For I/O-bound work (network calls, file reads), use threading or asyncio — both release the GIL during I/O.',
    sections: [
      {
        title: 'threading — I/O Bound Parallelism',
        explanation: 'Threads share memory. Use Lock to protect shared state. The GIL limits CPU parallelism but releases during I/O.',
        code: `import threading
import time

# Basic thread
def worker(name, delay):
    time.sleep(delay)   # GIL released during sleep!
    print(f"{name} done")

t = threading.Thread(target=worker, args=("task1", 1))
t.start()
t.join()    # wait for completion

# Thread pool (simpler than managing threads manually)
from concurrent.futures import ThreadPoolExecutor

def fetch(url):
    import urllib.request
    with urllib.request.urlopen(url) as r:
        return r.read()

urls = ["http://example.com"] * 5
with ThreadPoolExecutor(max_workers=5) as exe:
    results = list(exe.map(fetch, urls))

# Lock — protect shared mutable state
counter = 0
lock = threading.Lock()

def increment():
    global counter
    with lock:             # atomic read-modify-write
        counter += 1

threads = [threading.Thread(target=increment) for _ in range(100)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)    # reliably 100`,
      },
      {
        title: 'multiprocessing — CPU Bound',
        explanation: 'Each process has its own memory and GIL. Communication via Queue, Pipe, or shared memory.',
        code: `from concurrent.futures import ProcessPoolExecutor
import multiprocessing

# ProcessPoolExecutor — easiest API
def cpu_heavy(n):
    return sum(i*i for i in range(n))

with ProcessPoolExecutor(max_workers=4) as exe:
    results = list(exe.map(cpu_heavy, [10**6]*8))

# Map vs submit
with ProcessPoolExecutor() as exe:
    # map — blocking, returns results in order
    r1 = list(exe.map(cpu_heavy, range(8)))

    # submit — non-blocking, returns Future
    futures = [exe.submit(cpu_heavy, n) for n in range(8)]
    r2 = [f.result() for f in futures]   # blocks here

# Shared memory (Python 3.8+)
from multiprocessing import shared_memory
shm = shared_memory.SharedMemory(create=True, size=1024)
# ... multiple processes can access shm.buf
shm.close()
shm.unlink()`,
      },
      {
        title: 'asyncio — Cooperative Concurrency',
        explanation: 'asyncio is single-threaded. async def functions return coroutines. await suspends the current coroutine and lets the event loop run other tasks.',
        code: `import asyncio
import aiohttp   # pip install aiohttp

# async def creates a coroutine function
async def fetch(session, url):
    async with session.get(url) as resp:
        return await resp.text()

async def main():
    urls = [
        "https://httpbin.org/delay/1",
        "https://httpbin.org/delay/1",
        "https://httpbin.org/delay/1",
    ]
    async with aiohttp.ClientSession() as session:
        # asyncio.gather — run coroutines concurrently
        results = await asyncio.gather(
            *[fetch(session, url) for url in urls]
        )
    return results

# ~1 second total, not 3 seconds
asyncio.run(main())

# asyncio.create_task — fire and forget
async def workflow():
    task1 = asyncio.create_task(step_one())
    task2 = asyncio.create_task(step_two())
    # Both run concurrently; await to get results
    r1 = await task1
    r2 = await task2

# Timeout
async def with_timeout():
    try:
        result = await asyncio.wait_for(slow_op(), timeout=5.0)
    except asyncio.TimeoutError:
        print("Timed out!")`,
      },
    ],
    gotchas: [
      'GIL makes threading useless for CPU-bound Python code — use multiprocessing instead',
      'asyncio is single-threaded — one slow sync call blocks the ENTIRE event loop; use run_in_executor for sync code',
      'Don\'t mix asyncio.run() with event loops that are already running (e.g., in Jupyter — use await directly)',
      'multiprocessing data is serialized with pickle — lambdas and some closures can\'t be pickled',
    ],
    practiceHints: [
      'Fetch 10 URLs concurrently with asyncio.gather() and measure vs sequential',
      'Use ProcessPoolExecutor to parallelize a CPU-heavy function across a list of inputs',
      'Write an async producer/consumer using asyncio.Queue',
    ],
  },

  // ─── DESCRIPTORS & METACLASSES ────────────────────────────────────────────
  'descriptors': {
    id: 'descriptors',
    title: 'Descriptors',
    category: 'descriptors-metaclasses',
    level: 'Expert',
    description: 'A descriptor is any object that defines __get__, __set__, or __delete__. They are the mechanism behind @property, classmethod, staticmethod, and every ORM field. Understanding them lets you build your own reusable attribute behaviour.',
    keyInsight: 'Data descriptors (define __set__ or __delete__) take priority over instance __dict__. Non-data descriptors (only __get__) can be shadowed by instance attributes. This is why @property.setter works but you can override a cached_property.',
    sections: [
      {
        title: 'The Descriptor Protocol',
        explanation: '__get__(self, obj, objtype) is called when you read the attribute. obj is None when accessed on the class directly.',
        code: `class Validator:
    """Non-negative number descriptor."""

    def __set_name__(self, owner, name):
        # Called at class creation time — owner is the class, name is attr name
        self.name = name
        self.storage = f"_{name}"

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self          # accessed on class → return descriptor itself
        return getattr(obj, self.storage, 0)

    def __set__(self, obj, value):
        if not isinstance(value, (int, float)):
            raise TypeError(f"{self.name} must be a number")
        if value < 0:
            raise ValueError(f"{self.name} must be non-negative")
        setattr(obj, self.storage, value)

    def __delete__(self, obj):
        delattr(obj, self.storage)

class BankAccount:
    balance = Validator()    # descriptor instance as class attribute
    overdraft = Validator()

    def __init__(self, balance):
        self.balance = balance   # triggers Validator.__set__

acc = BankAccount(100)
acc.balance        # 100 — triggers Validator.__get__
acc.balance = -5   # raises ValueError`,
      },
      {
        title: 'How @property is a Descriptor',
        explanation: 'property is a built-in data descriptor. You can recreate it from scratch to understand the mechanism.',
        code: `# property recreated from scratch
class myproperty:
    def __init__(self, fget=None, fset=None, fdel=None, doc=None):
        self.fget = fget
        self.fset = fset
        self.fdel = fdel
        self.__doc__ = doc or (fget.__doc__ if fget else None)

    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        if self.fget is None:
            raise AttributeError(f"unreadable attribute {self.name!r}")
        return self.fget(obj)

    def __set__(self, obj, value):
        if self.fset is None:
            raise AttributeError(f"can't set attribute {self.name!r}")
        self.fset(obj, value)

    def setter(self, fset):
        return type(self)(self.fget, fset, self.fdel, self.__doc__)

class Circle:
    def __init__(self, radius):
        self._radius = radius

    @myproperty
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0: raise ValueError
        self._radius = value`,
      },
      {
        title: 'Lazy / Cached Descriptor',
        explanation: 'A non-data descriptor that computes once then stores in instance __dict__ — shadowing itself on subsequent reads.',
        code: `class lazy_property:
    """Compute once, store on instance. O(1) after first access."""

    def __init__(self, fn):
        self.fn = fn
        self.name = fn.__name__
        self.__doc__ = fn.__doc__

    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        value = self.fn(obj)
        # Store directly in instance __dict__ — shadows this descriptor
        obj.__dict__[self.name] = value
        return value

class DataProcessor:
    def __init__(self, data):
        self.data = data

    @lazy_property
    def sorted_unique(self):
        print("computing...")     # only prints once
        return sorted(set(self.data))

p = DataProcessor([3, 1, 4, 1, 5, 9, 2, 6])
p.sorted_unique   # computing... → [1, 2, 3, 4, 5, 6, 9]
p.sorted_unique   # cached — no computation
# functtools.cached_property is exactly this pattern`,
      },
    ],
    gotchas: [
      'Data descriptors (with __set__) override instance __dict__ — you can\'t shadow them with self.attr = value',
      '__set_name__ is called once at class creation time, NOT per instance — don\'t store instance state on the descriptor',
      'Descriptors only work as class attributes — if you put them in __init__, they\'re just normal instance objects',
      'Non-data descriptors can be shadowed — data descriptors cannot (this is why @property with only getter prevents setting)',
    ],
    practiceHints: [
      'Write a TypeChecked descriptor that enforces a type on assignment',
      'Build a Unit descriptor that stores values in a canonical unit but exposes them in any unit (km/miles)',
      'Implement @lazy_property then compare it to functools.cached_property in the stdlib',
    ],
  },

  'metaclasses': {
    id: 'metaclasses',
    title: 'Metaclasses',
    category: 'descriptors-metaclasses',
    level: 'Expert',
    description: 'A metaclass is the class of a class. type is the default metaclass — it creates all classes. By subclassing type you intercept class creation: you can validate, transform, or register classes automatically at definition time.',
    keyInsight: 'Metaclasses run at import time, not at instantiation. __init_subclass__ is the modern, simpler alternative for most use cases — reach for a full metaclass only when you need to intercept __new__ or control the class namespace itself.',
    sections: [
      {
        title: 'type: The Root Metaclass',
        explanation: 'type(name, bases, namespace) dynamically creates a class. Every class is an instance of type (or a subclass).',
        code: `# Every class is created by type under the hood
class Dog:
    def bark(self): return "Woof"

# Equivalent dynamic creation
Dog = type('Dog', (), {'bark': lambda self: 'Woof'})

type(Dog)          # <class 'type'>
type(42)           # <class 'int'>
type(int)          # <class 'type'>  — int's metaclass is type

# type's three-argument form: type(name, bases, dict)
Animal = type('Animal', (), {
    'sound': 'generic',
    'speak': lambda self: f"I say {self.sound}",
})

Cat = type('Cat', (Animal,), {'sound': 'Meow'})
Cat().speak()   # "I say Meow"`,
      },
      {
        title: 'Custom Metaclass',
        explanation: 'Subclass type and override __new__ (before class object created) or __init__ (after). Use for ORMs, plugin registries, interface enforcement.',
        code: `class RegistryMeta(type):
    """Metaclass that auto-registers every subclass."""

    def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        # Don't register the base class itself
        if not hasattr(cls, '_registry'):
            cls._registry = {}
        elif name != 'Plugin':   # skip abstract base
            cls._registry[name] = cls

class Plugin(metaclass=RegistryMeta):
    """All subclasses are automatically registered."""
    def run(self): raise NotImplementedError

class CSVPlugin(Plugin):
    def run(self): return "processing CSV"

class JSONPlugin(Plugin):
    def run(self): return "processing JSON"

Plugin._registry
# {'CSVPlugin': <class CSVPlugin>, 'JSONPlugin': <class JSONPlugin>}

# Dynamically dispatch by name
def run_plugin(name, *args):
    cls = Plugin._registry[name]
    return cls().run()`,
      },
      {
        title: '__init_subclass__: The Modern Alternative',
        explanation: 'For most use cases, __init_subclass__ is simpler than a full metaclass. It\'s a classmethod called on the base whenever a subclass is created.',
        code: `class Validated:
    """Require subclasses to define 'fields' class variable."""

    def __init_subclass__(cls, strict=False, **kwargs):
        super().__init_subclass__(**kwargs)
        if not hasattr(cls, 'fields'):
            raise TypeError(f"{cls.__name__} must define 'fields'")
        if strict:
            # Freeze the class — no new attributes at runtime
            cls.__setattr__ = lambda self, k, v: (
                (_ for _ in ()).throw(AttributeError(f"strict mode: {k}"))
                if k not in cls.fields else object.__setattr__(self, k, v)
            )
        print(f"Registered: {cls.__name__} with fields={cls.fields}")

class User(Validated, strict=False):
    fields = ['name', 'email']

class Product(Validated):
    fields = ['sku', 'price', 'stock']

# class BadModel(Validated): pass  → TypeError at class definition!

# class decorators — another modern alternative to metaclasses
import dataclasses

@dataclasses.dataclass    # class decorator, not metaclass
class Point:
    x: float
    y: float`,
      },
    ],
    gotchas: [
      'Metaclass conflicts: if two bases have different metaclasses, Python raises TypeError — you must create a combined metaclass',
      '__init_subclass__ is called for ALL subclasses, including indirect ones — guard with hasattr checks',
      'Metaclass __new__ receives the class namespace as an ordinary dict — order is preserved (Python 3.7+)',
      'Avoid metaclasses when a class decorator or __init_subclass__ achieves the same result — simpler to understand',
    ],
    practiceHints: [
      'Build a Singleton metaclass that ensures only one instance of any subclass exists',
      'Use __init_subclass__ to enforce that every subclass defines a VERSION class variable',
      'Implement an ORM-style Field descriptor + Model metaclass that collects field definitions',
    ],
  },

  // ─── PERFORMANCE & INTERNALS ──────────────────────────────────────────────
  'slots-memory': {
    id: 'slots-memory',
    title: '__slots__ & Memory Optimization',
    category: 'performance-internals',
    level: 'Expert',
    description: 'By default every Python instance carries a __dict__ — a hash map that lets you set arbitrary attributes. __slots__ replaces it with a fixed C-level array, cutting per-object memory 3–10× and speeding up attribute access.',
    keyInsight: '__slots__ is most valuable when you create millions of instances (e.g., nodes in a graph, records in a data pipeline). It also prevents typo bugs (no accidental new attributes). The trade-off: no __dict__, no weak references by default, inheritance is tricky.',
    sections: [
      {
        title: '__slots__ Basics',
        explanation: 'Declare __slots__ as a tuple/list of allowed attribute names. Python creates per-class descriptors for each slot instead of a per-instance dict.',
        code: `import sys

class WithDict:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class WithSlots:
    __slots__ = ('x', 'y')   # no __dict__ allocated
    def __init__(self, x, y):
        self.x = x
        self.y = y

d = WithDict(1, 2)
s = WithSlots(1, 2)

sys.getsizeof(d)   # 48 bytes (just the object header)
sys.getsizeof(s)   # 48 bytes (same header)
# But the dict itself adds ~200 bytes:
sys.getsizeof(d.__dict__)   # ~200 bytes
# s has no __dict__ at all

# Memory comparison at scale
import tracemalloc
tracemalloc.start()
nodes_dict  = [WithDict(i, i) for i in range(100_000)]
snap = tracemalloc.take_snapshot()
# WithDict: ~28 MB  vs  WithSlots: ~8 MB

# Can't add new attributes with __slots__
s.z = 3   # AttributeError: z not in __slots__`,
      },
      {
        title: 'weakref, __dict__ in slots, Inheritance',
        explanation: 'To allow weak references, add "__weakref__" to __slots__. To allow arbitrary extra attributes on some instances, add "__dict__".',
        code: `import weakref

class Node:
    __slots__ = ('val', 'next', '__weakref__')
    def __init__(self, val):
        self.val = val
        self.next = None

n = Node(42)
ref = weakref.ref(n)   # works because __weakref__ is in slots
ref()                  # Node

# Adding __dict__ slot — best of both worlds
class Flexible:
    __slots__ = ('x', 'y', '__dict__')  # fixed slots + overflow dict
    def __init__(self, x, y):
        self.x = x
        self.y = y

f = Flexible(1, 2)
f.extra = "allowed"    # stored in __dict__
f.x                    # stored in slot (fast)

# Inheritance — parent slots NOT inherited automatically
class Base:
    __slots__ = ('a',)

class Child(Base):
    __slots__ = ('b',)   # must redeclare; don't repeat 'a'

c = Child()
c.a = 1    # works — from Base slot
c.b = 2    # works — from Child slot`,
      },
      {
        title: 'Profiling: Finding the Real Bottleneck',
        explanation: 'Never optimize without measuring. cProfile finds hot functions, tracemalloc finds memory leaks, line_profiler zooms in on hot lines.',
        code: `import cProfile
import pstats

# cProfile — function-level time profiling
def slow():
    return sum(i*i for i in range(10**6))

pr = cProfile.Profile()
pr.enable()
slow()
pr.disable()

stats = pstats.Stats(pr)
stats.sort_stats('cumulative')
stats.print_stats(10)   # top 10 functions by cumulative time

# tracemalloc — memory allocation tracking
import tracemalloc

tracemalloc.start()
data = [dict(x=i) for i in range(100_000)]
snapshot = tracemalloc.take_snapshot()
top = snapshot.statistics('lineno')
for stat in top[:5]:
    print(stat)

# sys.getsizeof — shallow size (doesn't include referenced objects)
import sys
lst = [0] * 1000
sys.getsizeof(lst)          # 8056 — just the list shell + pointers
# for deep size, use objgraph or recursive measure

# timeit — accurate micro-benchmarking
import timeit
timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)`,
      },
    ],
    gotchas: [
      '__slots__ in a child class does NOT remove __dict__ if the parent didn\'t use __slots__ — you must use it all the way up the chain',
      'sys.getsizeof() is shallow — it does NOT count objects referenced inside the container',
      'cProfile adds ~10–50% overhead — use it for relative comparisons, not absolute timing',
      'tracemalloc traces allocation sites at snapshot time — take snapshots before and after to see the diff',
    ],
    practiceHints: [
      'Benchmark WithDict vs WithSlots Point class creating 1M instances — measure with tracemalloc',
      'Profile a slow function with cProfile and identify the top 3 hotspots',
      'Use timeit to compare "".join(list) vs += string concatenation for 1000 iterations',
    ],
  },

  'advanced-async': {
    id: 'advanced-async',
    title: 'Advanced Async & Internals',
    category: 'performance-internals',
    level: 'Expert',
    description: 'Beyond basic asyncio: async generators, async context managers, TaskGroups (Python 3.11+), and understanding the event loop internals. Plus ctypes for calling C code without writing an extension.',
    keyInsight: 'TaskGroup (Python 3.11+) is structured concurrency — all tasks in the group are cancelled if any one fails, and the group doesn\'t exit until all tasks finish. This eliminates the "fire and forget a task and lose its exception" footgun of bare asyncio.create_task.',
    sections: [
      {
        title: 'Async Generators & Context Managers',
        explanation: 'async def + yield = async generator. async def + __aenter__/__aexit__ = async context manager.',
        code: `import asyncio

# Async generator — yields values asynchronously
async def ticker(delay, count):
    for i in range(count):
        await asyncio.sleep(delay)
        yield i

async def main():
    async for tick in ticker(0.1, 5):
        print(f"tick {tick}")

# Async context manager via class
class AsyncDB:
    async def __aenter__(self):
        self.conn = await connect()
        return self.conn

    async def __aexit__(self, *exc_info):
        await self.conn.close()
        return False   # don't suppress exceptions

async def query():
    async with AsyncDB() as conn:
        return await conn.fetch("SELECT 1")

# Async context manager via contextlib
from contextlib import asynccontextmanager

@asynccontextmanager
async def managed_session():
    session = await create_session()
    try:
        yield session
    finally:
        await session.close()`,
      },
      {
        title: 'TaskGroup — Structured Concurrency (Python 3.11+)',
        explanation: 'TaskGroup ensures all child tasks are awaited and their exceptions are propagated — no "lost" exceptions from fire-and-forget tasks.',
        code: `import asyncio

# OLD way — easy to lose exceptions
async def old_style():
    t1 = asyncio.create_task(fetch("url1"))
    t2 = asyncio.create_task(fetch("url2"))
    results = await asyncio.gather(t1, t2)
    # If t1 raises, t2 is still running in the background!

# NEW way — TaskGroup (Python 3.11+)
async def new_style():
    results = []
    async with asyncio.TaskGroup() as tg:
        t1 = tg.create_task(fetch("url1"))
        t2 = tg.create_task(fetch("url2"))
    # Both tasks are done here — exceptions propagated
    results = [t1.result(), t2.result()]

# ExceptionGroup — catches multiple exceptions at once (Python 3.11+)
async def handle_errors():
    try:
        async with asyncio.TaskGroup() as tg:
            tg.create_task(might_fail_a())
            tg.create_task(might_fail_b())
    except* ValueError as eg:
        print(f"Value errors: {eg.exceptions}")
    except* TypeError as eg:
        print(f"Type errors: {eg.exceptions}")`,
      },
      {
        title: 'ctypes — Call C Without Writing an Extension',
        explanation: 'ctypes lets you call functions in shared C libraries (.so/.dll) directly from Python. No compilation needed.',
        code: `import ctypes
import ctypes.util

# Load the standard C library
libc = ctypes.CDLL(ctypes.util.find_library('c'))

# Call strlen
libc.strlen.argtypes = [ctypes.c_char_p]
libc.strlen.restype  = ctypes.c_size_t
libc.strlen(b"hello")   # 5

# Call qsort
arr = (ctypes.c_int * 5)(5, 3, 1, 4, 2)
CMPFUNC = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.c_void_p, ctypes.c_void_p)
def cmp(a, b):
    return ctypes.cast(a, ctypes.POINTER(ctypes.c_int))[0] - \\
           ctypes.cast(b, ctypes.POINTER(ctypes.c_int))[0]
libc.qsort(arr, 5, ctypes.sizeof(ctypes.c_int), CMPFUNC(cmp))
list(arr)   # [1, 2, 3, 4, 5]

# Load a custom .so (e.g. compiled from mylib.c)
# mylib = ctypes.CDLL("./mylib.so")
# mylib.add.argtypes = [ctypes.c_int, ctypes.c_int]
# mylib.add.restype = ctypes.c_int
# mylib.add(3, 4)  → 7`,
      },
    ],
    gotchas: [
      'TaskGroup requires Python 3.11+ — use asyncio.gather(return_exceptions=True) + manual checking for older versions',
      'async generators are not closed automatically if not fully consumed — use aclose() or async with aclosing(gen)',
      'ctypes bypasses Python\'s type system entirely — wrong argtypes/restype causes segfaults, not exceptions',
      'ExceptionGroup (except*) requires Python 3.11+ — catching it in older Python raises SyntaxError',
    ],
    practiceHints: [
      'Write an async generator that streams chunks from a large file and processes them concurrently',
      'Refactor a gather() call to use TaskGroup and verify exceptions are propagated correctly',
      'Use ctypes to call the C math library\'s sin/cos and benchmark against Python\'s math.sin',
    ],
  },
};

export const pythonCategoryTopics = {
  'foundations':                ['variables-types', 'control-flow'],
  'collections':                ['lists-dicts-sets', 'comprehensions'],
  'functions':                  ['functions-scope'],
  'oop':                        ['oop-classes'],
  'error-handling':             ['error-handling'],
  'iterators-generators':       ['iterators-generators'],
  'decorators':                 ['decorators'],
  'standard-library':           ['standard-library'],
  'type-hints':                 ['type-hints'],
  'concurrency':                ['concurrency'],
  'descriptors-metaclasses':    ['descriptors', 'metaclasses'],
  'performance-internals':      ['slots-memory', 'advanced-async'],
};
