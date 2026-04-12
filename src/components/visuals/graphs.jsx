import { useAutoStep, Label, Note } from './primitives'

// ── Shared: grid cell ─────────────────────────────────────────────────────────

function GridCell({ val, state }) {
  const bg = {
    '':        'rgba(30,30,46,0.6)',
    water:     'rgba(96,165,250,0.15)',
    visiting:  'rgba(245,158,11,0.3)',
    visited:   'rgba(99,102,241,0.3)',
    pacific:   'rgba(96,165,250,0.4)',
    atlantic:  'rgba(239,68,68,0.3)',
    both:      'rgba(34,197,94,0.4)',
  }[state] ?? 'rgba(30,30,46,0.6)'
  const border = {
    '':        '#2a2a3a',
    water:     '#3b82f6',
    visiting:  '#f59e0b',
    visited:   '#6366f1',
    pacific:   '#60a5fa',
    atlantic:  '#ef4444',
    both:      '#22c55e',
  }[state] ?? '#2a2a3a'

  return (
    <div style={{
      width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: bg, border: `1px solid ${border}`, borderRadius: 4,
      fontFamily: 'JetBrains Mono', fontSize: '0.75rem', fontWeight: 600,
      color: state ? '#e2e8f0' : '#64748b',
      transition: 'all 0.3s',
    }}>{val}</div>
  )
}

function Grid({ board, getState }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      {board.map((row, r) => (
        <div key={r} style={{ display: 'flex', gap: 3 }}>
          {row.map((val, c) => (
            <GridCell key={c} val={val} state={getState(r, c)} />
          ))}
        </div>
      ))}
    </div>
  )
}

// ── Number of Islands ─────────────────────────────────────────────────────────

export function NumberOfIslandsViz() {
  const grid = [
    ['1','1','0','0'],
    ['1','1','0','0'],
    ['0','0','1','0'],
    ['0','0','0','1'],
  ]
  const rows = grid.length, cols = grid[0].length

  // BFS flood-fill steps
  const steps = (() => {
    const result = []
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false))
    let count = 0

    const bfs = (sr, sc) => {
      const queue = [[sr, sc]]
      visited[sr][sc] = true
      while (queue.length) {
        const [r, c] = queue.shift()
        result.push({ visited: visited.map(row => [...row]), current: [r, c], count })
        for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          const nr = r + dr, nc = c + dc
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1' && !visited[nr][nc]) {
            visited[nr][nc] = true
            queue.push([nr, nc])
          }
        }
      }
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '1' && !visited[r][c]) {
          count++
          bfs(r, c)
        }
      }
    }
    result.push({ visited: visited.map(row => [...row]), current: null, count })
    return result
  })()

  const step = useAutoStep(steps.length, 500)
  const { visited, current, count } = steps[step]

  return (
    <div>
      <Grid board={grid} getState={(r, c) => {
        if (grid[r][c] === '0') return 'water'
        if (current && current[0] === r && current[1] === c) return 'visiting'
        if (visited[r][c]) return 'visited'
        return ''
      }} />
      <Note ok={count > 0}>islands found so far: {count}</Note>
    </div>
  )
}

// ── Clone Graph ───────────────────────────────────────────────────────────────

export function CloneGraphViz() {
  // 4-node graph: 1-2, 1-4, 2-3, 3-4
  const nodes = [1, 2, 3, 4]
  const edges = [[0,1],[0,3],[1,2],[2,3]]

  const steps = [
    { cloned: [],      current: 0, note: 'start BFS from node 1' },
    { cloned: [0],     current: 1, note: 'clone node 1 → visit neighbors 2, 4' },
    { cloned: [0,1],   current: 2, note: 'clone node 2 → visit neighbor 3' },
    { cloned: [0,1,2], current: 3, note: 'clone node 3' },
    { cloned: [0,1,2,3], current: -1, note: 'all nodes cloned with edges!' },
  ]

  const step = useAutoStep(steps.length, 1000)
  const { cloned, current, note } = steps[step]

  const cx = [60, 180, 180, 60]
  const cy = [50, 50, 130, 130]
  const clonedX = cx.map(x => x + 0)
  const clonedY = cy.map(y => y + 0)

  return (
    <div>
      <svg width="240" height={170} style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}>
        {/* edges */}
        {edges.map(([a, b], i) => (
          <line key={i} x1={cx[a]} y1={cy[a]} x2={cx[b]} y2={cy[b]}
            stroke={cloned.includes(a) && cloned.includes(b) ? '#22c55e' : '#2a2a3a'} strokeWidth={1.5} />
        ))}
        {/* nodes */}
        {nodes.map((val, i) => {
          const isCloned = cloned.includes(i)
          const isCurrent = current === i
          return (
            <g key={i}>
              <circle cx={cx[i]} cy={cy[i]} r={18}
                fill={isCurrent ? 'rgba(245,158,11,0.25)' : isCloned ? 'rgba(34,197,94,0.2)' : 'var(--surface2)'}
                stroke={isCurrent ? '#f59e0b' : isCloned ? '#22c55e' : '#2a2a3a'} strokeWidth={1.5} />
              <text x={cx[i]} y={cy[i] + 1} textAnchor="middle" dominantBaseline="middle"
                fill={isCurrent ? '#fbbf24' : isCloned ? '#22c55e' : '#64748b'}
                fontSize="12" fontFamily="JetBrains Mono" fontWeight="700">{val}</text>
            </g>
          )
        })}
        <text x={120} y={165} textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">
          visited: {`{${cloned.map(i => nodes[i]).join(', ')}}`}
        </text>
      </svg>
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Course Schedule ───────────────────────────────────────────────────────────

export function CourseScheduleViz() {
  // 4 courses, no cycle: 0←1, 0←2, 1←3
  const n = 4
  const prereqs = [[0,1],[0,2],[1,3]] // [course, prereq]
  const adj = Array.from({ length: n }, () => [])
  prereqs.forEach(([c, p]) => adj[c].push(p))

  // DFS states: 0=unvisited, 1=visiting, 2=done
  const steps = [
    { states: [0,0,0,0], current: -1, note: 'start DFS from each unvisited node' },
    { states: [1,0,0,0], current: 0,  note: 'visit 0 → explore prereqs [1, 2]' },
    { states: [1,1,0,0], current: 1,  note: 'visit 1 → explore prereq [3]' },
    { states: [1,1,0,1], current: 3,  note: 'visit 3 → no prereqs → done' },
    { states: [1,2,0,2], current: 1,  note: 'node 1 done (no cycle)' },
    { states: [1,2,1,2], current: 2,  note: 'visit 2 → no prereqs → done' },
    { states: [2,2,2,2], current: -1, note: 'all done → no cycle → can finish!' },
  ]

  const cx = [120, 60, 180, 120]
  const cy = [20,  80,  80, 140]

  const step = useAutoStep(steps.length, 900)
  const { states, current, note } = steps[step]

  const stateColor = { 0: '#2a2a3a', 1: '#f59e0b', 2: '#22c55e' }
  const stateFill  = { 0: 'var(--surface2)', 1: 'rgba(245,158,11,0.2)', 2: 'rgba(34,197,94,0.15)' }

  return (
    <div>
      <svg width="240" height={165} style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}>
        {prereqs.map(([c, p], i) => (
          <line key={i} x1={cx[c]} y1={cy[c]} x2={cx[p]} y2={cy[p]}
            stroke="#2a2a3a" strokeWidth={1.5}
            markerEnd="url(#arr)" />
        ))}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <circle cx={cx[i]} cy={cy[i]} r={18}
              fill={stateFill[states[i]]} stroke={stateColor[states[i]]} strokeWidth={2} />
            <text x={cx[i]} y={cy[i] + 1} textAnchor="middle" dominantBaseline="middle"
              fill={stateColor[states[i]]} fontSize="12" fontFamily="JetBrains Mono" fontWeight="700">{i}</text>
          </g>
        ))}
        <text x={120} y={162} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">
          white=unvisited · yellow=visiting · green=done
        </text>
      </svg>
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Pacific Atlantic Water Flow ────────────────────────────────────────────────

export function PacificAtlanticViz() {
  const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]
  const rows = heights.length, cols = heights[0].length

  // Precompute reachable from Pacific (top+left) and Atlantic (bottom+right)
  const bfsReach = (starts) => {
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false))
    const queue = [...starts]
    starts.forEach(([r, c]) => (visited[r][c] = true))
    while (queue.length) {
      const [r, c] = queue.shift()
      for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nr = r + dr, nc = c + dc
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
          && !visited[nr][nc] && heights[nr][nc] >= heights[r][c]) {
          visited[nr][nc] = true
          queue.push([nr, nc])
        }
      }
    }
    return visited
  }

  const pacificStarts = [
    ...Array.from({ length: rows }, (_, r) => [r, 0]),
    ...Array.from({ length: cols }, (_, c) => [0, c]),
  ]
  const atlanticStarts = [
    ...Array.from({ length: rows }, (_, r) => [r, cols - 1]),
    ...Array.from({ length: cols }, (_, c) => [rows - 1, c]),
  ]

  const pac = bfsReach(pacificStarts)
  const atl = bfsReach(atlanticStarts)

  const phases = [
    { label: 'Pacific reach (top+left)',   getState: (r, c) => pac[r][c] ? 'pacific' : '' },
    { label: 'Atlantic reach (btm+right)', getState: (r, c) => atl[r][c] ? 'atlantic' : '' },
    { label: 'Both → flows to both oceans', getState: (r, c) => pac[r][c] && atl[r][c] ? 'both' : pac[r][c] ? 'pacific' : atl[r][c] ? 'atlantic' : '' },
  ]

  const step = useAutoStep(phases.length, 1500, 2500)
  const { label, getState } = phases[step]

  return (
    <div>
      <Label>{label}</Label>
      <Grid board={heights} getState={getState} />
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 8 }}>
        {[['pacific','#60a5fa','Pacific'], ['atlantic','#ef4444','Atlantic'], ['both','#22c55e','Both']].map(([key, color, text]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.65rem', color: '#64748b' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: color, opacity: 0.7 }} />
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
