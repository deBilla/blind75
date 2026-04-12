import { useState, useEffect } from 'react'
import { useAutoStep, Label, Note, SVGTree, TNode, TEdge } from './primitives'

// ── Validate BST ───────────────────────��─────────────────────────────────────

export function BSTViz() {
  const [highlight, setHighlight] = useState(null)
  const nodes = [
    { id: 0, val: 5, x: '50%', y: 0,   min: '-∞', max: '∞',  valid: true },
    { id: 1, val: 3, x: '25%', y: 50,  min: '-∞', max: '5',  valid: true },
    { id: 2, val: 7, x: '75%', y: 50,  min: '5',  max: '∞',  valid: true },
    { id: 3, val: 2, x: '12%', y: 100, min: '-∞', max: '3',  valid: true },
    { id: 4, val: 6, x: '38%', y: 100, min: '3',  max: '5',  valid: false },
  ]
  useEffect(() => {
    let i = 0
    const t = setInterval(() => { setHighlight(nodes[i].id); i = (i + 1) % nodes.length }, 800)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 8 }}>
        Each node must be within (min, max) — pass range down recursively
      </div>
      <div style={{ position: 'relative', height: 140 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
          <line x1="50%" y1="18" x2="25%" y2="68" stroke="#2a2a3a" strokeWidth="1.5"/>
          <line x1="50%" y1="18" x2="75%" y2="68" stroke="#2a2a3a" strokeWidth="1.5"/>
          <line x1="25%" y1="86" x2="12%" y2="118" stroke="#2a2a3a" strokeWidth="1.5"/>
          <line x1="25%" y1="86" x2="38%" y2="118" stroke="#ef4444" strokeWidth="1.5"/>
        </svg>
        {nodes.map(n => (
          <div key={n.id} style={{
            position: 'absolute', left: n.x, top: n.y, transform: 'translateX(-50%)',
            width: 34, height: 34, borderRadius: '50%',
            border: `2px solid ${!n.valid ? '#ef4444' : n.id === highlight ? '#22c55e' : '#2a2a3a'}`,
            background: !n.valid ? 'rgba(239,68,68,0.15)' : n.id === highlight ? 'rgba(34,197,94,0.15)' : 'var(--surface2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 700,
            color: !n.valid ? '#ef4444' : n.id === highlight ? '#22c55e' : '#64748b',
            transition: 'all 0.3s',
          }}>{n.val}</div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#ef4444' }}>
        Node 6 violates max=5 constraint → NOT a valid BST
      </div>
    </div>
  )
}

// ── Shared tree layouts ───────────────────────────────────────────────────────

const L4_2_7 = {
  nodes: [
    { id: 0, val: 4, x: 120, y: 22 },
    { id: 1, val: 2, x: 65,  y: 72 },
    { id: 2, val: 7, x: 175, y: 72 },
    { id: 3, val: 1, x: 35,  y: 122 },
    { id: 4, val: 3, x: 95,  y: 122 },
    { id: 5, val: 6, x: 145, y: 122 },
    { id: 6, val: 9, x: 205, y: 122 },
  ],
  edges: [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]],
}

const L3_9_20 = {
  nodes: [
    { id: 0, val: 3,  x: 120, y: 22 },
    { id: 1, val: 9,  x: 65,  y: 72 },
    { id: 2, val: 20, x: 175, y: 72 },
    { id: 3, val: 15, x: 145, y: 122 },
    { id: 4, val: 7,  x: 205, y: 122 },
  ],
  edges: [[0,1],[0,2],[2,3],[2,4]],
}

// ── Invert Binary Tree ────────────────────────────────────────────────────────

export function InvertTreeViz() {
  const inverted = {
    nodes: [
      { id: 0, val: 4, x: 120, y: 22 },
      { id: 1, val: 7, x: 65,  y: 72 },
      { id: 2, val: 2, x: 175, y: 72 },
      { id: 3, val: 9, x: 35,  y: 122 },
      { id: 4, val: 6, x: 95,  y: 122 },
      { id: 5, val: 3, x: 145, y: 122 },
      { id: 6, val: 1, x: 205, y: 122 },
    ],
    edges: L4_2_7.edges,
  }

  const steps = [
    { layout: L4_2_7,  states: {},                          note: 'original tree' },
    { layout: L4_2_7,  states: { 0: 'current' },            note: 'visit root(4) → swap children 2 ↔ 7' },
    { layout: inverted, states: { 0: 'seen', 1: 'current', 2: 'current' }, note: 'swapped → recurse on children' },
    { layout: inverted, states: { 0: 'seen', 1: 'seen', 2: 'seen', 3: 'match', 4: 'match', 5: 'match', 6: 'match' }, note: 'leaf nodes done → tree inverted' },
  ]

  const step = useAutoStep(steps.length, 1200)
  const { layout, states, note } = steps[step]

  return (
    <div>
      <SVGTree layout={layout} nodeStates={states} />
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Maximum Depth of Binary Tree ──────────────────────────────────────────────

export function MaxDepthViz() {
  const steps = [
    { states: { 0: 'current' },                                  note: 'maxDepth(3) = 1 + max(left, right)' },
    { states: { 0: 'seen', 1: 'current' },                       note: 'maxDepth(9) → leaf → 1' },
    { states: { 0: 'seen', 1: 'seen', 2: 'current' },            note: 'maxDepth(20) = 1 + max(left, right)' },
    { states: { 0: 'seen', 1: 'seen', 2: 'seen', 3: 'current' }, note: 'maxDepth(15) → leaf → 1' },
    { states: { 0: 'seen', 1: 'seen', 2: 'seen', 3: 'seen', 4: 'current' }, note: 'maxDepth(7) → leaf → 1' },
    { states: { 0: 'match', 1: 'match', 2: 'match', 3: 'match', 4: 'match' }, note: '1 + max(1, 1+max(1,1)) = 3' },
  ]

  const step = useAutoStep(steps.length, 1000)
  return (
    <div>
      <SVGTree layout={L3_9_20} nodeStates={steps[step].states} />
      <Note ok={step === steps.length - 1}>{steps[step].note}</Note>
    </div>
  )
}

// ── Same Tree ─────────────────────────────────────────────────────────────────

export function SameTreeViz() {
  const left = {
    nodes: [
      { id: 0, val: 1, x: 50, y: 22 },
      { id: 1, val: 2, x: 20, y: 72 },
      { id: 2, val: 3, x: 80, y: 72 },
    ],
    edges: [[0,1],[0,2]],
  }
  const right = {
    nodes: [
      { id: 0, val: 1, x: 165, y: 22 },
      { id: 1, val: 2, x: 135, y: 72 },
      { id: 2, val: 3, x: 195, y: 72 },
    ],
    edges: [[0,1],[0,2]],
  }

  const steps = [
    { ls: { 0: 'current' }, rs: { 0: 'current' }, note: 'compare roots: 1 === 1 ✓' },
    { ls: { 0: 'seen', 1: 'current' }, rs: { 0: 'seen', 1: 'current' }, note: 'compare left: 2 === 2 ✓' },
    { ls: { 0: 'seen', 1: 'seen', 2: 'current' }, rs: { 0: 'seen', 1: 'seen', 2: 'current' }, note: 'compare right: 3 === 3 ✓' },
    { ls: { 0: 'match', 1: 'match', 2: 'match' }, rs: { 0: 'match', 1: 'match', 2: 'match' }, note: 'all nodes match → same tree!' },
  ]

  const step = useAutoStep(steps.length, 1000)
  const { ls, rs, note } = steps[step]

  return (
    <div>
      <svg width="240" height={100} style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}>
        {left.edges.map(([p, c], i) => (
          <TEdge key={`l${i}`} x1={left.nodes[p].x} y1={left.nodes[p].y} x2={left.nodes[c].x} y2={left.nodes[c].y} />
        ))}
        {left.nodes.map(n => <TNode key={`ln${n.id}`} x={n.x} y={n.y} val={n.val} state={ls[n.id] ?? ''} />)}
        {right.edges.map(([p, c], i) => (
          <TEdge key={`r${i}`} x1={right.nodes[p].x} y1={right.nodes[p].y} x2={right.nodes[c].x} y2={right.nodes[c].y} />
        ))}
        {right.nodes.map(n => <TNode key={`rn${n.id}`} x={n.x} y={n.y} val={n.val} state={rs[n.id] ?? ''} />)}
        <text x="120" y="46" textAnchor="middle" fill="#2a2a3a" fontSize="18" fontWeight="bold">≡</text>
      </svg>
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Level Order Traversal ─────────────────────────────────────────────────────

export function LevelOrderViz() {
  const steps = [
    { states: { 0: 'current' },                levels: [[3]],          note: 'queue=[3]  level 0' },
    { states: { 0: 'seen', 1: 'current', 2: 'current' }, levels: [[3],[9,20]],  note: 'dequeue 3 → enqueue 9,20  level 1' },
    { states: { 0: 'seen', 1: 'seen', 2: 'seen', 3: 'current', 4: 'current' }, levels: [[3],[9,20],[15,7]], note: 'dequeue 20 → enqueue 15,7  level 2' },
    { states: { 0: 'match', 1: 'match', 2: 'match', 3: 'match', 4: 'match' },  levels: [[3],[9,20],[15,7]], note: 'done → [[3],[9,20],[15,7]]' },
  ]

  const step = useAutoStep(steps.length, 1200)
  const { states, levels, note } = steps[step]

  return (
    <div>
      <SVGTree layout={L3_9_20} nodeStates={states} />
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 8 }}>
        {levels.map((row, i) => (
          <div key={i} style={{
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: 6, padding: '3px 8px',
            fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: '#a78bfa',
          }}>[{row.join(',')}]</div>
        ))}
      </div>
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Kth Smallest in BST ───────────────────────────────────────────────────────

export function KthSmallestViz() {
  const k = 2
  const layout = {
    nodes: [
      { id: 0, val: 3, x: 120, y: 22 },
      { id: 1, val: 1, x: 65,  y: 72 },
      { id: 2, val: 4, x: 175, y: 72 },
      { id: 3, val: 2, x: 95,  y: 122 },
    ],
    edges: [[0,1],[0,2],[1,3]],
  }
  // in-order visits: node 1 (val=1), node 3 (val=2), node 0 (val=3), node 2 (val=4)
  const inOrder = [
    { id: 1, count: 1 }, { id: 3, count: 2 }, { id: 0, count: 3 }, { id: 2, count: 4 },
  ]

  const steps = inOrder.map(({ id, count }) => ({
    states: {
      ...Object.fromEntries(inOrder.slice(0, inOrder.findIndex(x => x.id === id)).map(x => [x.id, 'seen'])),
      [id]: count === k ? 'match' : 'current',
    },
    note: count === k ? `visit #${count}: val=${layout.nodes[id].val} = k=${k} → found!` : `visit #${count}: val=${layout.nodes[id].val}`,
    found: count === k,
  }))

  const step = useAutoStep(steps.length, 1000)
  const { states, note, found } = steps[step]

  return (
    <div>
      <Label>in-order traversal (k={k})</Label>
      <SVGTree layout={layout} nodeStates={states} height={148} />
      <Note ok={found}>{note}</Note>
    </div>
  )
}

// ── Lowest Common Ancestor of BST ─────────────────────────────────────────────

export function LCABSTViz() {
  const p = 2, q = 8
  const layout = {
    nodes: [
      { id: 0, val: 6, x: 120, y: 22 },
      { id: 1, val: 2, x: 65,  y: 72 },
      { id: 2, val: 8, x: 175, y: 72 },
      { id: 3, val: 0, x: 35,  y: 122 },
      { id: 4, val: 4, x: 95,  y: 122 },
    ],
    edges: [[0,1],[0,2],[1,3],[1,4]],
  }

  const steps = [
    { states: { 0: 'current' }, note: `node=6: p=${p}<6 and q=${q}>6 → they split here` },
    { states: { 0: 'match' },   note: `root(6) is the split point → LCA = 6` },
  ]

  const step = useAutoStep(steps.length, 1500)
  return (
    <div>
      <Label>find LCA of p={p} and q={q}</Label>
      <SVGTree layout={layout} nodeStates={steps[step].states} height={148} />
      <Note ok={step === steps.length - 1}>{steps[step].note}</Note>
    </div>
  )
}

// ── Binary Tree Maximum Path Sum ──────────────────────────────────────────────

export function BinaryTreeMaxPathViz() {
  const layout = {
    nodes: [
      { id: 0, val: -10, x: 120, y: 22 },
      { id: 1, val: 9,   x: 65,  y: 72 },
      { id: 2, val: 20,  x: 175, y: 72 },
      { id: 3, val: 15,  x: 145, y: 122 },
      { id: 4, val: 7,   x: 205, y: 122 },
    ],
    edges: [[0,1],[0,2],[2,3],[2,4]],
  }

  const steps = [
    { states: { 3: 'current' },                    edges: {},                        note: 'DFS: node 15 → gain 15' },
    { states: { 3: 'seen', 4: 'current' },         edges: {},                        note: 'DFS: node 7 → gain 7' },
    { states: { 3: 'path', 4: 'path', 2: 'current' }, edges: { '2-3': true, '2-4': true }, note: '15+20+7=42 → new max!' },
    { states: { 3: 'match', 4: 'match', 2: 'match' }, edges: { '2-3': true, '2-4': true }, note: 'max path sum = 42' },
  ]

  const step = useAutoStep(steps.length, 1200)
  const { states, edges, note } = steps[step]

  return (
    <div>
      <SVGTree layout={layout} nodeStates={states} edgeStates={edges} height={148} />
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}
