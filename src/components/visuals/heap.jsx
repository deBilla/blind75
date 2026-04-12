import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Find Median from Data Stream ──────────────────────────────────────────────

export function FindMedianViz() {
  const stream = [5, 2, 4, 1, 8, 3]

  const steps = (() => {
    const result = []
    // maxHeap = lower half (store as negatives), minHeap = upper half
    let lower = [], upper = []  // conceptual sorted arrays

    const addNum = n => {
      lower.push(n); lower.sort((a, b) => b - a)  // max-heap: descending
      upper.push(lower.shift()); upper.sort((a, b) => a - b)  // min-heap: ascending
      if (upper.length > lower.length) lower.unshift(upper.shift())
    }
    const getMedian = () => lower.length > upper.length
      ? lower[0]
      : (lower[0] + upper[0]) / 2

    for (const n of stream) {
      addNum(n)
      const med = getMedian()
      result.push({ lower: [...lower], upper: [...upper], n, median: med })
    }
    return result
  })()

  const step = useAutoStep(steps.length)
  const { lower, upper, n, median } = steps[step]

  const HeapCol = ({ vals, label, color, bg }) => (
    <div style={{ textAlign: 'center' }}>
      <Label>{label}</Label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        {vals.map((v, i) => (
          <div key={i} style={{
            width: 52, height: 26,
            background: i === 0 ? bg : 'rgba(30,30,46,0.6)',
            border: `1px solid ${i === 0 ? color : '#2a2a3a'}`,
            borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 700,
            color: i === 0 ? color : '#64748b',
          }}>{v}</div>
        ))}
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', marginBottom: 10 }}>
        add <span style={{ color: '#f59e0b', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{n}</span>
      </div>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
        <HeapCol vals={lower} label="max-heap (lower)" color="#10b981" bg="rgba(16,185,129,0.15)" />
        <HeapCol vals={upper} label="min-heap (upper)" color="#a78bfa" bg="rgba(99,102,241,0.15)" />
      </div>
      <Note ok>
        median = {median}
        {lower.length === upper.length
          ? ` = (${lower[0]} + ${upper[0]}) / 2`
          : ` = ${lower[0]} (odd total)`}
      </Note>
    </div>
  )
}

// ── Merge K Sorted Lists ──────────────────────────────────────────────────────

export function MergeKListsViz() {
  const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]

  const steps = (() => {
    const result = []
    // Simulate min-heap merge
    const heads = lists.map((l, i) => ({ val: l[0], li: i, pos: 0 }))
    const merged = []

    const remaining = lists.map(l => [...l])
    while (remaining.some(l => l.length)) {
      const opts = remaining.map((l, i) => l.length ? { val: l[0], i } : null).filter(Boolean)
      if (!opts.length) break
      opts.sort((a, b) => a.val - b.val)
      const { val, i } = opts[0]
      remaining[i].shift()
      merged.push(val)
      result.push({
        remaining: remaining.map(l => [...l]),
        merged: [...merged],
        took: val,
        fromList: i,
        heap: opts.slice(0, 3).map(o => o.val),
      })
    }
    return result
  })()

  const step = useAutoStep(steps.length, 800)
  const { remaining, merged, took, fromList, heap } = steps[step]

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 10 }}>
        {remaining.map((l, i) => (
          <div key={i}>
            <Label>list {i + 1}</Label>
            <CellRow items={l.length ? l : ['∅']}
              cellClass={(v, idx) => i === fromList && idx === 0 ? 'current' : 'seen'}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: '0.65rem', color: '#64748b' }}>heap:</span>
        {heap.map((v, i) => (
          <span key={i} style={{
            background: i === 0 ? 'rgba(34,197,94,0.15)' : 'rgba(30,30,46,0.6)',
            border: `1px solid ${i === 0 ? '#22c55e' : '#2a2a3a'}`,
            borderRadius: 5, padding: '1px 7px',
            fontSize: '0.7rem', fontFamily: 'JetBrains Mono',
            color: i === 0 ? '#22c55e' : '#64748b',
          }}>{v}</span>
        ))}
      </div>
      <Label>merged</Label>
      <CellRow items={merged} cellClass={(v, i) => i === merged.length - 1 ? 'match' : 'seen'} />
      <Note>pop min={took} from list {fromList + 1}</Note>
    </div>
  )
}
