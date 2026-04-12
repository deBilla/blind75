import { useState, useEffect } from 'react'
import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Reverse Linked List ───────────────────────────────────────────────────────

export function LinkedListReversalViz() {
  const vals = [1, 2, 3, 4, 5]
  const maxSteps = vals.length - 1
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % (maxSteps + 2)), 900)
    return () => clearInterval(t)
  }, [])

  const reversed = vals.slice(0, step + 1).reverse()
  const rest = vals.slice(step + 1)

  return (
    <div>
      <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 8 }}>
        prev=None, curr moves right — flip pointer at each step
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
        {reversed.map((v, i) => (
          <div key={`r${i}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`cell ${i === 0 ? 'match' : 'seen'}`}>{v}</div>
            {i < reversed.length - 1 && <div style={{ color: '#6366f1', margin: '0 2px', paddingBottom: 2 }}>←</div>}
          </div>
        ))}
        {reversed.length > 0 && rest.length > 0 && (
          <div style={{ color: '#2a2a3a', margin: '0 4px', paddingBottom: 2 }}>|</div>
        )}
        {rest.map((v, i) => (
          <div key={`f${i}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`cell ${i === 0 ? 'current' : ''}`}>{v}</div>
            {i < rest.length - 1 && <div style={{ color: '#2a2a3a', margin: '0 2px', paddingBottom: 2 }}>→</div>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: '0.75rem', color: '#64748b' }}>
        <span style={{ color: '#22c55e' }}>← reversed</span> &nbsp;|&nbsp;
        <span style={{ color: '#f59e0b' }}>curr</span> &nbsp;|&nbsp;
        <span style={{ color: '#64748b' }}>→ forward</span>
      </div>
    </div>
  )
}

// ── Shared: linked list row ───────────────────────────────────────────────────

function NodeRow({ vals, ptrs = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      {vals.map((v, i) => {
        const label = Object.entries(ptrs)
          .filter(([, idx]) => idx === i)
          .map(([name]) => name)
          .join('/')
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div className={`cell ${label ? 'current' : ''}`}>{v ?? 'null'}</div>
              <div className="ptr-label" style={{ color: label ? '#94a3b8' : 'transparent' }}>
                {label || '_'}
              </div>
            </div>
            {i < vals.length - 1 && (
              <div style={{ color: '#2a2a3a', margin: '0 3px', paddingBottom: 18 }}>→</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Merge Two Sorted Lists ────────────────────────────────────────────────────

export function MergeTwoListsViz() {
  const l1 = [1, 3, 5], l2 = [2, 4, 6]

  const steps = (() => {
    const result = []
    let i = 0, j = 0
    const merged = []
    while (i < l1.length && j < l2.length) {
      if (l1[i] <= l2[j]) {
        merged.push(l1[i])
        result.push({ i, j, merged: [...merged], note: `${l1[i]} ≤ ${l2[j]} → take from l1` })
        i++
      } else {
        merged.push(l2[j])
        result.push({ i, j, merged: [...merged], note: `${l1[i]} > ${l2[j]} → take from l2` })
        j++
      }
    }
    while (i < l1.length) { merged.push(l1[i]); result.push({ i, j, merged: [...merged], note: 'append rest of l1' }); i++ }
    while (j < l2.length) { merged.push(l2[j]); result.push({ i, j, merged: [...merged], note: 'append rest of l2' }); j++ }
    return result
  })()

  const step = useAutoStep(steps.length)
  const { i, j, merged, note } = steps[step]

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
        <div>
          <Label>l1</Label>
          <CellRow items={l1} cellClass={(v, idx) => idx === i ? 'current' : idx < i ? 'seen' : ''} />
        </div>
        <div>
          <Label>l2</Label>
          <CellRow items={l2} cellClass={(v, idx) => idx === j ? 'current' : idx < j ? 'seen' : ''} />
        </div>
      </div>
      <Label>merged</Label>
      <CellRow items={merged} cellClass={(v, idx) => idx === merged.length - 1 ? 'match' : 'seen'} />
      <Note>{note}</Note>
    </div>
  )
}

// ── Reorder List ──────────────────────────────────────────────────────────────

export function ReorderListViz() {
  const phases = [
    { label: 'Step 1: find middle (slow/fast)', vals: [1, 2, '|', 3, 4, 5], note: 'fast=2× speed → mid at node 3' },
    { label: 'Step 2: reverse second half',     vals: [1, 2, 5, 4, 3],      note: 'reverse [3,4,5] → [5,4,3]' },
    { label: 'Step 3: interleave halves',        vals: [1, 5, 2, 4, 3],      note: '1→5→2→4→3  done' },
  ]

  const step = useAutoStep(phases.length, 1500, 2500)
  const { label, vals, note } = phases[step]

  return (
    <div>
      <Label>{label}</Label>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {vals.map((v, i) => (
          <div key={i}
            className={`cell ${v === '|' ? 'highlight' : step === 2 ? 'match' : step === 1 && i >= 2 ? 'current' : 'seen'}`}
            style={{ width: 28, height: 28, minWidth: 28 }}>{v}</div>
        ))}
      </div>
      <Note ok={step === 2}>{note}</Note>
    </div>
  )
}

// ── Remove Nth Node From End ──────────────────────────────────────────────────

export function RemoveNthViz() {
  const list = [1, 2, 3, 4, 5]
  const n = 2

  const steps = (() => {
    const result = []
    let fast = 0, slow = 0
    for (let i = 0; i < n; i++) {
      fast++
      result.push({ slow, fast, phase: 'advance', note: `advance fast ${i + 1}/${n} steps (gap = ${n})` })
    }
    while (fast < list.length) {
      result.push({ slow, fast, phase: 'scan', note: `both advance: slow=${slow} → next=${slow + 1}` })
      slow++; fast++
    }
    result.push({ slow, fast, phase: 'remove', note: `remove node at index ${slow} (value ${list[slow]})` })
    return result
  })()

  const step = useAutoStep(steps.length)
  const { slow, fast, phase, note } = steps[step]

  return (
    <div>
      <CellRow items={list}
        cellClass={(v, i) =>
          phase === 'remove' && i === slow ? 'out'
          : i === slow ? 'left-ptr'
          : i === fast && fast < list.length ? 'right-ptr'
          : ''
        }
        ptrLabel={i =>
          i === slow && i === fast ? 'slow/fast'
          : i === slow ? 'slow'
          : i === fast && fast < list.length ? 'fast'
          : ''
        }
      />
      <Note ok={phase === 'remove'}>{note}</Note>
    </div>
  )
}

// ── Linked List Cycle ─────────────────────────────────────────────────────────

export function LinkedListCycleViz() {
  const nodes = [3, 2, 0, -4]
  const cycleStart = 1  // tail loops back to index 1

  const next = i => (i === nodes.length - 1 ? cycleStart : i + 1)

  const steps = (() => {
    const result = []
    let slow = 0, fast = 0
    for (let iter = 0; iter < 8; iter++) {
      slow = next(slow)
      fast = next(next(fast))
      const meet = slow === fast
      result.push({ slow, fast, meet, note: meet ? `slow===fast at [${slow}] → CYCLE!` : `slow=[${slow}]${nodes[slow]}  fast=[${fast}]${nodes[fast]}` })
      if (meet) break
    }
    return result
  })()

  const step = useAutoStep(steps.length, 800)
  const { slow, fast, meet, note } = steps[step]

  return (
    <div>
      <CellRow items={nodes}
        cellClass={(v, i) =>
          meet && i === slow ? 'match'
          : i === slow && i === fast ? 'match'
          : i === slow ? 'left-ptr'
          : i === fast ? 'right-ptr'
          : ''
        }
        ptrLabel={i =>
          meet && i === slow ? 'meet'
          : i === slow && i === fast ? 'S/F'
          : i === slow ? 'slow'
          : i === fast ? 'fast'
          : ''
        }
      />
      <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: 4, textAlign: 'center' }}>
        tail(-4) loops back to node[{cycleStart}]={nodes[cycleStart]}
      </div>
      <Note ok={meet}>{note}</Note>
    </div>
  )
}
