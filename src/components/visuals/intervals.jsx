import { useAutoStep, Label, Note } from './primitives'

// ── Shared: interval bar ──────────────────────────────────────────────────────

function IntervalBar({ start, end, color, label, scale = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
      {label && (
        <div style={{ width: 40, fontSize: '0.65rem', color: '#64748b', fontFamily: 'JetBrains Mono', textAlign: 'right' }}>
          {label}
        </div>
      )}
      <div style={{ position: 'relative', height: 20, flexGrow: 1, maxWidth: 180 }}>
        <div style={{
          position: 'absolute',
          left: `${start * scale}%`, width: `${(end - start) * scale}%`, height: '100%',
          background: color, borderRadius: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.6rem', color: '#fff', fontFamily: 'JetBrains Mono', fontWeight: 600,
        }}>[{start},{end}]</div>
      </div>
    </div>
  )
}

// ── Merge Intervals ───────────────────────────────────────────────────────────

export function MergeIntervalsViz() {
  const sorted = [[1,3],[2,6],[8,10],[15,18]]

  const steps = (() => {
    const result = []
    const merged = [sorted[0]]
    result.push({ merged: [[...sorted[0]]], current: sorted[0], note: `init: [${sorted[0]}]` })
    for (let i = 1; i < sorted.length; i++) {
      const cur = sorted[i]
      const last = merged.at(-1)
      if (cur[0] <= last[1]) {
        last[1] = Math.max(last[1], cur[1])
        result.push({ merged: merged.map(m => [...m]), current: cur, note: `overlap! merge → [${last}]` })
      } else {
        merged.push([...cur])
        result.push({ merged: merged.map(m => [...m]), current: cur, note: `no overlap → append [${cur}]` })
      }
    }
    result.push({ merged: merged.map(m => [...m]), current: null, note: `done: ${JSON.stringify(merged)}` })
    return result
  })()

  const step = useAutoStep(steps.length, 1000)
  const { merged, current, note } = steps[step]
  const scale = 5.5 // map value to % width

  return (
    <div>
      <Label>input (sorted)</Label>
      {sorted.map((iv, i) => (
        <IntervalBar key={i} start={iv[0]} end={iv[1]} scale={scale}
          color={current && iv[0] === current[0] ? 'rgba(245,158,11,0.7)' : 'rgba(99,102,241,0.4)'}
          label={`[${iv[0]},${iv[1]}]`} />
      ))}
      <Label style={{ marginTop: 8 }}>merged</Label>
      {merged.map((iv, i) => (
        <IntervalBar key={i} start={iv[0]} end={iv[1]} scale={scale}
          color="rgba(34,197,94,0.6)" label={`[${iv[0]},${iv[1]}]`} />
      ))}
      <Note ok={!current}>{note}</Note>
    </div>
  )
}

// ── Insert Interval ───────────────────────────────────────────────────────────

export function InsertIntervalViz() {
  const intervals = [[1,3],[6,9]]
  const newInterval = [4,8]

  const steps = [
    { result: [[1,3]],                merged: false, note: '[1,3] ends before new → keep' },
    { result: [[1,3],[4,8]],          merged: false, note: '[4,8] overlaps [6,9] → merge' },
    { result: [[1,3],[4,9]],          merged: true,  note: 'merged → [4,9]' },
    { result: [[1,3],[4,9]],          merged: true,  note: 'done: [[1,3],[4,9]]' },
  ]

  const scale = 5.5
  const step = useAutoStep(steps.length, 1200)
  const { result, merged, note } = steps[step]

  return (
    <div>
      <Label>existing intervals</Label>
      {intervals.map((iv, i) => (
        <IntervalBar key={i} start={iv[0]} end={iv[1]} scale={scale}
          color="rgba(99,102,241,0.4)" label={`[${iv[0]},${iv[1]}]`} />
      ))}
      <IntervalBar start={newInterval[0]} end={newInterval[1]} scale={scale}
        color="rgba(245,158,11,0.6)" label="new" />
      <Label style={{ marginTop: 8 }}>result</Label>
      {result.map((iv, i) => (
        <IntervalBar key={i} start={iv[0]} end={iv[1]} scale={scale}
          color={merged && i === result.length - 1 ? 'rgba(34,197,94,0.6)' : 'rgba(99,102,241,0.4)'}
          label={`[${iv[0]},${iv[1]}]`} />
      ))}
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Non-overlapping Intervals ─────────────────────────────────────────────────

export function NonOverlappingViz() {
  // Sort by end: [[1,2],[1,3],[2,3],[3,4]] remove min to make non-overlapping
  const sorted = [[1,2],[1,3],[2,3],[3,4]] // sorted by end

  const steps = (() => {
    const result = []
    let removed = 0, prevEnd = -Infinity
    for (let i = 0; i < sorted.length; i++) {
      const [s, e] = sorted[i]
      if (s < prevEnd) {
        removed++
        result.push({ i, removed, prevEnd, keep: false, note: `overlap! start=${s} < prevEnd=${prevEnd} → remove [${s},${e}]` })
      } else {
        prevEnd = e
        result.push({ i, removed, prevEnd, keep: true, note: `no overlap → keep [${s},${e}], prevEnd=${e}` })
      }
    }
    result.push({ i: sorted.length, removed, prevEnd, keep: true, note: `min removals = ${removed}` })
    return result
  })()

  const scale = 16
  const step = useAutoStep(steps.length, 1000)
  const { i: ci, removed, keep, note } = steps[step]

  return (
    <div>
      <Label>sorted by end (greedy)</Label>
      {sorted.map((iv, i) => {
        const isCurrent = i === ci
        const isPast = i < ci
        return (
          <IntervalBar key={i} start={iv[0]} end={iv[1]} scale={scale}
            color={isCurrent
              ? (keep ? 'rgba(34,197,94,0.6)' : 'rgba(239,68,68,0.5)')
              : isPast ? 'rgba(99,102,241,0.3)' : 'rgba(30,30,46,0.5)'}
            label={`[${iv[0]},${iv[1]}]`} />
        )
      })}
      <Note ok={ci === sorted.length}>{note} · removed={removed}</Note>
    </div>
  )
}
