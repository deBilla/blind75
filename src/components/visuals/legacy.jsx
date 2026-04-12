// Components migrated from the original single-file ProblemVisual.jsx.
// Kept here to avoid rewriting stable, working animations.
import { useState, useEffect } from 'react'

// ── Two Sum ───────────────────────────────────────────────────────────────────

export function TwoSumViz() {
  const arr = [2, 7, 11, 15], target = 9
  const [curr, setCurr] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurr(c => (c + 1) % arr.length), 900)
    return () => clearInterval(t)
  }, [])

  const map = {}
  for (let i = 0; i < curr; i++) map[arr[i]] = i
  const complement = target - arr[curr]

  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
          Array (target={target})
        </div>
        <div className="cell-row">
          {arr.map((v, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div className={`cell ${i === curr ? 'current' : i < curr ? 'seen' : ''}`}>{v}</div>
              <div className="ptr-label" style={{ color: '#64748b' }}>i={i}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontSize: '0.8rem', color: '#64748b', alignSelf: 'center' }}>
        Need: <span style={{ color: '#f59e0b', fontFamily: 'JetBrains Mono', fontWeight: 600 }}>{complement}</span>
        {map[complement] !== undefined
          ? <span style={{ color: '#22c55e', fontWeight: 600 }}> → Found! [{map[complement]},{curr}]</span>
          : <span style={{ color: '#64748b' }}> → store {arr[curr]}:{curr}</span>}
      </div>
    </div>
  )
}

// ── Sliding Window ────────────────────────────────────────────────────────────

export function WindowViz({ arr = [2,1,5,1,3,2], k = 3 }) {
  const [pos, setPos] = useState(0)
  const n = arr.length

  useEffect(() => {
    const t = setInterval(() => setPos(p => p >= n - k ? 0 : p + 1), 800)
    return () => clearInterval(t)
  }, [n, k])

  const windowSum = arr.slice(pos, pos + k).reduce((a, b) => a + b, 0)

  return (
    <div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} className={`cell ${i >= pos && i < pos + k ? 'window' : ''} ${i === pos ? 'left-ptr' : i === pos + k - 1 ? 'right-ptr' : ''}`}>
            {v}
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
        Window [{pos}..{pos + k - 1}] sum = <span style={{ color: '#f59e0b', fontWeight: 600 }}>{windowSum}</span>
      </div>
    </div>
  )
}
