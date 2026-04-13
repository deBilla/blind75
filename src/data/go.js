export const goCategories = [
  {
    id: 'go-foundations',
    name: 'Foundations',
    color: '#00add8',
    bg: '#0a2233',
    icon: 'var',
    level: '1 / 10',
    tagline: 'Variables, types, zero values, constants',
    concept: 'Go is statically typed with inferred types (:=). Every variable has a zero value — no null pointer surprises. The compiler rejects unused variables and imports, enforcing clean code by default.',
  },
  {
    id: 'go-control-flow',
    name: 'Control Flow & defer',
    color: '#00add8',
    bg: '#0a2233',
    icon: 'for{}',
    level: '1 / 10',
    tagline: 'for is the only loop, defer, panic/recover',
    concept: 'Go has one loop construct (for) that covers while and foreach. defer queues cleanup that runs when the function returns — LIFO order. panic/recover is the exception mechanism, but idiomatic Go uses error values instead.',
  },
  {
    id: 'go-data-structures',
    name: 'Slices, Maps & Structs',
    color: '#5dc9e2',
    bg: '#0d2233',
    icon: '[]T',
    level: '2 / 10',
    tagline: 'Slice internals, maps, struct embedding',
    concept: 'Slices are a view into an array (pointer + len + cap) — understanding this prevents subtle bugs with append and shared backing arrays. Maps are hash tables with zero value nil. Structs are Go\'s primary data-aggregation tool; embedding provides composition without inheritance.',
  },
  {
    id: 'go-interfaces-errors',
    name: 'Interfaces & Errors',
    color: '#f97316',
    bg: '#2a1200',
    icon: 'err',
    level: '4 / 10',
    tagline: 'Implicit interfaces, errors.Is/As, wrapping',
    concept: 'Go interfaces are satisfied implicitly — no "implements" keyword. The empty interface (any/interface{}) accepts everything. Errors are values: check them with if err != nil. errors.Is/As traverse wrapped error chains. Custom error types carry rich context.',
  },
  {
    id: 'go-concurrency',
    name: 'Goroutines & Channels',
    color: '#a855f7',
    bg: '#1e0f33',
    icon: 'go ch',
    level: '5 / 10',
    tagline: 'CSP model, select, sync primitives',
    concept: 'Goroutines are cheap (~2KB stack, multiplexed on OS threads). Channels implement CSP — "communicate by sharing memory, don\'t share memory by communicating". select handles multiple channels simultaneously. sync.WaitGroup, Mutex, and Once handle non-channel coordination.',
  },
  {
    id: 'go-advanced-types',
    name: 'Generics & Embedding',
    color: '#22c55e',
    bg: '#0a2210',
    icon: '[T]',
    level: '7 / 10',
    tagline: 'Type parameters, constraints, composition',
    concept: 'Go generics (1.18+) use type parameters with constraints. The comparable constraint allows == and map keys. Embedding promotes methods and fields without inheritance — prefer composition over classical OOP. Anonymous fields let you build mixins cleanly.',
  },
  {
    id: 'go-tooling',
    name: 'Testing & Modules',
    color: '#eab308',
    bg: '#1a1500',
    icon: 'test',
    level: '7 / 10',
    tagline: 'Table-driven tests, benchmarks, go mod',
    concept: 'The testing package is built-in — no external framework needed for basics. Table-driven tests are idiomatic Go: a slice of test cases drives a single t.Run loop. go mod manages dependencies. go build, go vet, and go staticcheck catch bugs before runtime.',
  },
  {
    id: 'go-performance',
    name: 'Memory & Performance',
    color: '#ef4444',
    bg: '#2a0a0a',
    icon: 'pprof',
    level: '9 / 10',
    tagline: 'Escape analysis, pprof, GC tuning, sync.Pool',
    concept: 'Go\'s GC is concurrent and low-latency, but you still pay for allocations. Escape analysis (go tool compile -m) shows what moves to the heap. pprof gives CPU and memory flame graphs. sync.Pool reuses allocations across goroutines. GOGC and GOMEMLIMIT tune the GC.',
  },
  {
    id: 'go-expert',
    name: 'Expert Patterns',
    color: '#c084fc',
    bg: '#1a0a2e',
    icon: ':::',
    level: '10 / 10',
    tagline: 'Functional options, unsafe, reflect, cgo',
    concept: 'At the top level: functional options pattern for flexible APIs, middleware chains for HTTP and gRPC, reflect for generic code that must inspect types at runtime, unsafe for zero-copy tricks, and cgo to call C libraries. Know when NOT to use each of these.',
  },
];

export const goTopics = {
  // ─── FOUNDATIONS ──────────────────────────────────────────────────────────
  'go-variables-types': {
    id: 'go-variables-types',
    title: 'Variables & Types',
    category: 'go-foundations',
    level: 'Beginner',
    description: 'Go is statically typed with type inference. Every variable has a zero value (0, "", false, nil). Short declaration := works inside functions; var works everywhere including package level.',
    keyInsight: 'Zero values eliminate uninitialised variable bugs. An int is always 0, a string is always "", a pointer is always nil. You can rely on this — no undefined behaviour from uninitialised memory.',
    sections: [
      {
        title: 'Variable Declaration',
        explanation: 'Two styles: var (explicit, package level OK) and := (inferred, function level only). Both produce identical compiled code.',
        code: `package main

import "fmt"

// Package-level: must use var
var globalCount int = 0
var (
    host = "localhost"   // type inferred as string
    port = 8080          // type inferred as int
)

func main() {
    // Short declaration — most common inside functions
    name := "Alice"
    age  := 30

    // Explicit type — use when zero value differs from intent
    var score float64   // = 0.0 (zero value)
    var found bool      // = false (zero value)
    var ptr *int        // = nil (zero value)

    fmt.Println(name, age, score, found, ptr)

    // Multiple assignment
    x, y := 10, 20
    x, y = y, x         // swap without temp
    fmt.Println(x, y)   // 20 10

    // Blank identifier — discard unwanted values
    result, _ := divide(10, 3)
    fmt.Println(result)
}

func divide(a, b int) (int, int) {
    return a / b, a % b
}`,
      },
      {
        title: 'Basic Types & Zero Values',
        explanation: 'Go\'s type system is strict — no implicit conversions between numeric types. Use explicit casts. The zero value of every type is well-defined.',
        code: `// Integer types
var i8  int8   = 127        // -128 to 127
var i   int    = 42         // platform size (32 or 64 bit)
var u   uint   = 42         // unsigned
var b   byte   = 255        // alias for uint8
var r   rune   = 'A'        // alias for int32 (Unicode code point)

// Float types
var f32 float32 = 3.14
var f64 float64 = 3.14159265358979  // prefer float64

// String — immutable UTF-8 bytes
s := "Hello, 世界"
len(s)           // 13 — byte count, NOT character count
len([]rune(s))   // 9  — Unicode code point count

// Iterate over runes (not bytes)
for i, ch := range s {
    fmt.Printf("index %d: %c\\n", i, ch)
}

// Explicit conversion — required, no implicit coercion
var x int = 42
var y float64 = float64(x)  // must convert
var z int = int(y)           // truncates

// Constants — evaluated at compile time
const Pi = 3.14159
const (
    KB = 1024
    MB = 1024 * KB
    GB = 1024 * MB
)

// iota — auto-incrementing constant
type Direction int
const (
    North Direction = iota  // 0
    East                    // 1
    South                   // 2
    West                    // 3
)`,
      },
      {
        title: 'Pointers',
        explanation: 'Go has pointers but no pointer arithmetic. & takes the address, * dereferences. Pointers let functions mutate caller\'s data.',
        code: `func main() {
    x := 42
    p := &x       // p is *int — pointer to x
    fmt.Println(*p)    // 42 — dereference
    *p = 100
    fmt.Println(x)     // 100 — x was modified

    // new() allocates and returns a pointer
    n := new(int)  // *int pointing to 0
    *n = 7

    // Pointer to struct field — auto-dereference
    type Point struct{ X, Y int }
    pt := &Point{1, 2}
    pt.X = 10      // (*pt).X = 10 — Go auto-dereferences
}

// Pointer vs value receiver semantics
func doubleValue(n int) {
    n *= 2         // copy — caller unchanged
}
func doublePointer(n *int) {
    *n *= 2        // modifies caller's variable
}`,
      },
    ],
    gotchas: [
      'int size is platform-dependent (32 or 64 bit) — use int64/int32 explicitly for serialisation',
      'String length (len) counts bytes, not characters — use []rune conversion for Unicode-safe length',
      'Short := only works inside functions and declares at least one NEW variable on the left side',
      'Constants are untyped until used — const x = 1 can be assigned to any integer type',
    ],
    practiceHints: [
      'Write a swap(a, b *int) function that mutates both arguments using pointers',
      'Iterate a string containing emoji and count the actual character count vs byte count',
      'Build a Direction type with iota and a String() method for each direction',
    ],
  },

  'go-control-flow': {
    id: 'go-control-flow',
    title: 'Control Flow & defer',
    category: 'go-control-flow',
    level: 'Beginner',
    description: 'Go has if, for (the only loop), switch, and defer. No while or do-while — for covers all cases. defer queues a function call to run when the enclosing function returns, in LIFO order.',
    keyInsight: 'defer arguments are evaluated immediately when the defer statement is reached, but the call is delayed until the function returns. This trips people up — capture by pointer or use a closure if you need the final value.',
    sections: [
      {
        title: 'if and switch',
        explanation: 'if can include a short initialiser. switch doesn\'t fall through by default (no break needed). Cases can have multiple values.',
        code: `// if with initialiser — x is scoped to the if/else block
if x := compute(); x > 10 {
    fmt.Println("big:", x)
} else {
    fmt.Println("small:", x)
}

// switch — no fall-through by default
day := "Monday"
switch day {
case "Saturday", "Sunday":
    fmt.Println("weekend")
case "Monday":
    fmt.Println("back to work")
default:
    fmt.Println("weekday")
}

// switch with initialiser + no condition (like if-else chain)
switch x := score(); {
case x >= 90:
    fmt.Println("A")
case x >= 80:
    fmt.Println("B")
default:
    fmt.Println("C or below")
}

// Type switch — inspect interface values
func describe(i any) {
    switch v := i.(type) {
    case int:
        fmt.Printf("int: %d\\n", v)
    case string:
        fmt.Printf("string: %q\\n", v)
    default:
        fmt.Printf("unknown: %T\\n", v)
    }
}`,
      },
      {
        title: 'for — The Only Loop',
        explanation: 'for covers C-style, while-style, and range-based iteration. range over a map is random order every run.',
        code: `// C-style
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// while-style
n := 1
for n < 100 {
    n *= 2
}

// infinite loop
for {
    if done() { break }
    doWork()
}

// range over slice — index, value
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Printf("[%d]=%d\\n", i, v)
}
for _, v := range nums { }  // ignore index
for i := range nums   { }  // ignore value

// range over map — order NOT guaranteed
m := map[string]int{"a": 1, "b": 2}
for k, v := range m {
    fmt.Println(k, v)
}

// range over string — yields runes (not bytes!)
for i, ch := range "hello" {
    fmt.Printf("%d: %c\\n", i, ch)
}

// range over channel — blocks until channel closed
for msg := range ch {
    process(msg)
}`,
      },
      {
        title: 'defer, panic, recover',
        explanation: 'defer is the idiomatic way to release resources (close files, unlock mutexes). Multiple defers run LIFO. panic unwinds the stack; recover catches it inside a deferred function.',
        code: `// defer — resource cleanup
func readFile(path string) (string, error) {
    f, err := os.Open(path)
    if err != nil {
        return "", err
    }
    defer f.Close()    // runs when readFile returns, even on error

    data, err := io.ReadAll(f)
    return string(data), err
}

// Multiple defers — LIFO (last in, first out)
func lifo() {
    defer fmt.Println("third")   // runs last
    defer fmt.Println("second")
    defer fmt.Println("first")   // runs first (LIFO)
}

// defer captures loop var by VALUE at defer time
for i := 0; i < 3; i++ {
    defer fmt.Println(i)   // prints 2, 1, 0
}

// panic + recover — use only for truly unexpected errors
func safeDiv(a, b int) (result int, err error) {
    defer func() {
        if r := recover(); r != nil {
            err = fmt.Errorf("recovered: %v", r)
        }
    }()
    return a / b, nil   // panics if b==0
}

safeDiv(10, 0)   // returns (0, error("recovered: integer divide by zero"))`,
      },
    ],
    gotchas: [
      'defer arguments are evaluated NOW, not when the function returns — use a closure to capture final values',
      'range over a map is deliberately randomised every run — never rely on map iteration order',
      'panic should not be used for normal error handling — only for truly unrecoverable programmer errors',
      'break inside a for inside a select exits the for, not the select — use a label: break outerLoop',
    ],
    practiceHints: [
      'Write a function that opens two files and uses defer to close both, even if the second open fails',
      'Implement a retry loop using for with a max attempts counter',
      'Create a safeCall(f func()) that recovers from any panic and returns it as an error',
    ],
  },

  // ─── DATA STRUCTURES ──────────────────────────────────────────────────────
  'go-slices-maps': {
    id: 'go-slices-maps',
    title: 'Slices & Maps',
    category: 'go-data-structures',
    level: 'Beginner',
    description: 'Arrays are fixed-size value types. Slices are a three-word header (pointer, length, capacity) over an array — the most common collection in Go. Maps are hash tables; their zero value is nil (not empty).',
    keyInsight: 'append may or may not create a new backing array (when cap is exceeded it doubles). Two slices can share the same backing array — modifying one can silently modify the other. Always use copy() or slice literals when you need independence.',
    sections: [
      {
        title: 'Slice Internals',
        explanation: 'A slice is (ptr *T, len int, cap int). append returns a new slice header — the original is unchanged if reallocation occurs.',
        code: `// Array — fixed size, value type (rarely used directly)
arr := [3]int{1, 2, 3}
arr2 := arr     // COPY — independent
arr2[0] = 99
fmt.Println(arr[0])   // 1 — unchanged

// Slice from literal
s := []int{1, 2, 3}

// make(type, len, cap)
s2 := make([]int, 3, 10)   // len=3, cap=10

// Slice of slice — shares backing array!
a := []int{0, 1, 2, 3, 4}
b := a[1:3]          // [1 2], len=2, cap=4 (from index 1 to end)
b[0] = 99
fmt.Println(a)       // [0 99 2 3 4] — a was modified!

// Safe copy
c := make([]int, len(b))
copy(c, b)           // independent copy
c[0] = 0
fmt.Println(b)       // [99 2] — b unchanged

// append — may reallocate
s = append(s, 4, 5)
s = append(s, []int{6, 7, 8}...)   // spread slice

// Three-index slice — control cap of result
full := []int{0, 1, 2, 3, 4, 5}
limited := full[1:3:4]   // ptr@1, len=2, cap=3 (not 5)
// Now append to limited won't clobber full[3]`,
      },
      {
        title: 'Maps',
        explanation: 'Maps are reference types. Zero value is nil — reading nil map is safe (returns zero value), but writing panics. Always initialise with make or a literal.',
        code: `// Map literal
ages := map[string]int{
    "Alice": 30,
    "Bob":   25,
}

// make
scores := make(map[string]int)

// Read — returns zero value for missing key
ages["Alice"]       // 30
ages["Missing"]     // 0 — no panic

// Existence check — two-value form
age, ok := ages["Alice"]
if !ok {
    fmt.Println("not found")
}

// Write
ages["Carol"] = 35
delete(ages, "Bob")

// Nil map — reads are safe, writes panic
var m map[string]int
m["key"] = 1        // panic: assignment to entry in nil map
_ = m["key"]        // 0 — safe read

// Iteration — random order every time
for name, age := range ages {
    fmt.Printf("%s: %d\\n", name, age)
}

// Map as set
seen := make(map[string]bool)
words := []string{"a", "b", "a", "c"}
for _, w := range words {
    seen[w] = true
}
fmt.Println(len(seen))   // 3`,
      },
    ],
    gotchas: [
      'append does NOT modify the original slice header — you must assign: s = append(s, x)',
      'Slices of a slice share the backing array — mutations propagate until one of them reallocates',
      'Writing to a nil map panics at runtime — always initialise with make or a literal',
      'len(map) is O(1) but iterating for deletion mid-loop is OK in Go (unlike some languages)',
    ],
    practiceHints: [
      'Write a function that removes duplicates from a []string using a map as a set',
      'Implement a stack using a slice with Push and Pop methods on a custom type',
      'Build a word frequency counter: map[string]int from a []string of words',
    ],
  },

  'go-structs-methods': {
    id: 'go-structs-methods',
    title: 'Structs & Methods',
    category: 'go-data-structures',
    level: 'Intermediate',
    description: 'Structs are Go\'s primary data aggregation tool. Methods are functions with a receiver. Value receivers get a copy; pointer receivers get the original. Embedding promotes another type\'s methods and fields without inheritance.',
    keyInsight: 'Use a pointer receiver when: (1) the method mutates the receiver, (2) the struct is large (avoid copying), or (3) consistency — if any method needs a pointer, make them all pointer receivers. Value receivers are fine for small read-only structs.',
    sections: [
      {
        title: 'Structs & Methods',
        explanation: 'Struct fields are exported if they start with a capital letter. Methods are attached with a receiver between func and the name.',
        code: `type Rectangle struct {
    Width  float64   // exported
    Height float64   // exported
    label  string    // unexported — package-private
}

// Value receiver — works on a copy
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Pointer receiver — modifies the original
func (r *Rectangle) Scale(factor float64) {
    r.Width  *= factor
    r.Height *= factor
}

func (r *Rectangle) String() string {
    return fmt.Sprintf("Rectangle(%.1f x %.1f)", r.Width, r.Height)
}

func main() {
    r := Rectangle{Width: 5, Height: 3}
    fmt.Println(r.Area())       // 15

    r.Scale(2)                  // Go auto-takes address: (&r).Scale(2)
    fmt.Println(r.Width)        // 10

    // Struct literal — named fields (preferred)
    r2 := Rectangle{Width: 2, Height: 4}
    r3 := Rectangle{2, 4, "box"}   // positional — fragile, avoid

    _ = r2; _ = r3
}`,
      },
      {
        title: 'Embedding — Composition over Inheritance',
        explanation: 'Embedding promotes fields and methods. It\'s NOT inheritance — there\'s no is-a relationship. The embedded type is just an anonymous field.',
        code: `type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return a.Name + " makes a sound"
}

type Dog struct {
    Animal       // embedded — promotes Name field and Speak() method
    Breed string
}

func (d Dog) Speak() string {
    // Override promoted method
    return d.Name + " says Woof!"
}

func main() {
    d := Dog{
        Animal: Animal{Name: "Rex"},
        Breed:  "Labrador",
    }
    d.Name            // "Rex" — promoted field
    d.Animal.Name     // "Rex" — explicit access
    d.Speak()         // "Rex says Woof!" — Dog's method wins
    d.Animal.Speak()  // "Rex makes a sound" — explicit Animal method
}

// Multiple embedding
type Logger struct{ prefix string }
func (l Logger) Log(msg string) { fmt.Printf("[%s] %s\\n", l.prefix, msg) }

type Server struct {
    Logger           // promoted Log()
    Host   string
    Port   int
}

s := Server{Logger: Logger{"SERVER"}, Host: "localhost", Port: 8080}
s.Log("started")    // "[SERVER] started"`,
      },
    ],
    gotchas: [
      'Mixing value and pointer receivers on the same type is legal but confusing — pick one and be consistent',
      'A value in a map cannot be addressed — map values are not addressable, so you can\'t call pointer receiver methods on them directly',
      'Embedding is NOT inheritance — type assertion to the embedded type fails: Dog does not implement Animal',
      'Anonymous struct fields still require the type name in literals: Dog{Animal: Animal{...}}',
    ],
    practiceHints: [
      'Build a Stack[T] generic struct with Push, Pop, Peek, Len methods using pointer receivers',
      'Create a TimestampedRecord that embeds any struct and adds CreatedAt/UpdatedAt fields',
      'Implement a Logger struct and embed it in 3 different types — observe promoted methods',
    ],
  },

  // ─── INTERFACES & ERRORS ──────────────────────────────────────────────────
  'go-interfaces': {
    id: 'go-interfaces',
    title: 'Interfaces',
    category: 'go-interfaces-errors',
    level: 'Intermediate',
    description: 'Go interfaces are satisfied implicitly — no "implements" keyword. Any type with the right method set satisfies an interface. This makes Go interfaces powerful for decoupling and enables duck typing with static type checking.',
    keyInsight: 'An interface value has two components: (type, value). A nil interface is (nil, nil). A non-nil interface holding a nil pointer is NOT nil — it has a type component. This is the most common interface gotcha in Go.',
    sections: [
      {
        title: 'Defining & Satisfying Interfaces',
        explanation: 'An interface lists method signatures. Any type with all those methods automatically satisfies it.',
        code: `// Define an interface
type Shape interface {
    Area() float64
    Perimeter() float64
}

type Stringer interface {
    String() string
}

// Satisfy implicitly — no "implements" declaration
type Circle struct{ Radius float64 }

func (c Circle) Area() float64      { return 3.14159 * c.Radius * c.Radius }
func (c Circle) Perimeter() float64 { return 2 * 3.14159 * c.Radius }

type Square struct{ Side float64 }

func (s Square) Area() float64      { return s.Side * s.Side }
func (s Square) Perimeter() float64 { return 4 * s.Side }

// Use the interface — both Circle and Square satisfy Shape
func printShape(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\\n", s.Area(), s.Perimeter())
}

// Verify at compile time — zero-value assignment trick
var _ Shape = Circle{}  // compile error if Circle doesn't satisfy Shape
var _ Shape = Square{}

// Interface composition
type ReadWriter interface {
    io.Reader
    io.Writer
}`,
      },
      {
        title: 'Type Assertions & Type Switches',
        explanation: 'Type assertions extract the concrete value from an interface. The two-value form is safe (no panic). Type switches handle multiple types.',
        code: `// Type assertion — single value form panics if wrong type
var s Shape = Circle{Radius: 5}
c := s.(Circle)         // ok if s holds a Circle
c.Radius                // 5

// Safe form — never panics
c, ok := s.(Circle)
if !ok {
    fmt.Println("not a Circle")
}

// Type switch — inspect and dispatch
func describe(v any) string {
    switch x := v.(type) {
    case nil:
        return "nil"
    case int:
        return fmt.Sprintf("int(%d)", x)
    case string:
        return fmt.Sprintf("string(%q)", x)
    case []int:
        return fmt.Sprintf("[]int len=%d", len(x))
    case Shape:
        return fmt.Sprintf("shape area=%.2f", x.Area())
    default:
        return fmt.Sprintf("unknown(%T)", x)
    }
}

// The nil interface gotcha
var err error          // nil interface: (nil, nil)
var p *os.PathError    // nil pointer of concrete type

err = p               // interface: (*os.PathError, nil) — NOT nil!
fmt.Println(err == nil)   // false — has a type component!`,
      },
    ],
    gotchas: [
      'A non-nil interface holding a nil pointer IS NOT nil — always return a plain nil interface, not a typed nil',
      'Interface values are comparable (==) but panic if the underlying type is not comparable (e.g. slice)',
      'The any (empty interface{}) type loses type information — use generics instead when type matters',
      'Large interface signatures (>3 methods) are often a design smell — prefer small, composable interfaces',
    ],
    practiceHints: [
      'Write a sort.Interface implementation (Len, Less, Swap) for a custom type and sort it',
      'Implement io.Reader on a struct that reads from a string in chunks',
      'Create a function that accepts any Stringer and prints each element — test with multiple types',
    ],
  },

  'go-errors': {
    id: 'go-errors',
    title: 'Error Handling',
    category: 'go-interfaces-errors',
    level: 'Intermediate',
    description: 'Errors in Go are values that implement the error interface (Error() string). Functions return errors as the last return value. errors.Is checks the chain for identity; errors.As extracts a specific type from the chain.',
    keyInsight: 'Wrap errors with context using fmt.Errorf("doing X: %w", err) — %w preserves the original for errors.Is/As traversal. The caller decides what to do with an error; the callee adds context. Never swallow errors silently.',
    sections: [
      {
        title: 'The error Interface & Sentinel Errors',
        explanation: 'error is a built-in interface with one method. Sentinel errors are package-level variables compared with ==. errors.Is traverses the wrap chain.',
        code: `// error interface
type error interface {
    Error() string
}

// Sentinel errors — compare with errors.Is
var (
    ErrNotFound   = errors.New("not found")
    ErrPermission = errors.New("permission denied")
)

func findUser(id int) (*User, error) {
    if id <= 0 {
        return nil, ErrNotFound
    }
    // ...
}

// Checking errors
user, err := findUser(-1)
if errors.Is(err, ErrNotFound) {
    // handle not found
}

// Wrapping — adds context, preserves chain
func loadConfig(path string) (*Config, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("loadConfig: %w", err)   // %w wraps
    }
    // ...
}

// errors.Is traverses the full wrap chain
err := loadConfig("missing.toml")
errors.Is(err, os.ErrNotExist)   // true — found deep in chain`,
      },
      {
        title: 'Custom Error Types & errors.As',
        explanation: 'Custom error types carry structured data. errors.As extracts them from a wrapped chain.',
        code: `// Custom error with fields
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed on %q: %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 || age > 150 {
        return &ValidationError{Field: "age", Message: "out of range"}
    }
    return nil
}

// errors.As — extract the concrete type
func process(age int) {
    err := validateAge(age)
    var ve *ValidationError
    if errors.As(err, &ve) {
        fmt.Println("Field:", ve.Field)     // "age"
        fmt.Println("Msg:",   ve.Message)   // "out of range"
    }
}

// Idiomatic error handling pattern
func doSomething() error {
    if err := stepOne(); err != nil {
        return fmt.Errorf("stepOne: %w", err)
    }
    if err := stepTwo(); err != nil {
        return fmt.Errorf("stepTwo: %w", err)
    }
    return nil
}`,
      },
    ],
    gotchas: [
      'Return nil explicitly, not a typed nil pointer — typed nil satisfies error but is not == nil',
      'errors.Is uses == comparison by default — implement Is(target error) bool on your type for custom matching',
      'Don\'t use panic for ordinary errors — it skips deferred cleanup and crosses goroutine boundaries poorly',
      '%v wraps the message only; %w wraps for chain traversal — use %w when callers might need errors.Is/As',
    ],
    practiceHints: [
      'Write a chain: A calls B calls C, each wraps the error with context — unwrap and print the full chain',
      'Create a MultiError that holds several errors and implements errors.Is by checking each',
      'Write a retry(n int, f func() error) that retries on specific errors only',
    ],
  },

  // ─── CONCURRENCY ──────────────────────────────────────────────────────────
  'go-goroutines-channels': {
    id: 'go-goroutines-channels',
    title: 'Goroutines & Channels',
    category: 'go-concurrency',
    level: 'Intermediate',
    description: 'Goroutines are lightweight threads (~2KB initial stack) multiplexed by the Go runtime onto OS threads. Channels are typed conduits for communication — they synchronise goroutines without shared memory.',
    keyInsight: '"Don\'t communicate by sharing memory; share memory by communicating." Channels make data ownership explicit — only the goroutine currently holding the channel end is touching the data, so races are structurally impossible.',
    sections: [
      {
        title: 'Goroutines',
        explanation: 'go fn() starts a goroutine. The main goroutine exiting kills all others — use sync.WaitGroup or channels to wait.',
        code: `package main

import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d done\\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)   // launch goroutine
    }

    wg.Wait()   // block until all Done()
    fmt.Println("all workers finished")
}

// Goroutine closure capture gotcha
for i := 0; i < 3; i++ {
    i := i              // shadow — create new var per iteration
    go func() {
        fmt.Println(i)  // safe: captures the shadowed i
    }()
}

// Or pass as argument
for i := 0; i < 3; i++ {
    go func(n int) {
        fmt.Println(n)
    }(i)
}`,
      },
      {
        title: 'Channels',
        explanation: 'Unbuffered channels block sender until receiver is ready (synchronous). Buffered channels block only when the buffer is full.',
        code: `// Unbuffered — synchronous handoff
ch := make(chan int)
go func() { ch <- 42 }()   // blocks until receiver ready
v := <-ch                   // 42

// Buffered — async up to capacity
bch := make(chan string, 3)
bch <- "a"    // doesn't block
bch <- "b"
bch <- "c"
// bch <- "d"  would block — buffer full

// Directional channels — enforce send/receive roles
func producer(out chan<- int) {
    for i := 0; i < 5; i++ {
        out <- i
    }
    close(out)   // signal no more values
}

func consumer(in <-chan int) {
    for v := range in {   // range reads until channel closed
        fmt.Println(v)
    }
}

// Pipeline pattern
func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums { out <- n }
        close(out)
    }()
    return out
}

func sq(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in { out <- n * n }
        close(out)
    }()
    return out
}`,
      },
      {
        title: 'select & Fan-out / Fan-in',
        explanation: 'select waits on multiple channel operations — like a switch for channels. Default case makes it non-blocking.',
        code: `// select — multiplex channels
func fanIn(ch1, ch2 <-chan string) <-chan string {
    merged := make(chan string)
    go func() {
        for {
            select {
            case v, ok := <-ch1:
                if !ok { ch1 = nil; continue }
                merged <- v
            case v, ok := <-ch2:
                if !ok { ch2 = nil; continue }
                merged <- v
            }
            if ch1 == nil && ch2 == nil {
                close(merged)
                return
            }
        }
    }()
    return merged
}

// Timeout with select
import "time"
select {
case result := <-compute():
    fmt.Println("got:", result)
case <-time.After(2 * time.Second):
    fmt.Println("timed out")
}

// Non-blocking channel op with default
select {
case msg := <-ch:
    fmt.Println("received:", msg)
default:
    fmt.Println("no message ready")
}`,
      },
    ],
    gotchas: [
      'Closing a closed channel panics; sending to a closed channel panics — only the sender should close',
      'A nil channel blocks forever in both send and receive — useful in select to disable a case',
      'Goroutine closures capture variables by reference — shadow loop variables or pass as arguments',
      'Goroutines are not garbage collected until they exit — a stuck goroutine is a goroutine leak',
    ],
    practiceHints: [
      'Build a worker pool: N goroutines processing jobs from a shared channel, results to another channel',
      'Implement a timeout wrapper: run any func() in a goroutine, cancel after N seconds',
      'Write a merge(channels ...<-chan int) <-chan int that merges all inputs into one output',
    ],
  },

  'go-sync-context': {
    id: 'go-sync-context',
    title: 'sync Primitives & context',
    category: 'go-concurrency',
    level: 'Advanced',
    description: 'The sync package provides Mutex, RWMutex, WaitGroup, Once, and Cond for coordinating goroutines without channels. context.Context propagates cancellation, deadlines, and request-scoped values across API boundaries.',
    keyInsight: 'context.Context should be the first argument of every function that does I/O or calls goroutines. When context is cancelled, all downstream operations should stop. This is how Go handles request cancellation end-to-end.',
    sections: [
      {
        title: 'sync.Mutex, RWMutex, Once',
        explanation: 'Mutex protects shared state with exclusive access. RWMutex allows concurrent reads. Once runs a function exactly once.',
        code: `import "sync"

// Mutex — exclusive lock for reads and writes
type SafeCounter struct {
    mu    sync.Mutex
    count int
}

func (c *SafeCounter) Inc() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}

func (c *SafeCounter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count
}

// RWMutex — many readers OR one writer
type Cache struct {
    mu   sync.RWMutex
    data map[string]string
}

func (c *Cache) Get(key string) (string, bool) {
    c.mu.RLock()           // multiple goroutines can hold RLock
    defer c.mu.RUnlock()
    v, ok := c.data[key]
    return v, ok
}

func (c *Cache) Set(key, val string) {
    c.mu.Lock()            // exclusive write lock
    defer c.mu.Unlock()
    c.data[key] = val
}

// sync.Once — run exactly once, safe for concurrent use
var (
    instance *DB
    once     sync.Once
)
func getInstance() *DB {
    once.Do(func() {
        instance = &DB{connect()}
    })
    return instance
}`,
      },
      {
        title: 'context.Context',
        explanation: 'context.WithCancel, WithTimeout, WithDeadline create derived contexts with cancellation. Always call the cancel function to release resources.',
        code: `import (
    "context"
    "time"
)

// WithCancel — manual cancellation
func doWork(ctx context.Context) error {
    for {
        select {
        case <-ctx.Done():
            return ctx.Err()   // context.Canceled or DeadlineExceeded
        default:
            // do one unit of work
        }
    }
}

ctx, cancel := context.WithCancel(context.Background())
defer cancel()   // always cancel — releases resources

go doWork(ctx)
time.Sleep(2 * time.Second)
cancel()         // signal goroutine to stop

// WithTimeout — auto-cancel after duration
ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()

result, err := http.Get("https://example.com")   // respects ctx deadline

// WithValue — pass request-scoped data
type ctxKey string
const userKey ctxKey = "user"

ctx = context.WithValue(context.Background(), userKey, "Alice")
user := ctx.Value(userKey).(string)   // "Alice"

// Pass context first in every function
func fetchData(ctx context.Context, url string) ([]byte, error) {
    req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
    resp, err := http.DefaultClient.Do(req)
    if err != nil { return nil, err }
    defer resp.Body.Close()
    return io.ReadAll(resp.Body)
}`,
      },
    ],
    gotchas: [
      'Mutex values must not be copied after first use — pass by pointer or embed in a struct that\'s always used by pointer',
      'sync.Map is specialised for high-concurrency read-heavy loads — for most cases a RWMutex + map is clearer',
      'Always call the context cancel function (defer cancel()) — leaking it leaks a goroutine and timers',
      'Never store a context in a struct — pass it as the first function argument every time',
    ],
    practiceHints: [
      'Write a concurrent cache with Get/Set using RWMutex, measure vs plain Mutex with benchmarks',
      'Implement a pipeline where each stage respects context cancellation',
      'Build a rate limiter using a ticker channel and context deadline',
    ],
  },

  // ─── ADVANCED TYPES ───────────────────────────────────────────────────────
  'go-generics': {
    id: 'go-generics',
    title: 'Generics',
    category: 'go-advanced-types',
    level: 'Advanced',
    description: 'Go generics (1.18+) add type parameters to functions and types. Constraints specify what operations are allowed on the type parameter. comparable allows == and use as map keys. Union constraints (int | float64) restrict to specific types.',
    keyInsight: 'Prefer generics over any (empty interface) when you need the type back — generics preserve type information at compile time, avoiding type assertions at runtime. But don\'t over-generalise: if a function only makes sense for one or two types, keep it concrete.',
    sections: [
      {
        title: 'Generic Functions',
        explanation: 'Type parameters go in square brackets before the parameter list. The compiler infers them at call sites.',
        code: `package main

import "golang.org/x/exp/constraints"

// Generic function — T can be any ordered type
func Min[T constraints.Ordered](a, b T) T {
    if a < b {
        return a
    }
    return b
}

Min(3, 5)           // int   — inferred
Min(3.14, 2.71)     // float64 — inferred
Min("apple", "banana")  // string — inferred

// Map, Filter, Reduce — stdlib doesn't have these, write your own
func Map[T, U any](s []T, f func(T) U) []U {
    result := make([]U, len(s))
    for i, v := range s {
        result[i] = f(v)
    }
    return result
}

func Filter[T any](s []T, pred func(T) bool) []T {
    var result []T
    for _, v := range s {
        if pred(v) { result = append(result, v) }
    }
    return result
}

nums := []int{1, 2, 3, 4, 5}
doubled  := Map(nums, func(n int) int { return n * 2 })
evens    := Filter(nums, func(n int) bool { return n%2 == 0 })`,
      },
      {
        title: 'Generic Types & Constraints',
        explanation: 'Generic types work the same way. Custom constraints define unions of types or require specific methods.',
        code: `// Generic Stack
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(v T)    { s.items = append(s.items, v) }
func (s *Stack[T]) Pop() (T, bool) {
    var zero T
    if len(s.items) == 0 { return zero, false }
    last := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return last, true
}
func (s *Stack[T]) Len() int { return len(s.items) }

s := Stack[string]{}
s.Push("hello")
s.Push("world")
v, _ := s.Pop()   // "world"

// Custom constraint — number types only
type Number interface {
    constraints.Integer | constraints.Float
}

func Sum[T Number](nums []T) T {
    var total T
    for _, n := range nums { total += n }
    return total
}

Sum([]int{1, 2, 3})       // 6
Sum([]float64{1.1, 2.2})  // 3.3

// comparable — types that support ==
func Contains[T comparable](slice []T, target T) bool {
    for _, v := range slice {
        if v == target { return true }
    }
    return false
}`,
      },
    ],
    gotchas: [
      'You cannot use a type parameter as a map key unless constrained to comparable',
      'Generic functions cannot use type switches on their type parameter — use interface methods instead',
      'Instantiated generic types (Stack[int]) are different types from each other — Stack[int] != Stack[string]',
      'The constraints package is in golang.org/x/exp — not the stdlib yet; import it explicitly',
    ],
    practiceHints: [
      'Write a generic Set[T comparable] with Add, Contains, Remove, and Union methods',
      'Implement a generic Reduce[T, U any](s []T, initial U, f func(U, T) U) U',
      'Create a generic Result[T any] type (Ok/Err) similar to Rust\'s Result',
    ],
  },

  // ─── TOOLING ──────────────────────────────────────────────────────────────
  'go-testing': {
    id: 'go-testing',
    title: 'Testing & Benchmarks',
    category: 'go-tooling',
    level: 'Intermediate',
    description: 'Go\'s testing package is built-in. Tests live in _test.go files. Table-driven tests are idiomatic. Benchmarks measure performance. go test -race detects data races.',
    keyInsight: 'Table-driven tests (a slice of {input, expected} structs + a for loop with t.Run) are the dominant pattern in the Go ecosystem. They keep test cases data, not code — easy to add new cases without touching test logic.',
    sections: [
      {
        title: 'Unit Tests & Table-Driven',
        explanation: 'Test functions are func TestXxx(t *testing.T). Use t.Run for subtests — each gets its own t, can be run individually.',
        code: `// math_test.go
package math

import "testing"

func Add(a, b int) int { return a + b }

// Table-driven test — idiomatic Go
func TestAdd(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive", 2, 3, 5},
        {"negative", -1, -2, -3},
        {"zero",     0, 0, 0},
        {"mixed",    5, -3, 2},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := Add(tt.a, tt.b)
            if got != tt.expected {
                t.Errorf("Add(%d,%d) = %d, want %d",
                    tt.a, tt.b, got, tt.expected)
            }
        })
    }
}

// Run: go test ./...
// Run one subtest: go test -run TestAdd/negative
// Verbose: go test -v
// Race detector: go test -race`,
      },
      {
        title: 'Benchmarks, Helpers & testify',
        explanation: 'Benchmark functions are func BenchmarkXxx(b *testing.B). t.Helper() marks a function as a test helper — errors report the caller\'s line, not the helper\'s.',
        code: `// Benchmark
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}
// go test -bench=. -benchmem

// Helper function — errors attributed to caller
func assertEqual(t *testing.T, got, want int) {
    t.Helper()                      // marks as helper
    if got != want {
        t.Errorf("got %d, want %d", got, want)
    }
}

// Fake / stub dependencies using interfaces
type EmailSender interface {
    Send(to, subject, body string) error
}

type FakeSender struct{ Sent []string }
func (f *FakeSender) Send(to, subject, body string) error {
    f.Sent = append(f.Sent, to)
    return nil
}

func TestNotify(t *testing.T) {
    fake := &FakeSender{}
    svc  := NewService(fake)
    svc.Notify("user@example.com")
    if len(fake.Sent) != 1 {
        t.Errorf("expected 1 email, got %d", len(fake.Sent))
    }
}

// testify — popular assertion library
// import "github.com/stretchr/testify/assert"
// assert.Equal(t, expected, actual)
// assert.NoError(t, err)
// assert.Contains(t, slice, element)`,
      },
    ],
    gotchas: [
      't.Fatal stops the current test immediately; t.Error logs and continues — use Fatal for setup failures',
      'Benchmark loops must use b.N — the framework calibrates it to run long enough for accurate measurement',
      'Test files are NOT compiled into production binaries — only when running go test',
      'go test -race adds ~5–10× overhead — run it in CI, not on every local run',
    ],
    practiceHints: [
      'Write table-driven tests for a FizzBuzz function covering all three cases',
      'Benchmark two implementations of string reversal and compare allocations with -benchmem',
      'Write an integration test using a real HTTP server (httptest.NewServer)',
    ],
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────────────
  'go-memory-performance': {
    id: 'go-memory-performance',
    title: 'Memory & Performance',
    category: 'go-performance',
    level: 'Expert',
    description: 'Understanding stack vs heap allocation, escape analysis, GC behaviour, and sync.Pool lets you write Go that is not just correct but fast. pprof gives actionable CPU and memory profiles.',
    keyInsight: 'Every heap allocation adds GC pressure. Escape analysis (go tool compile -m) shows you what escapes. The key insight: if a value doesn\'t outlive the function, the compiler can put it on the stack — zero GC cost.',
    sections: [
      {
        title: 'Escape Analysis & Stack vs Heap',
        explanation: 'Values that outlive their creating function must go to the heap. Values that stay local can live on the stack (fast, no GC).',
        code: `// go tool compile -m -l file.go  shows what escapes

// Stack allocation — safe, fast
func stackAlloc() int {
    x := 42      // stays on stack — doesn't escape
    return x     // value copied out
}

// Heap allocation — x escapes because pointer is returned
func heapAlloc() *int {
    x := 42
    return &x    // x escapes to heap: "moved to heap: x"
}

// Interface causes escape — concrete type stored in interface header
func interfaceEscape(v interface{}) {
    // v is already on heap by the time we get it
}

// Reducing allocations — preallocate slices
func slow() []int {
    var result []int
    for i := 0; i < 1000; i++ {
        result = append(result, i)   // multiple reallocations
    }
    return result
}

func fast() []int {
    result := make([]int, 0, 1000)  // preallocate cap
    for i := 0; i < 1000; i++ {
        result = append(result, i)   // no reallocations
    }
    return result
}

// String building — strings.Builder avoids O(n²) copies
var b strings.Builder
for i := 0; i < 1000; i++ {
    fmt.Fprintf(&b, "%d,", i)
}
result := b.String()`,
      },
      {
        title: 'pprof & sync.Pool',
        explanation: 'pprof profiles CPU usage and allocations. sync.Pool recycles objects to reduce GC pressure for short-lived, frequently-allocated objects.',
        code: `import (
    "net/http"
    _ "net/http/pprof"   // registers /debug/pprof/ endpoints
    "runtime/pprof"
)

// CPU profile to file
f, _ := os.Create("cpu.prof")
pprof.StartCPUProfile(f)
defer pprof.StopCPUProfile()
// then: go tool pprof cpu.prof → web

// Memory profile
pprof.WriteHeapProfile(f)
// go test -memprofile=mem.prof -bench=.
// go tool pprof mem.prof

// sync.Pool — reuse objects, reduce GC pressure
var bufPool = sync.Pool{
    New: func() any { return new(bytes.Buffer) },
}

func handler(w http.ResponseWriter, r *http.Request) {
    buf := bufPool.Get().(*bytes.Buffer)
    buf.Reset()
    defer bufPool.Put(buf)

    // use buf — it's either recycled or freshly allocated
    buf.WriteString("response body")
    w.Write(buf.Bytes())
}

// GOGC and GOMEMLIMIT tuning
// GOGC=200  → GC when heap doubles (default=100, halve frequency)
// GOMEMLIMIT=512MiB  → hard limit (Go 1.19+)
// export GOGC=200 GOMEMLIMIT=512MiB`,
      },
    ],
    gotchas: [
      'sync.Pool objects can be collected by GC at any time — don\'t store things that must survive GC cycles',
      'pprof\'s net/http import has a side effect: registers HTTP handlers — only import in debug builds',
      'Premature optimisation: always profile first — the bottleneck is rarely where you think',
      'string([]byte) and []byte(string) always copy — use unsafe.String/unsafe.SliceData for zero-copy (Go 1.20+)',
    ],
    practiceHints: [
      'Run go tool compile -m on a function that returns a pointer vs a value — observe escape output',
      'Profile a JSON marshal/unmarshal loop with -memprofile and find the largest allocation site',
      'Implement a sync.Pool-backed HTTP response buffer and benchmark vs always allocating',
    ],
  },

  // ─── EXPERT PATTERNS ──────────────────────────────────────────────────────
  'go-expert-patterns': {
    id: 'go-expert-patterns',
    title: 'Expert Patterns',
    category: 'go-expert',
    level: 'Expert',
    description: 'Patterns that appear in production Go codebases: functional options for flexible APIs, middleware chains, reflect for runtime introspection, and unsafe for zero-copy performance tricks.',
    keyInsight: 'Functional options (func(o *Options)) scale better than large config structs or boolean flags. Middleware chains (func(Handler) Handler) compose cleanly for HTTP, gRPC, and CLIs. Use reflect sparingly — it is slow and bypasses type safety; prefer generics for new code.',
    sections: [
      {
        title: 'Functional Options Pattern',
        explanation: 'Instead of a massive Options struct with defaults, accept variadic func(*Options). Callers pass only what they need; defaults live in NewXxx.',
        code: `type Server struct {
    host    string
    port    int
    timeout time.Duration
    maxConn int
}

// Option is a function that configures a Server
type Option func(*Server)

// Constructor options — each sets one field
func WithHost(host string) Option {
    return func(s *Server) { s.host = host }
}

func WithPort(port int) Option {
    return func(s *Server) { s.port = port }
}

func WithTimeout(d time.Duration) Option {
    return func(s *Server) { s.timeout = d }
}

func WithMaxConn(n int) Option {
    return func(s *Server) { s.maxConn = n }
}

// Constructor with sensible defaults
func NewServer(opts ...Option) *Server {
    s := &Server{
        host:    "localhost",
        port:    8080,
        timeout: 30 * time.Second,
        maxConn: 100,
    }
    for _, opt := range opts {
        opt(s)
    }
    return s
}

// Caller specifies only what differs from defaults
srv := NewServer(
    WithPort(9090),
    WithTimeout(5 * time.Second),
)`,
      },
      {
        title: 'Middleware Chain',
        explanation: 'HTTP middleware is a function from Handler to Handler. Chain them by wrapping one inside another. Leftmost middleware runs first.',
        code: `type Handler func(w http.ResponseWriter, r *http.Request)

type Middleware func(Handler) Handler

// Logging middleware
func Logging(next Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    }
}

// Auth middleware
func Auth(next Handler) Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Header.Get("Authorization") == "" {
            http.Error(w, "unauthorised", http.StatusUnauthorized)
            return
        }
        next(w, r)
    }
}

// Chain — applies middlewares left to right (outer to inner)
func Chain(h Handler, ms ...Middleware) Handler {
    for i := len(ms) - 1; i >= 0; i-- {
        h = ms[i](h)   // wrap inner-most first
    }
    return h
}

myHandler := func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "hello")
}

// Request: Logging → Auth → myHandler
http.HandleFunc("/", Chain(myHandler, Logging, Auth))`,
      },
      {
        title: 'reflect & unsafe',
        explanation: 'reflect inspects types and values at runtime. unsafe gives raw memory access — use for zero-copy string/bytes conversion and calling C.',
        code: `import (
    "reflect"
    "unsafe"
)

// reflect — walk struct fields (for ORM, JSON, etc.)
func printFields(v any) {
    t := reflect.TypeOf(v)
    val := reflect.ValueOf(v)
    if t.Kind() == reflect.Ptr {
        t = t.Elem()
        val = val.Elem()
    }
    for i := 0; i < t.NumField(); i++ {
        f := t.Field(i)
        tag := f.Tag.Get("json")
        fmt.Printf("Field: %s, Tag: %s, Value: %v\\n",
            f.Name, tag, val.Field(i))
    }
}

type User struct {
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}
printFields(&User{"Alice", "a@b.com"})

// unsafe — zero-copy string ↔ []byte (Go 1.20+)
func stringToBytes(s string) []byte {
    return unsafe.Slice(unsafe.StringData(s), len(s))
}

func bytesToString(b []byte) string {
    return unsafe.String(unsafe.SliceData(b), len(b))
}
// WARNING: the result shares memory — mutations to bytes mutate string!
// Safe only when you know the bytes won't be modified.`,
      },
    ],
    gotchas: [
      'reflect.Value.Interface() panics if the value is unexported — check CanInterface() first',
      'unsafe operations are unsafe: wrong usage causes memory corruption, not panics',
      'Middleware chains execute in the order you\'d expect only if you chain them correctly — test with logging',
      'Functional options with validation: validate inside NewXxx after all options are applied, not per-option',
    ],
    practiceHints: [
      'Build a functional-options HTTP client with WithBaseURL, WithTimeout, WithRetry',
      'Implement a Chain middleware that adds request ID to context and passes it downstream',
      'Write a reflect-based struct validator that checks required tags and returns all errors',
    ],
  },
};

export const goCategoryTopics = {
  'go-foundations':      ['go-variables-types', 'go-control-flow'],
  'go-control-flow':     ['go-control-flow'],
  'go-data-structures':  ['go-slices-maps', 'go-structs-methods'],
  'go-interfaces-errors':['go-interfaces', 'go-errors'],
  'go-concurrency':      ['go-goroutines-channels', 'go-sync-context'],
  'go-advanced-types':   ['go-generics'],
  'go-tooling':          ['go-testing'],
  'go-performance':      ['go-memory-performance'],
  'go-expert':           ['go-expert-patterns'],
};
