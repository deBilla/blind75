import { useState, useEffect } from 'react'
import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Standard Binary Search ────────────────────────────────────────────────────

export function BinarySearchViz({ arr = [-1,0,3,5,9,12], target = 9 }) {
  const [l, setL] = useState(0)
  const [r, setR] = useState(arr.length - 1)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => { setL(0); setR(arr.length - 1); setDone(false) }, 2000)
      return () => clearTimeout(t)
    }
    if (l > r) { setDone(true); return }
    const t = setTimeout(() => {
      const mid = Math.floor((l + r) / 2)
      if (arr[mid] === target) setDone(true)
      else if (arr[mid] < target) setL(mid + 1)
      else setR(mid - 1)
    }, 900)
    return () => clearTimeout(t)
  }, [l, r, done])

  const mid = Math.floor((l + r) / 2)

  return (
    <div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div className={`cell ${done && i === mid ? 'match' : i === mid ? 'mid' : i >= l && i <= r ? 'seen' : 'out'}`}>{v}</div>
            <div className="ptr-label" style={{ color: i === mid ? '#f59e0b' : 'transparent' }}>mid</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
        {done
          ? <span style={{ color: '#22c55e' }}>Found {target} at index {mid}!</span>
          : `l=${l}, r=${r}, mid=${mid} → checking ${arr[mid]}`}
      </div>
    </div>
  )
}

// ── Search in Rotated Sorted Array ────────────────────────────────────────────

function buildRotatedSteps(arr, target) {
  const steps = []
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) {
      steps.push({ l, r, mid, found: true, note: `arr[mid]=${arr[mid]} === target → found!` })
      break
    }
    if (arr[l] <= arr[mid]) {
      if (arr[l] <= target && target < arr[mid]) {
        steps.push({ l, r, mid, found: false, note: `Left [${arr[l]}…${arr[mid]}] sorted & target in range → go left` })
        r = mid - 1
      } else {
        steps.push({ l, r, mid, found: false, note: `Left [${arr[l]}…${arr[mid]}] sorted, target out of range → go right` })
        l = mid + 1
      }
    } else {
      if (arr[mid] < target && target <= arr[r]) {
        steps.push({ l, r, mid, found: false, note: `Right [${arr[mid]}…${arr[r]}] sorted & target in range → go right` })
        l = mid + 1
      } else {
        steps.push({ l, r, mid, found: false, note: `Right [${arr[mid]}…${arr[r]}] sorted, target out of range → go left` })
        r = mid - 1
      }
    }
  }
  return steps
}

export function SearchRotatedViz({ arr = [4,5,6,7,0,1,2], target = 0 }) {
  const steps = buildRotatedSteps(arr, target)
  const step = useAutoStep(steps.length)
  const { l, r, mid, found, note } = steps[step] ?? steps[0]

  return (
    <div>
      <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 8 }}>
        target = <span style={{ color: '#a78bfa', fontFamily: 'JetBrains Mono' }}>{target}</span>
      </div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {arr.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div className={`cell ${found && i === mid ? 'match' : i === mid ? 'mid' : i >= l && i <= r ? 'seen' : 'out'}`}>{v}</div>
            <div className="ptr-label" style={{
              color: i === mid ? '#f59e0b' : i === l ? '#60a5fa' : i === r ? '#f87171' : 'transparent',
              fontSize: '0.6rem',
            }}>
              {i === mid ? 'mid' : i === l ? 'l' : i === r ? 'r' : ''}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.72rem', color: found ? '#22c55e' : '#94a3b8' }}>{note}</div>
    </div>
  )
}

// ── Koko Eating Bananas ───────────────────────────────────────────────────────

export function KokoBananasViz() {
  const piles = [3, 6, 7, 11]
  const h = 8
  const canFinish = speed => piles.reduce((hrs, p) => hrs + Math.ceil(p / speed), 0) <= h

  const steps = (() => {
    const result = []
    let lo = 1, hi = Math.max(...piles)
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      const hours = piles.reduce((acc, p) => acc + Math.ceil(p / mid), 0)
      const ok = hours <= h
      result.push({ lo, hi, mid, hours, ok, done: false })
      if (ok) hi = mid - 1
      else lo = mid + 1
    }
    const ans = lo - 1 >= 1 ? lo - 1 : lo
    // find minimum speed that works
    const minSpeed = piles.reduce((best, _, __, arr) => {
      let s = 1
      while (arr.reduce((acc, p) => acc + Math.ceil(p / s), 0) > h) s++
      return s
    }, Infinity)
    const ms = Array.from({ length: Math.max(...piles) }, (_, i) => i + 1)
      .find(s => canFinish(s))
    result.push({ lo: ms, hi: ms, mid: ms, hours: piles.reduce((a, p) => a + Math.ceil(p / ms), 0), ok: true, done: true })
    return result
  })()

  const speeds = Array.from({ length: Math.max(...piles) }, (_, i) => i + 1)
  const step = useAutoStep(steps.length)
  const { lo, hi, mid, hours, ok, done } = steps[step]

  return (
    <div>
      <Label>piles=[{piles.join(', ')}]  h={h}</Label>
      <div className="cell-row" style={{ flexWrap: 'wrap', marginBottom: 6 }}>
        {speeds.map(s => (
          <div key={s}
            className={`cell ${s === mid ? (done ? 'match' : 'mid') : s >= lo && s <= hi ? 'seen' : 'out'}`}
            style={{ width: 22, height: 26, minWidth: 22, fontSize: '0.65rem' }}>{s}</div>
        ))}
      </div>
      <Note ok={done || ok}>
        {done
          ? `min speed=${mid} → ${hours} hrs ≤ ${h}`
          : `speed=${mid}: ${hours} hrs ${ok ? '≤' : '>'} ${h} → go ${ok ? 'left' : 'right'}`}
      </Note>
    </div>
  )
}

// ── Find Minimum in Rotated Sorted Array ──────────────────────────────────────

export function FindMinRotatedViz() {
  const arr = [3, 4, 5, 1, 2]

  const steps = (() => {
    const result = []
    let l = 0, r = arr.length - 1
    while (l < r) {
      const mid = Math.floor((l + r) / 2)
      if (arr[mid] > arr[r]) {
        result.push({ l, r, mid, done: false, note: `arr[mid]=${arr[mid]} > arr[r]=${arr[r]} → min is right → l=mid+1` })
        l = mid + 1
      } else {
        result.push({ l, r, mid, done: false, note: `arr[mid]=${arr[mid]} ≤ arr[r]=${arr[r]} → min is left/mid → r=mid` })
        r = mid
      }
    }
    result.push({ l, r: l, mid: l, done: true, note: `l=r=${l} → min = ${arr[l]}` })
    return result
  })()

  const step = useAutoStep(steps.length)
  const { l, r, mid, done, note } = steps[step]

  return (
    <div>
      <CellRow items={arr}
        cellClass={(v, i) => done && i === mid ? 'match' : i === mid ? 'mid' : i >= l && i <= r ? 'seen' : 'out'}
        ptrLabel={i => i === mid ? 'mid' : i === l && i !== mid ? 'l' : i === r && i !== mid ? 'r' : ''}
      />
      <Note ok={done}>{note}</Note>
    </div>
  )
}
