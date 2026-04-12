import { useState, useEffect } from 'react'

// ── Hook ──────────────────────────────────────────────────────────────────────

/** Auto-advances 0 → total-1, pauses at last step then restarts. */
export function useAutoStep(total, stepMs = 900, pauseMs = 2200) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const isLast = step >= total - 1
    const t = setTimeout(
      () => setStep(s => (isLast ? 0 : s + 1)),
      isLast ? pauseMs : stepMs
    )
    return () => clearTimeout(t)
  }, [step, total])
  return step
}

// ── Text helpers ──────────────────────────────────────────────────────────────

export function Label({ children }) {
  return (
    <div style={{
      fontSize: '0.65rem', color: '#64748b', marginBottom: 5,
      textTransform: 'uppercase', letterSpacing: '0.05em',
    }}>
      {children}
    </div>
  )
}

/** ok=true → green  ok=false → red  undefined → gray */
export function Note({ children, ok }) {
  const color = ok === true ? '#22c55e' : ok === false ? '#ef4444' : '#94a3b8'
  return <div style={{ fontSize: '0.72rem', marginTop: 6, color }}>{children}</div>
}

// ── Cell row ──────────────────────────────────────────────────────────────────

/**
 * Renders items as a row of .cell divs.
 * cellClass(value, index) → extra CSS class string
 * ptrLabel(index)         → pointer label text (hidden when falsy)
 */
export function CellRow({ items, cellClass, ptrLabel, style }) {
  return (
    <div className="cell-row" style={style}>
      {items.map((v, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div className={`cell ${cellClass ? cellClass(v, i) : ''}`}>{v}</div>
          {ptrLabel && (
            <div className="ptr-label" style={{ color: ptrLabel(i) ? '#94a3b8' : 'transparent' }}>
              {ptrLabel(i) || '_'}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Hash display ──────────────────────────────────────────────────────────────

/** Renders a plain object as key:value chips. */
export function HashRow({ map, style }) {
  const entries = Object.entries(map)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center', minHeight: 24, ...style }}>
      {entries.length === 0 && (
        <span style={{ fontSize: '0.7rem', color: '#2a2a3a', fontFamily: 'JetBrains Mono' }}>{'{}'}</span>
      )}
      {entries.map(([k, v]) => (
        <span key={k} style={{
          background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: 5, padding: '2px 8px', fontSize: '0.7rem',
          fontFamily: 'JetBrains Mono', color: '#a78bfa',
        }}>{k}:{v}</span>
      ))}
    </div>
  )
}

// ── SVG tree primitives ───────────────────────────────────────────────────────

const NODE_STYLES = {
  '':       { stroke: '#2a2a3a', fill: 'var(--surface2)',          text: '#64748b' },
  current:  { stroke: '#f59e0b', fill: 'rgba(245,158,11,0.2)',     text: '#fbbf24' },
  seen:     { stroke: '#6366f1', fill: 'rgba(99,102,241,0.15)',    text: '#a78bfa' },
  match:    { stroke: '#22c55e', fill: 'rgba(34,197,94,0.15)',     text: '#22c55e' },
  path:     { stroke: '#ec4899', fill: 'rgba(236,72,153,0.12)',    text: '#ec4899' },
  invalid:  { stroke: '#ef4444', fill: 'rgba(239,68,68,0.15)',     text: '#ef4444' },
}

export function TNode({ x, y, val, state = '' }) {
  const s = NODE_STYLES[state] ?? NODE_STYLES['']
  return (
    <g>
      <circle cx={x} cy={y} r={15} fill={s.fill} stroke={s.stroke} strokeWidth={1.5} />
      <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle"
        fill={s.text} fontSize="11" fontFamily="JetBrains Mono" fontWeight="700">
        {val}
      </text>
    </g>
  )
}

export function TEdge({ x1, y1, x2, y2, highlight = false }) {
  return (
    <line x1={x1} y1={y1 + 15} x2={x2} y2={y2 - 15}
      stroke={highlight ? '#ec4899' : '#2a2a3a'}
      strokeWidth={highlight ? 2 : 1.5} />
  )
}

/**
 * Renders a tree from a layout descriptor.
 * layout = { nodes: [{id, val, x, y}], edges: [[parentId, childId], ...] }
 * nodeStates = { id: 'current' | 'seen' | 'match' | 'path' | 'invalid' }
 * edgeStates = { 'p-c': true }  → pink highlight
 */
export function SVGTree({ layout, nodeStates = {}, edgeStates = {}, height = 148 }) {
  return (
    <svg width="240" height={height}
      style={{ overflow: 'visible', display: 'block', margin: '0 auto' }}>
      {layout.edges.map(([p, c], i) => {
        const pn = layout.nodes[p], cn = layout.nodes[c]
        return (
          <TEdge key={i}
            x1={pn.x} y1={pn.y} x2={cn.x} y2={cn.y}
            highlight={edgeStates[`${p}-${c}`] ?? false} />
        )
      })}
      {layout.nodes.map(n => (
        <TNode key={n.id} x={n.x} y={n.y} val={n.val} state={nodeStates[n.id] ?? ''} />
      ))}
    </svg>
  )
}
