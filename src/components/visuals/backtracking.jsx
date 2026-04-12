import { useAutoStep, Label, Note } from './primitives'

// ── Combination Sum ───────────────────────────────────────────────────────────

export function CombinationSumViz() {
  const candidates = [2, 3, 6, 7]
  const target = 7

  // Precompute the backtracking steps (DFS trace)
  const steps = (() => {
    const result = []
    function bt(start, path, remaining) {
      result.push({ path: [...path], remaining, valid: remaining === 0 })
      if (remaining === 0) return
      if (remaining < 0) return
      for (let i = start; i < candidates.length; i++) {
        path.push(candidates[i])
        bt(i, path, remaining - candidates[i])
        path.pop()
      }
    }
    bt(0, [], target)
    return result.filter(s => s.remaining >= 0).slice(0, 14) // show meaningful steps
  })()

  const step = useAutoStep(steps.length, 700)
  const { path, remaining, valid } = steps[step]

  return (
    <div>
      <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: 8, textAlign: 'center' }}>
        candidates=[{candidates.join(', ')}]  target={target}
      </div>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center' }}>
          {path.length === 0
            ? <span style={{ color: '#2a2a3a', fontFamily: 'JetBrains Mono' }}>[ ]</span>
            : path.map((v, i) => (
              <div key={i} className={`cell ${valid ? 'match' : i === path.length - 1 ? 'current' : 'seen'}`}
                style={{ width: 28, height: 28, minWidth: 28 }}>{v}</div>
            ))}
        </div>
      </div>
      <Note ok={valid || undefined}>
        {valid
          ? `[${path.join(', ')}] sums to ${target} → solution!`
          : `path=[${path.join(', ')}]  remaining=${remaining}`}
      </Note>
    </div>
  )
}

// ── Word Search ───────────────────────────────────────────────────────────────

export function WordSearchViz() {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'
  const rows = board.length, cols = board[0].length

  // Precompute one valid DFS path for 'ABCCED'
  // Path: (0,0)A → (0,1)B → (0,2)C → (0,3) no, try (1,2)C → (2,2)E → (2,1)D
  const path = [[0,0],[0,1],[0,2],[1,2],[2,2],[2,1]]

  const steps = word.split('').map((c, i) => ({
    visited: path.slice(0, i + 1),
    current: path[i],
    char: c,
    done: i === word.length - 1,
  }))

  const step = useAutoStep(steps.length, 900)
  const { visited, current, char, done } = steps[step]

  const visitedSet = new Set(visited.map(([r, c]) => `${r},${c}`))
  const isVisited = (r, c) => visitedSet.has(`${r},${c}`)
  const isCurrent = (r, c) => current[0] === r && current[1] === c

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', marginBottom: 8 }}>
        {board.map((row, r) => (
          <div key={r} style={{ display: 'flex', gap: 4 }}>
            {row.map((c, col) => (
              <div key={col}
                className={`cell ${isCurrent(r, col) ? (done ? 'match' : 'current') : isVisited(r, col) ? 'seen' : ''}`}
                style={{ width: 28, height: 28, minWidth: 28 }}>{c}</div>
            ))}
          </div>
        ))}
      </div>
      <Note ok={done}>
        {done ? `found "${word}" → true` : `DFS: match '${char}' at (${current[0]},${current[1]})`}
      </Note>
    </div>
  )
}
