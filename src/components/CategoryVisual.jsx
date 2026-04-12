import { useState, useEffect } from 'react'

/* ─── Arrays & Hashing ─────────────────────────────────────────────────────
   Animates: array → hash map lookup O(1)
*/
export function ArrayHashingVisual() {
  const arr = [2, 7, 4, 9, 2]
  const [step, setStep] = useState(0)
  const map = {}
  for (let i = 0; i <= step && i < arr.length; i++) map[arr[i]] = i

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % (arr.length + 1)), 900)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Iterating array → building hash map for O(1) lookup
      </div>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Array</div>
          <div className="cell-row">
            {arr.map((v, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div className={`cell ${i === step ? 'current' : i < step ? 'seen' : ''}`}>{v}</div>
                <div className="ptr-label" style={{ color: '#64748b' }}>{i}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: '1.2rem', alignSelf: 'center', color: '#64748b' }}>→</div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Hash Map</div>
          <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 8, padding: '8px 12px', minWidth: 120, minHeight: 40 }}>
            {Object.entries(map).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, fontFamily: 'JetBrains Mono', fontSize: '0.8rem', padding: '2px 0' }}>
                <span style={{ color: '#6366f1' }}>{k}</span>
                <span style={{ color: '#64748b' }}>→</span>
                <span style={{ color: '#22c55e' }}>idx {v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: '0.75rem', color: '#64748b' }}>
        O(n²) brute force → <span style={{ color: '#6366f1', fontWeight: 600 }}>O(n) with hash map</span>
      </div>
    </div>
  )
}

/* ─── Two Pointers ──────────────────────────────────────────────────────────
   Animates: two pointers converging on sorted array
*/
export function TwoPointersVisual() {
  const arr = [-4, -1, 0, 2, 3, 7]
  const [l, setL] = useState(0)
  const [r, setR] = useState(arr.length - 1)

  useEffect(() => {
    const t = setInterval(() => {
      setL(pl => {
        const nl = pl + 1
        setR(pr => pr - 1)
        if (nl >= arr.length / 2) { setL(0); setR(arr.length - 1); return 0 }
        return nl
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Sorted array — pointers converge inward, shrinking the search space
      </div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div className={`cell ${i === l ? 'left-ptr' : i === r ? 'right-ptr' : i > l && i < r ? 'seen' : ''}`}>{v}</div>
            <div className="ptr-label" style={{ color: i === l ? '#10b981' : i === r ? '#a78bfa' : 'transparent' }}>
              {i === l ? 'L' : i === r ? 'R' : '-'}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: '0.78rem', flexWrap: 'wrap' }}>
        <span style={{ color: '#10b981' }}>● Left pointer</span>
        <span style={{ color: '#a78bfa' }}>● Right pointer</span>
        <span style={{ color: '#64748b' }}>— If sum too small: L++  |  too large: R--</span>
      </div>
    </div>
  )
}

/* ─── Sliding Window ────────────────────────────────────────────────────────
   Animates: window expanding and contracting over array
*/
export function SlidingWindowVisual() {
  const arr = [2, 1, 5, 1, 3, 2]
  const [l, setL] = useState(0)
  const [r, setR] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setR(pr => {
        if (pr >= arr.length - 1) { setL(0); return 0 }
        if (pr - l >= 2) setL(pl => pl + 1)
        return pr + 1
      })
    }, 700)
    return () => clearInterval(t)
  }, [l])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Window expands right, shrinks left when constraint violated — avoids O(n²)
      </div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div className={`cell ${i >= l && i <= r ? 'window' : ''} ${i === r ? 'current' : ''}`}>{v}</div>
            <div className="ptr-label" style={{ color: i === l ? '#f59e0b' : i === r ? '#f59e0b' : 'transparent' }}>
              {i === l && i === r ? 'L=R' : i === l ? 'L' : i === r ? 'R' : '-'}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: '0.75rem', color: '#64748b' }}>
        Window sum: <span style={{ color: '#f59e0b', fontWeight: 600 }}>{arr.slice(l, r + 1).reduce((a, b) => a + b, 0)}</span>
        &nbsp;· window size: <span style={{ color: '#f59e0b', fontWeight: 600 }}>{r - l + 1}</span>
      </div>
    </div>
  )
}

/* ─── Stack ─────────────────────────────────────────────────────────────────
   Animates: push/pop cycle with LIFO visualization
*/
export function StackVisual() {
  const ops = [
    { op: 'push', val: '(' },
    { op: 'push', val: '[' },
    { op: 'push', val: '{' },
    { op: 'pop', val: '}' },
    { op: 'pop', val: ']' },
    { op: 'pop', val: ')' },
  ]
  const [step, setStep] = useState(0)
  const stack = []
  for (let i = 0; i <= step && i < ops.length; i++) {
    if (ops[i].op === 'push') stack.push(ops[i].val)
    else stack.pop()
  }

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % (ops.length + 1)), 800)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Stack (LIFO)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', minHeight: 110 }}>
          {stack.length === 0 && <div style={{ color: '#2a2a3a', fontSize: '0.75rem', marginTop: 40 }}>empty</div>}
          {[...stack].reverse().map((v, i) => (
            <div key={i} className={`stack-item${i === 0 ? ' top' : ''}`}>{v}</div>
          ))}
        </div>
        {stack.length > 0 && <div className="stack-top-label">↑ top</div>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.6 }}>
          <div style={{ marginBottom: 4 }}>
            Op: <span style={{ color: '#ef4444', fontWeight: 600, fontFamily: 'JetBrains Mono' }}>
              {step < ops.length ? `${ops[step].op}('${ops[step].val}')` : 'done'}
            </span>
          </div>
          <div>Brackets need a matching close in <strong>reverse</strong> order — a stack enforces this naturally.</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Binary Search ─────────────────────────────────────────────────────────
   Animates: bisecting a sorted array to find target
*/
export function BinarySearchVisual() {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15]
  const target = 11
  const [l, setL] = useState(0)
  const [r, setR] = useState(arr.length - 1)
  const [found, setFound] = useState(false)

  useEffect(() => {
    if (found) {
      const t = setTimeout(() => { setL(0); setR(arr.length - 1); setFound(false) }, 1500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      const mid = Math.floor((l + r) / 2)
      if (arr[mid] === target) { setFound(true) }
      else if (arr[mid] < target) setL(mid + 1)
      else setR(mid - 1)
    }, 900)
    return () => clearTimeout(t)
  }, [l, r, found])

  const mid = Math.floor((l + r) / 2)

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Target: <span style={{ color: '#f59e0b', fontWeight: 600 }}>{target}</span> — each step eliminates half the array
      </div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div className={`cell ${found && i === mid ? 'match' : i === mid ? 'mid' : i >= l && i <= r ? 'seen' : 'out'}`}>{v}</div>
            <div className="ptr-label" style={{ color: i === mid ? '#f59e0b' : 'transparent' }}>M</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 6 }}>
        {found
          ? <span style={{ color: '#22c55e', fontWeight: 600 }}>Found {target}!</span>
          : <>l={l}, r={r}, mid={mid} → nums[mid]={arr[mid]} {arr[mid] < target ? '< target → search right' : '> target → search left'}</>
        }
      </div>
    </div>
  )
}

/* ─── Linked List ───────────────────────────────────────────────────────────
   Animates: traversal with fast/slow pointers
*/
export function LinkedListVisual() {
  const vals = [1, 2, 3, 4, 5]
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setSlow(s => {
        const ns = s + 1
        setFast(f => Math.min(f + 2, vals.length - 1))
        if (ns >= vals.length) { setSlow(0); setFast(0); return 0 }
        return ns
      })
    }, 800)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Fast/slow pointers — slow moves 1 step, fast moves 2 steps
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
        {vals.map((v, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div className={`cell ${i === slow && i === fast ? 'current' : i === slow ? 'left-ptr' : i === fast ? 'right-ptr' : ''}`}>{v}</div>
              <div className="ptr-label" style={{ color: i === slow ? '#10b981' : i === fast ? '#a78bfa' : 'transparent' }}>
                {i === slow && i === fast ? 'S=F' : i === slow ? 'S' : i === fast ? 'F' : '-'}
              </div>
            </div>
            {i < vals.length - 1 && <div style={{ color: '#2a2a3a', margin: '0 2px', paddingBottom: 14 }}>→</div>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: '0.75rem', color: '#64748b' }}>
        When fast reaches end, slow is at the <span style={{ color: '#10b981' }}>middle</span>
      </div>
    </div>
  )
}

/* ─── Trees ─────────────────────────────────────────────────────────────────
   Animates: DFS preorder traversal with highlighting
*/
export function TreeVisual() {
  const order = [0, 1, 3, 4, 2, 5, 6] // preorder: root, left, right
  const [visitedCount, setVisitedCount] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setVisitedCount(c => c >= order.length ? 0 : c + 1), 600)
    return () => clearInterval(t)
  }, [])

  const visited = new Set(order.slice(0, visitedCount))
  const active = order[visitedCount - 1]

  const nodes = [
    { val: 1, level: 0 },
    { val: 2, level: 1 }, { val: 3, level: 1 },
    { val: 4, level: 2 }, { val: 5, level: 2 }, { val: 6, level: 2 }, { val: 7, level: 2 },
  ]

  const levels = [[0], [1, 2], [3, 4, 5, 6]]

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        DFS preorder: Root → Left → Right (recursion unwinds the tree)
      </div>
      {levels.map((levelIdxs, li) => (
        <div className="tree-row" key={li} style={{ marginBottom: 6 }}>
          {levelIdxs.map(idx => (
            <div key={idx} className={`t-node ${idx === active ? 'active' : visited.has(idx) ? 'visited' : ''}`}>
              {nodes[idx].val}
            </div>
          ))}
        </div>
      ))}
      <div style={{ marginTop: 8, fontSize: '0.75rem', color: '#64748b' }}>
        <span style={{ color: '#22c55e' }}>● current</span> &nbsp;
        <span style={{ color: '#a78bfa' }}>● visited</span> &nbsp;
        <span style={{ color: '#2a2a3a' }}>● unvisited</span>
      </div>
    </div>
  )
}

/* ─── Heap ───────────────────────────────────────────────────────────────────
   Shows min-heap with two-heap median technique
*/
export function HeapVisual() {
  const small = [-5, -3, -1] // max-heap (negated)
  const large = [6, 8, 10]   // min-heap

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 12 }}>
        Two-heap trick: max-heap (lower half) + min-heap (upper half) → O(1) median
      </div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: '#f97316', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Max-Heap (lower)</div>
          {small.map((v, i) => (
            <div key={i} style={{
              width: 80 + i * 20, height: 28, borderRadius: 6, margin: '3px auto',
              border: `2px solid #f97316`, background: 'rgba(249,115,22,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#fb923c', fontWeight: 600,
            }}>{-v}</div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 4 }}>Median</div>
          <div style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid #6366f1', borderRadius: 8, padding: '6px 14px', fontFamily: 'JetBrains Mono', fontSize: '0.9rem', color: '#a78bfa', fontWeight: 700 }}>
            {(-small[0] + large[0]) / 2}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: '#6366f1', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Min-Heap (upper)</div>
          {large.map((v, i) => (
            <div key={i} style={{
              width: 80 + (large.length - 1 - i) * 20, height: 28, borderRadius: 6, margin: '3px auto',
              border: '2px solid #6366f1', background: 'rgba(99,102,241,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#a78bfa', fontWeight: 600,
            }}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Backtracking ───────────────────────────────────────────────────────────
   Shows decision tree with pruning
*/
export function BacktrackingVisual() {
  const [highlighted, setHighlighted] = useState([0])
  const paths = [[0], [0, 1], [0, 1, 3], [0, 1, 4], [0, 2], [0, 2, 5]]

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % paths.length
      setHighlighted(paths[i])
    }, 700)
    return () => clearInterval(t)
  }, [])

  const nodes = [
    { id: 0, label: '[]', x: '48%', y: 0 },
    { id: 1, label: '[2]', x: '22%', y: 48 },
    { id: 2, label: '[3]', x: '72%', y: 48 },
    { id: 3, label: '[2,2]', x: '8%', y: 96 },
    { id: 4, label: '[2,3]✓', x: '36%', y: 96 },
    { id: 5, label: '[3,3]', x: '72%', y: 96 },
  ]

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        Explore choices recursively, <span style={{ color: '#ec4899' }}>prune</span> invalid branches, <span style={{ color: '#22c55e' }}>collect</span> solutions
      </div>
      <div style={{ position: 'relative', height: 140 }}>
        {/* Edges */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
          <line x1="50%" y1="18" x2="24%" y2="64" stroke="#2a2a3a" strokeWidth="1.5" />
          <line x1="50%" y1="18" x2="74%" y2="64" stroke="#2a2a3a" strokeWidth="1.5" />
          <line x1="24%" y1="82" x2="11%" y2="112" stroke="#2a2a3a" strokeWidth="1.5" />
          <line x1="24%" y1="82" x2="38%" y2="112" stroke="#2a2a3a" strokeWidth="1.5" />
          <line x1="74%" y1="82" x2="74%" y2="112" stroke="#2a2a3a" strokeWidth="1.5" />
        </svg>
        {nodes.map(n => {
          const isHighlighted = highlighted.includes(n.id)
          const isValid = n.label.includes('✓')
          return (
            <div key={n.id} style={{
              position: 'absolute', left: n.x, top: n.y,
              transform: 'translateX(-50%)',
              background: isValid ? 'rgba(34,197,94,0.15)' : isHighlighted ? 'rgba(236,72,153,0.15)' : 'rgba(26,26,36,0.9)',
              border: `1.5px solid ${isValid ? '#22c55e' : isHighlighted ? '#ec4899' : '#2a2a3a'}`,
              borderRadius: 6, padding: '3px 8px',
              fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
              color: isValid ? '#22c55e' : isHighlighted ? '#f472b6' : '#64748b',
              fontWeight: 600, transition: 'all 0.3s', whiteSpace: 'nowrap',
            }}>{n.label}</div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Graphs ─────────────────────────────────────────────────────────────────
   Shows BFS wave expanding from source
*/
export function GraphsVisual() {
  const nodes = [
    { id: 0, label: '0', x: '50%', y: 10 },
    { id: 1, label: '1', x: '20%', y: 55 },
    { id: 2, label: '2', x: '80%', y: 55 },
    { id: 3, label: '3', x: '10%', y: 100 },
    { id: 4, label: '4', x: '40%', y: 100 },
    { id: 5, label: '5', x: '70%', y: 100 },
  ]
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,5]]
  const bfsOrder = [[0], [1, 2], [3, 4, 5]]
  const [wave, setWave] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWave(w => (w + 1) % (bfsOrder.length + 1)), 900)
    return () => clearInterval(t)
  }, [])

  const visited = new Set(bfsOrder.slice(0, wave).flat())

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 8 }}>
        BFS explores level by level — shortest path in unweighted graphs
      </div>
      <div style={{ position: 'relative', height: 140 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
          {edges.map(([a, b], i) => {
            const na = nodes[a], nb = nodes[b]
            return <line key={i}
              x1={na.x} y1={`calc(${na.y}px + 18px)`}
              x2={nb.x} y2={`calc(${nb.y}px + 18px)`}
              stroke="#2a2a3a" strokeWidth="1.5"
            />
          })}
        </svg>
        {nodes.map(n => (
          <div key={n.id} className={`g-node${visited.has(n.id) ? ' visited' : ''}`}
            style={{ left: n.x, top: n.y, transform: 'translateX(-50%)' }}>
            {n.label}
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 4 }}>
        Wave {wave}: visiting {bfsOrder[wave] ? bfsOrder[wave].join(', ') : '—'}
      </div>
    </div>
  )
}

/* ─── Dynamic Programming ────────────────────────────────────────────────────
   Shows dp table being filled for coin change
*/
export function DPVisual() {
  const coins = [1, 2, 5]
  const amount = 7
  const [filled, setFilled] = useState(0)

  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i && dp[i - c] + 1 < dp[i]) dp[i] = dp[i - c] + 1
    }
  }

  useEffect(() => {
    const t = setInterval(() => setFilled(f => f >= amount ? 0 : f + 1), 500)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        dp[i] = min coins to make amount i — fill table bottom-up
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
        {dp.map((v, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', color: '#64748b', marginBottom: 3 }}>{i}</div>
            <div className={`cell ${i <= filled ? 'seen' : ''} ${i === filled ? 'current' : ''}`}
              style={{ width: 32, height: 32, minWidth: 32 }}>
              {i <= filled ? (v === Infinity ? '∞' : v) : '?'}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, fontSize: '0.75rem', color: '#64748b' }}>
        dp[{filled}] = <span style={{ color: '#a855f7', fontWeight: 600 }}>{dp[filled] === Infinity ? '∞' : dp[filled]}</span>
        &nbsp; (coins: {coins.join(', ')})
      </div>
    </div>
  )
}

/* ─── Intervals ──────────────────────────────────────────────────────────────
   Shows merging intervals
*/
export function IntervalsVisual() {
  const intervals = [
    { start: 1, end: 3, color: '#6366f1', label: '[1,3]' },
    { start: 2, end: 6, color: '#f59e0b', label: '[2,6]' },
    { start: 8, end: 10, color: '#22c55e', label: '[8,10]' },
    { start: 15, end: 18, color: '#ef4444', label: '[15,18]' },
  ]
  const merged = [
    { start: 1, end: 6, color: '#6366f1', label: '[1,6] merged' },
    { start: 8, end: 10, color: '#22c55e', label: '[8,10]' },
    { start: 15, end: 18, color: '#ef4444', label: '[15,18]' },
  ]
  const [showMerged, setShowMerged] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setShowMerged(m => !m), 1500)
    return () => clearInterval(t)
  }, [])

  const scale = 10
  const data = showMerged ? merged : intervals

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        {showMerged ? 'After merging overlapping intervals' : 'Before — sort by start, then merge overlaps'}
      </div>
      <div style={{ position: 'relative', height: 100, marginBottom: 8 }}>
        {data.map((iv, i) => (
          <div key={i} className="iv-row" style={{ position: 'relative', height: 28 }}>
            <div className="iv-bar" style={{
              left: iv.start * scale,
              width: (iv.end - iv.start) * scale + 20,
              background: iv.color + '22',
              border: `1.5px solid ${iv.color}`,
              color: iv.color,
            }}>{iv.label}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
        Key: if <code style={{ color: '#f59e0b' }}>curr.start ≤ prev.end</code> → overlap, extend end
      </div>
    </div>
  )
}

/* ─── Bit Manipulation ───────────────────────────────────────────────────────
   Shows XOR cancellation and bit operations
*/
export function BitVisual() {
  const a = 5   // 101
  const b = 3   // 011
  const [op, setOp] = useState(0)
  const ops = [
    { sym: 'XOR (^)', fn: (x, y) => x ^ y, color: '#6366f1', note: 'Cancels matching bits — find the unique element' },
    { sym: 'AND (&)', fn: (x, y) => x & y, color: '#22c55e', note: 'Keeps only bits set in BOTH — masking' },
    { sym: 'OR (|)', fn: (x, y) => x | y, color: '#f59e0b', note: 'Sets bit if EITHER has it — combining flags' },
    { sym: 'n & n-1', fn: (x) => x & (x - 1), color: '#ef4444', note: 'Clears the lowest set bit — count 1-bits' },
  ]

  useEffect(() => {
    const t = setInterval(() => setOp(o => (o + 1) % ops.length), 1200)
    return () => clearInterval(t)
  }, [])

  const curr = ops[op]
  const result = op === 3 ? curr.fn(a) : curr.fn(a, b)
  const toBits = n => n.toString(2).padStart(4, '0').split('')

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 12 }}>
        {curr.note}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#64748b', width: 60, textAlign: 'right' }}>a = {a}</div>
          <div className="bit-row">
            {toBits(a).map((b, i) => <div key={i} className={`bit ${b === '1' ? 'one' : 'zero'}`}>{b}</div>)}
          </div>
        </div>
        {op < 3 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#64748b', width: 60, textAlign: 'right' }}>b = {b}</div>
            <div className="bit-row">
              {toBits(b).map((bit, i) => <div key={i} className={`bit ${bit === '1' ? 'one' : 'zero'}`}>{bit}</div>)}
            </div>
          </div>
        )}
        <div style={{ borderTop: '1px solid #2a2a3a', width: 200, marginLeft: 72 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 600, width: 60, textAlign: 'right', color: curr.color }}>
            {op === 3 ? `${a}&${a-1}` : `${curr.sym}`}
          </div>
          <div className="bit-row">
            {toBits(result).map((bit, i) => <div key={i} className={`bit ${bit === '1' ? 'one' : 'zero'}`} style={{ borderColor: bit === '1' ? curr.color : undefined, color: bit === '1' ? curr.color : undefined }}>{bit}</div>)}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: curr.color, fontWeight: 700 }}>= {result}</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Dispatcher ─────────────────────────────────────────────────────────────
   Returns the right visual component for a category
*/
export default function CategoryVisual({ categoryId }) {
  const map = {
    'arrays-hashing': ArrayHashingVisual,
    'two-pointers': TwoPointersVisual,
    'sliding-window': SlidingWindowVisual,
    'stack': StackVisual,
    'binary-search': BinarySearchVisual,
    'linked-list': LinkedListVisual,
    'trees': TreeVisual,
    'heap-priority-queue': HeapVisual,
    'backtracking': BacktrackingVisual,
    'graphs': GraphsVisual,
    'dynamic-programming': DPVisual,
    'intervals': IntervalsVisual,
    'bit-manipulation': BitVisual,
  }
  const Visual = map[categoryId]
  if (!Visual) return null

  return (
    <div className="visual-explainer">
      <h3>Pattern Visualization</h3>
      <Visual />
    </div>
  )
}
